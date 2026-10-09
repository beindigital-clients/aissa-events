import { stegaClean } from "@sanity/client/stega";

export type CtaShape = {
  label: string | null;
  type: "anchor" | "booking" | "calendly" | "external" | "form" | "internal" | null;
  internalPath: string | null;
  externalUrl: string | null;
  anchor: string | null;
  variant: "ghost" | "primary" | "secondary" | null;
};

export type ResolvedCta = {
  label: string;
  href: string;
  external: boolean;
  variant: "primary" | "secondary" | "ghost";
};

/**
 * Schémas autorisés pour les URLs externes. Rejette explicitement `javascript:`,
 * `data:`, `vbscript:`, etc. afin de bloquer toute XSS stockée via le CMS.
 */
const SAFE_EXTERNAL_URL = /^(https?:|mailto:|tel:)/i;

/**
 * Valide qu'un chemin interne reste sur le site (commence par "/" mais pas par
 * "//evil.com" ni "\\evil.com") et ne contient pas de schéma exotique.
 */
function sanitizeInternalPath(path: string | null | undefined): string | null {
  if (!path) return null;
  // Doit commencer par "/" et pas par "//" ou "/\\"
  if (!path.startsWith("/")) return null;
  if (path.startsWith("//") || path.startsWith("/\\")) return null;
  // Rejet de tout ce qui ressemble à un schéma (javascript:, data:, etc.)
  if (/^[a-z]+:/i.test(path.slice(1))) return null;
  return path;
}

/**
 * Valide qu'une ancre est un identifiant simple (chiffres, lettres, tiret, underscore).
 */
function sanitizeAnchor(anchor: string | null | undefined): string | null {
  if (!anchor) return null;
  return /^[a-z0-9_-]+$/i.test(anchor) ? anchor : null;
}

/**
 * En aperçu (draft mode), les chaînes Sanity portent des marqueurs stega
 * « click-to-edit ». On nettoie les valeurs qui servent d'ADRESSE (chemin,
 * URL, ancre), sinon les marqueurs corrompent le href ou font rejeter la CTA.
 * Le LIBELLÉ garde ses marqueurs : un clic sur un bouton ouvre son champ à
 * modifier dans le Studio.
 */
function cleanCta(cta: CtaShape): CtaShape {
  return {
    ...cta,
    internalPath: stegaClean(cta.internalPath),
    externalUrl: stegaClean(cta.externalUrl),
    anchor: stegaClean(cta.anchor),
  };
}

export function resolveCta(input: CtaShape | null | undefined): ResolvedCta | null {
  if (!input?.label) return null;
  const cta = cleanCta(input);
  const label = cta.label;
  if (!label) return null;

  const variant = cta.variant ?? "primary";
  const baseExternal = { label, external: true, variant };

  switch (cta.type) {
    // `booking`/`calendly` conservés pour rétro-compat des documents Sanity
    // existants. Le scheduler de RDV natif a été retiré : ces CTAs pointent
    // désormais vers le formulaire de contact.
    case "booking":
    case "calendly":
      return {
        label,
        href: "/#contact",
        external: false,
        variant,
      };
    case "external": {
      if (!cta.externalUrl) return null;
      if (!SAFE_EXTERNAL_URL.test(cta.externalUrl)) return null;
      return { ...baseExternal, href: cta.externalUrl };
    }
    case "internal": {
      // Pas de fallback silencieux vers "/" : si le CMS n'a pas renseigné de
      // chemin valide, on retourne null pour que la CTA disparaisse et que
      // l'admin voie qu'il manque la destination.
      const safePath = sanitizeInternalPath(cta.internalPath);
      if (!safePath) return null;
      return {
        label,
        href: safePath,
        external: false,
        variant,
      };
    }
    case "anchor": {
      const safeAnchor = sanitizeAnchor(cta.anchor);
      if (!safeAnchor) return null;
      return {
        label,
        href: `#${safeAnchor}`,
        external: false,
        variant,
      };
    }
    case "form":
      // `#contact` n'existe que sur la home — on force la navigation
      // cross-page pour que le CTA fonctionne depuis n'importe quelle page.
      return {
        label,
        href: "/#contact",
        external: false,
        variant,
      };
    default:
      return null;
  }
}
