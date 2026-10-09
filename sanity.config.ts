import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  presentationTool,
  defineDocuments,
  defineLocations,
} from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { muxInput } from "sanity-plugin-mux-input";
import { schemaTypes } from "./sanity/schemas";
import { structure, SINGLETON_TYPES } from "./sanity/structure";
import { generateArticleAction } from "./sanity/actions/generateArticleAction";
import { dropboxAssetSource } from "./sanity/assetSources/dropbox";
import { env } from "./env";

const isDev = process.env.NODE_ENV === "development";

/**
 * Pages « singleton » : type de document Sanity → route du site.
 * Sert à l'Aperçu en direct : choisir une page dans le Studio ouvre sa route,
 * et naviguer sur une route ouvre le bon document à éditer.
 */
const PAGE_ROUTES = [
  { type: "homePage", route: "/", title: "Accueil" },
  { type: "espaceEventsPage", route: "/espace-events", title: "Espace Events" },
  { type: "evenementPage", route: "/entreprises", title: "Entreprises" },
  { type: "mariagePage", route: "/mariage", title: "Mariage" },
  { type: "realisationsPage", route: "/realisations", title: "Réalisations" },
  { type: "blogPage", route: "/blog", title: "Blog" },
] as const;

const PREVIEW_ORIGIN =
  typeof window === "undefined"
    ? env.NEXT_PUBLIC_SITE_URL
    : window.location.origin;

export default defineConfig({
  name: "aissa-events",
  title: "Aïssa Events",
  basePath: "/studio",
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      title: "Aperçu en direct",
      resolve: {
        mainDocuments: defineDocuments(
          PAGE_ROUTES.map(({ type, route }) => ({
            route,
            filter: `_type == "${type}"`,
          })),
        ),
        locations: Object.fromEntries(
          PAGE_ROUTES.map(({ type, route, title }) => [
            type,
            defineLocations({ locations: [{ title, href: route }] }),
          ]),
        ),
      },
      previewUrl: {
        origin: PREVIEW_ORIGIN,
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    muxInput(),
    ...(isDev ? [visionTool({ defaultApiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION })] : []),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !SINGLETON_TYPES.has(schemaType),
      ),
  },
  form: {
    // Ajoute l'onglet « Dropbox » au sélecteur d'image (à côté de « Upload »).
    image: {
      assetSources: (previousAssetSources) => [
        ...previousAssetSources,
        dropboxAssetSource,
      ],
    },
  },
  document: {
    actions: (input, context) => {
      if (SINGLETON_TYPES.has(context.schemaType)) {
        return input.filter(
          ({ action }) => action && !["unpublish", "delete", "duplicate"].includes(action),
        );
      }
      if (context.schemaType === "post") {
        return [...input, generateArticleAction];
      }
      return input;
    },
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global"
        ? prev.filter(
            (template) => !SINGLETON_TYPES.has(template.templateId),
          )
        : prev,
  },
});
