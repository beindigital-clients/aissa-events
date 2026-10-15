# Graph Report - aissa-events  (2026-10-15)

## Corpus Check
- 297 files · ~143,625 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .css 2, .example 1)

## Summary
- 1504 nodes · 3905 edges · 90 communities (72 shown, 18 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- En-tête, pied de page et UI
- Formulaires de contact
- Page Mariage
- Page Espace Events
- Réalisations et blog
- Héros des pages
- Page Entreprises
- Galerie Espace Events
- À la carte et conditions
- Santé de l agent WhatsApp
- Dépendances npm
- Webhook Meta
- Page d accueil
- Agent WhatsApp (réponses)
- Layout racine et aperçu
- Docs : voix de marque et agents
- Générateur d articles IA
- Config du projet
- Envoi Meta (WhatsApp)
- Scripts de correction Sanity
- Catalogue d images
- Schémas Sanity
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 39
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- Community 52
- Community 53
- Community 54
- Community 55
- Community 56
- Community 57
- Community 58
- Community 59
- Community 60
- Community 61
- Community 62
- Community 63
- Community 64
- Community 65
- Community 66
- Community 67
- Community 68
- Community 69
- Community 70
- Community 71
- Community 72
- Community 73
- Community 74
- Community 76
- Community 77
- Community 78
- Community 79
- Community 80
- Community 81
- Community 82
- Community 83
- Community 84
- Community 85
- Community 86
- Community 87
- Community 88
- Community 89

## God Nodes (most connected - your core abstractions)
1. `Eyebrow()` - 110 edges
2. `renderInlineItalic()` - 107 edges
3. `motion` - 89 edges
4. `next` - 82 edges
5. `resolveCta()` - 68 edges
6. `lucide-react` - 67 edges
7. `cn()` - 64 edges
8. `urlForImageString()` - 60 edges
9. `react` - 53 edges
10. `server-only` - 39 edges

## Surprising Connections (you probably didn't know these)
- `generateMetadata()` --calls--> `urlForImageString()`  [EXTRACTED]
  app/(site)/blog/[slug]/page.tsx → lib/sanity/image.ts
- `BlogRelatedSection()` --calls--> `BlogRelated()`  [EXTRACTED]
  app/(site)/blog/[slug]/page.tsx → components/blog/related.tsx
- `BlogRelatedSection()` --calls--> `sanityFetch()`  [EXTRACTED]
  app/(site)/blog/[slug]/page.tsx → lib/sanity/fetch.ts
- `ArticleJsonLd()` --calls--> `urlForImageString()`  [EXTRACTED]
  app/(site)/blog/[slug]/page.tsx → lib/sanity/image.ts
- `BreadcrumbJsonLd()` --calls--> `safeJsonLd()`  [EXTRACTED]
  app/(site)/blog/[slug]/page.tsx → lib/seo/json-ld.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Brand identity guidelines (voice, design, art direction)** — brand_voice, design, brand_voice_aissa_persona, design_art_direction, design_color_palette [INFERRED 0.85]
- **AI article quality controls** — brand_voice_banned_phrases, brand_voice_typographic_style, brand_voice_reference_paragraphs, brand_voice_anti_ai_checklist, brand_voice_prompt_system [INFERRED 0.85]
- **Agent instruction chain** — claude, agents, agents_nextjs_agent_rules [EXTRACTED 1.00]

## Communities (90 total, 18 thin omitted)

### Community 0 - "En-tête, pied de page et UI"
Cohesion: 0.05
Nodes (63): CtaLink(), variantClasses, buildFooterColumns(), buildLegalLinks(), FooterColumn, formatAddressLines(), POWERED_BY, SiteFooter() (+55 more)

### Community 1 - "Formulaires de contact"
Cohesion: 0.08
Nodes (47): BusinessLeadState, INITIAL_BUSINESS_STATE, submitBusinessForm(), ContactFormState, INITIAL_CONTACT_STATE, submitContactForm(), Label(), QualifData (+39 more)

### Community 2 - "Page Mariage"
Cohesion: 0.06
Nodes (47): MariagePage(), WeddingPlannerJsonLd(), Eyebrow(), ALaCarteData, CATEGORY_LABELS, FALLBACK_CATEGORIES, FallbackCategory, MariageALaCarte() (+39 more)

### Community 3 - "Page Espace Events"
Cohesion: 0.07
Nodes (47): EspaceEmerainvillePage(), generateMetadata(), getEspaceData(), LocalBusinessJsonLd(), BlogEmptyState(), ALaCarte(), CollapsibleVariant(), ComparisonColumn (+39 more)

### Community 4 - "Réalisations et blog"
Cohesion: 0.08
Nodes (34): getRealisationsList(), RealisationsPage(), ArticleCtaData, FinalCtaData, FaqData, NotYetDecidedData, StickyCtaData, ALaCarteData (+26 more)

### Community 5 - "Héros des pages"
Cohesion: 0.09
Nodes (37): EspaceHero(), fadeUp, HeroData, stagger, EvenementHero(), fadeUp, HeroData, stagger (+29 more)

### Community 6 - "Page Entreprises"
Cohesion: 0.10
Nodes (31): EvenementPage(), generateMetadata(), getEvenementData(), ProServiceJsonLd(), BudgetData, EvenementBudget(), EvenementCtaFinal(), FinalCtaData (+23 more)

### Community 7 - "Galerie Espace Events"
Cohesion: 0.10
Nodes (34): EspaceGallery(), GalleryData, GalleryImage, ImageTile(), QUOTE_FALLBACK, QuoteTile(), Slot, SLOTS (+26 more)

### Community 8 - "À la carte et conditions"
Cohesion: 0.09
Nodes (29): ALaCarteData, Category, CATEGORY_LABELS, Item, ConditionsData, LocationOnlyData, Row, OccasionsData (+21 more)

### Community 9 - "Santé de l agent WhatsApp"
Cohesion: 0.10
Nodes (33): AgentHealthContent(), AgentHealthPage(), metadata, PageProps, statusBadge(), togglePauseAction(), clearAgentSettingsCache(), decryptSecret() (+25 more)

### Community 10 - "Dépendances npm"
Cohesion: 0.05
Nodes (37): dependencies, ai, @base-ui/react, class-variance-authority, clsx, @hookform/resolvers, @hubspot/api-client, lucide-react (+29 more)

### Community 11 - "Webhook Meta"
Cohesion: 0.12
Nodes (28): GET(), POST(), echoText(), extractIncomingMessages(), extractMediaId(), extractOutboundEchoes(), extractOutboundStatuses(), extractText() (+20 more)

### Community 12 - "Page d accueil"
Cohesion: 0.13
Nodes (22): DEFAULT_ORDER, generateMetadata(), getHomeData(), HomePage(), About(), AboutData, Counter(), extractCounterFromBio() (+14 more)

### Community 13 - "Agent WhatsApp (réponses)"
Cohesion: 0.11
Nodes (28): AgentReply, composeHandoverReply(), composeOptoutConfirmationReply(), composePauseReply(), detectHandoverTrigger(), detectOptoutIntent(), historyToMessages(), normalise() (+20 more)

### Community 14 - "Layout racine et aperçu"
Cohesion: 0.11
Nodes (19): GET, fraunces, logo, manrope, metadata, mono, RootLayout(), script (+11 more)

### Community 15 - "Docs : voix de marque et agents"
Cohesion: 0.10
Nodes (18): Aissa persona (who speaks), Anti-AI review checklist, Business lexicon (preferred vocabulary, event universes), Local anchoring (Emerainville, 77, Ile-de-France), lib/blog/prompt-system.ts (AI article generator), Reference paragraphs and recurring patterns, Editorial taboos (no prices, client names, competitors), Target audience and vouvoiement register (+10 more)

### Community 16 - "Générateur d articles IA"
Cohesion: 0.12
Nodes (20): briefSchema, maxDuration, POST(), maxDuration, POST(), requestSchema, BANNED_LIST_FOR_PROMPT, checkBlogAdminGate() (+12 more)

### Community 17 - "Config du projet"
Cohesion: 0.09
Nodes (21): eslintConfig, name, private, version, eslint, eslint-config-next, @hookform/resolvers, @mux/mux-player-react (+13 more)

### Community 18 - "Envoi Meta (WhatsApp)"
Cohesion: 0.15
Nodes (21): summarizeForHandover(), graphVersion(), InstagramSendSuccess, MetaSendErrorBody, sanitizeWhatsAppFormatting(), sendInstagramText(), SendResult, sendText() (+13 more)

### Community 19 - "Scripts de correction Sanity"
Cohesion: 0.11
Nodes (13): dotenv, @sanity/client, client, AssetRef, client, Row, client, main() (+5 more)

### Community 20 - "Catalogue d images"
Cohesion: 0.14
Nodes (20): IMAGE_CATALOG, ImageCatalogEntry, ImageKey, ImagePlaceholder, imageRef(), blogPageDoc, faqItemDocs, homePageDoc (+12 more)

### Community 21 - "Schémas Sanity"
Cohesion: 0.16
Nodes (20): schemaTypes, aLaCarteSection, caseStudiesSection, ceremoniesSection, conditionsSection, contactSection, crossServicesSection, enabledField (+12 more)

### Community 22 - "Community 22"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 23 - "Community 23"
Cohesion: 0.23
Nodes (16): BriefInput, GenerateImagesRequest, GenerateSectionRequest, GenerateSkeletonRequest, ImageVariant, SectionResult, Skeleton, SkeletonH2 (+8 more)

### Community 24 - "Community 24"
Cohesion: 0.10
Nodes (14): fadeUp, stagger, OtherServicesData, Service, CatalogueCard, FALLBACK_BULLETS, FALLBACK_CATALOGUES, LeadMagnet() (+6 more)

### Community 25 - "Community 25"
Cohesion: 0.16
Nodes (14): ArticleJsonLd(), BreadcrumbJsonLd(), RealisationContent(), RealisationDetailPage(), RealisationJsonLd(), RealisationSkeleton(), RouteProps, RealisationDetailContent() (+6 more)

### Community 26 - "Community 26"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 27 - "Community 27"
Cohesion: 0.17
Nodes (12): maxDuration, POST(), requestSchema, GET(), isAuthorized(), buildVisualPrompt(), generateCoverImages(), IMAGE_MODEL_CHAIN (+4 more)

### Community 28 - "Community 28"
Cohesion: 0.16
Nodes (13): generateMetadata(), generateMetadata(), formatDate(), generateMetadata(), MentionsLegalesPage(), formatDate(), generateMetadata(), PolitiqueConfidentialitePage() (+5 more)

### Community 29 - "Community 29"
Cohesion: 0.20
Nodes (16): append(), appendIncoming(), appendOutgoing(), getConversationHistory(), getRedis(), key(), safeParseEntry(), StoredEntry (+8 more)

### Community 30 - "Community 30"
Cohesion: 0.11
Nodes (9): sanity, category, pack, qualificationFormSection, agentSettings, blogPage, espaceEventsPage, evenementPage (+1 more)

### Community 31 - "Community 31"
Cohesion: 0.21
Nodes (14): BANNED_CLICHES, BANNED_METAPHORS, BANNED_OPENERS, BANNED_STRUCTURES, BANNED_TRANSITIONS, EM_DASH_REGEX, SOFT_REPLACEMENTS, SUSPECT_ITALIC_REGEX (+6 more)

### Community 32 - "Community 32"
Cohesion: 0.18
Nodes (13): maxDuration, POST(), requestSchema, countOf(), scoreBurstiness(), generateSection(), ResolvedSection, resolveSection() (+5 more)

### Community 33 - "Community 33"
Cohesion: 0.26
Nodes (10): checkBlogAdminRateLimit(), cache, checkRateLimit(), getRatelimit(), Limiter, Options, RateLimitResult, checkMetaWebhookRateLimit() (+2 more)

### Community 34 - "Community 34"
Cohesion: 0.17
Nodes (10): clientEnv, clientEnvRaw, clientSchema, env, parsedClient, serverSchema, callSuggestKeypoints(), BriefStep() (+2 more)

### Community 35 - "Community 35"
Cohesion: 0.19
Nodes (12): detectAi(), DetectionResult, buildReasoning(), computeScore(), detectWithGptzero(), GptzeroDocument, GptzeroResponse, GptzeroResult (+4 more)

### Community 36 - "Community 36"
Cohesion: 0.22
Nodes (12): Decorator, genKey(), makeBlock(), markdownToPortableText(), parseDecorators(), parseInlineMarks(), PortableTextBlock, PortableTextMarkDef (+4 more)

### Community 37 - "Community 37"
Cohesion: 0.28
Nodes (14): appendNote(), appendOutgoingNote(), buildPhoneE164(), createContact(), createNote(), findContact(), findContactByWhatsAppPhone(), getClient() (+6 more)

### Community 38 - "Community 38"
Cohesion: 0.21
Nodes (13): apply(), client, seed(), Cache, CACHE_PATH, CacheEntry, fetchToBuffer(), ImageMap (+5 more)

### Community 39 - "Community 39"
Cohesion: 0.27
Nodes (12): ContactSearchResult, GET(), getClient(), isAuthorized(), ensureInitialised(), hashIdent(), LogContext, logError() (+4 more)

### Community 40 - "Community 40"
Cohesion: 0.23
Nodes (9): BlogArticlePage(), BlogRelatedSection(), BreadcrumbJsonLd(), RelatedSkeleton(), RouteProps, BlogArticleContent(), BlogArticleCta(), BlogArticleHero() (+1 more)

### Community 41 - "Community 41"
Cohesion: 0.15
Nodes (10): fadeUp, react, @sanity/ui, AssetFromUrl, dropboxAssetSource, DropboxChooserFile, DropboxComponentProps, IMAGE_EXTENSIONS (+2 more)

### Community 42 - "Community 42"
Cohesion: 0.21
Nodes (9): @upstash/redis, client, fixCapacityString(), hasPartnerCard(), LieuItem, main(), PARTNER_CARD, encryptSecret() (+1 more)

### Community 43 - "Community 43"
Cohesion: 0.33
Nodes (10): GenerateWizardDialog(), Props, extractSectionTitle(), ReviewStep(), clearWizardState(), isBrowser(), loadWizardState(), saveWizardState() (+2 more)

### Community 44 - "Community 44"
Cohesion: 0.27
Nodes (9): Anchor(), Card(), GLOSSARY, metadata, OverviewPage(), SIDEBAR, TUTORIALS, Tutorial (+1 more)

### Community 45 - "Community 45"
Cohesion: 0.27
Nodes (8): SiteLayout(), generateMetadata(), getMariageData(), generateMetadata(), getRealisationsData(), LimovaChatbot(), sanityFetch(), getSiteSettings

### Community 46 - "Community 46"
Cohesion: 0.22
Nodes (5): STATIC_ROUTES, cachedFetch(), FetchOptions, sanityFetchStatic(), sitemapQuery

### Community 47 - "Community 47"
Cohesion: 0.33
Nodes (7): BlogPostCard(), formatDate(), Post, BlogPostList(), FilterButton(), Props, BlogRelated()

### Community 48 - "Community 48"
Cohesion: 0.18
Nodes (11): devDependencies, dotenv, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tsx, @types/node (+3 more)

### Community 49 - "Community 49"
Cohesion: 0.18
Nodes (11): scripts, apply:business, build, dev, lint, sanity:extract, sanity:typegen, seed (+3 more)

### Community 50 - "Community 50"
Cohesion: 0.25
Nodes (8): @sanity/icons, sanity-plugin-mux-input, @sanity/vision, generateArticleAction(), PAGE_ROUTES, HIDDEN_FROM_DEFAULT, SINGLETON_TYPES, structure()

### Community 51 - "Community 51"
Cohesion: 0.24
Nodes (7): BlogPage(), BlogIndexHero(), fadeUp, Props, stagger, blogPageQuery, postsListQuery

### Community 52 - "Community 52"
Cohesion: 0.22
Nodes (6): IntroData, EvenementFounder(), Founder, TEAM, Founder, @portabletext/react

### Community 53 - "Community 53"
Cohesion: 0.20
Nodes (9): allPostSlugsQuery, espaceEventsPageQuery, evenementPageQuery, homePageQuery, mariagePageQuery, postBySlugQuery, realisationsListQuery, realisationsPageQuery (+1 more)

### Community 54 - "Community 54"
Cohesion: 0.27
Nodes (9): @hubspot/api-client, CONTACT_PROPS, ContactPropDef, ensureContactProperty(), ensurePipeline(), ensurePropertyGroup(), hubspot, main() (+1 more)

### Community 55 - "Community 55"
Cohesion: 0.20
Nodes (9): aboutSection, ctaSection, enabledField, faqSection, gallerySection, heroSection, packsSection, testimonialsSection (+1 more)

### Community 56 - "Community 56"
Cohesion: 0.25
Nodes (6): CriticJsonResponse, critiqueAndRewriteSection(), CritiqueResult, parseCriticResponse(), PostProcessingResult, ai

### Community 57 - "Community 57"
Cohesion: 0.36
Nodes (4): catalogueBody, CataloguePage(), metadata, PrintButton()

### Community 58 - "Community 58"
Cohesion: 0.48
Nodes (4): NotFound(), SiteNotFound(), NotFoundContent(), QUICK_LINKS

### Community 59 - "Community 59"
Cohesion: 0.29
Nodes (5): alt, contentType, dynamic, runtime, size

### Community 60 - "Community 60"
Cohesion: 0.38
Nodes (6): buildAggressivePrompt(), buildHumanizerPrompt(), HumanizeOptions, humanizePass(), HumanizePassResult, HUMANIZER_MODEL_CHAIN

### Community 61 - "Community 61"
Cohesion: 0.29
Nodes (5): blockContent, cta, imageWithAlt, realisationVideo, seo

### Community 62 - "Community 62"
Cohesion: 0.38
Nodes (6): client, main(), NEW_HEADER_NAV, NEW_UNIVERSE_LINKS, patchHomePage(), patchSiteSettings()

### Community 63 - "Community 63"
Cohesion: 0.43
Nodes (6): client, Json, main(), patchDoc(), renameNavLabels(), replacePaths()

### Community 64 - "Community 64"
Cohesion: 0.33
Nodes (4): containerVariants, ICONS, itemVariants, TrustBarData

### Community 65 - "Community 65"
Cohesion: 0.47
Nodes (4): AltTextInput(), assetRefToUrl(), SanityImageAssetRef, SanityImageValue

### Community 66 - "Community 66"
Cohesion: 0.53
Nodes (5): callGenerateSection(), buildSectionTasks(), GenerationStep(), runAll(), SectionTask

### Community 67 - "Community 67"
Cohesion: 0.50
Nodes (4): fadeUp, formatDate(), RealisationDetailHero(), stagger

### Community 68 - "Community 68"
Cohesion: 0.40
Nodes (5): js-yaml@<3.14.2, postcss@<8.5.10, prismjs@<1.30.0, pnpm, overrides

### Community 70 - "Community 70"
Cohesion: 0.50
Nodes (5): callGenerateSkeleton(), getAuthHeader(), postJson(), SkeletonStep(), fetchSkeleton()

### Community 73 - "Community 73"
Cohesion: 0.50
Nodes (3): nextConfig, publicCsp, securityHeaders

### Community 74 - "Community 74"
Cohesion: 0.50
Nodes (3): legalFields, mentionsLegales, politiqueConfidentialite

## Knowledge Gaps
- **17 isolated node(s):** `@hookform/resolvers`, `@mux/mux-player-react`, `react-dom`, `react-hook-form`, `shadcn` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 509 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Community 24` to `En-tête, pied de page et UI`, `Formulaires de contact`, `Page Mariage`, `Page Espace Events`, `Réalisations et blog`, `Héros des pages`, `Page Entreprises`, `Galerie Espace Events`, `Santé de l agent WhatsApp`, `Webhook Meta`, `Page d accueil`, `Layout racine et aperçu`, `Config du projet`, `Community 25`, `Community 27`, `Community 28`, `Community 34`, `Community 39`, `Community 40`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 51`, `Community 52`, `Community 56`, `Community 57`, `Community 58`, `Community 59`, `Community 67`, `Community 73`, `Community 75`, `Community 76`, `Community 78`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **What connects `@hookform/resolvers`, `@mux/mux-player-react`, `react-dom` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `En-tête, pied de page et UI` be split into smaller, more focused modules?**
  _Cohesion score 0.051189400782896716 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Community 41` to `En-tête, pied de page et UI`, `Formulaires de contact`, `Page Mariage`, `Réalisations et blog`, `Héros des pages`, `Page Entreprises`, `Galerie Espace Events`, `À la carte et conditions`, `Santé de l agent WhatsApp`, `Page d accueil`, `Layout racine et aperçu`, `Config du projet`, `Community 23`, `Community 24`, `Community 25`, `Community 34`, `Community 40`, `Community 43`, `Community 45`, `Community 47`, `Community 50`, `Community 61`, `Community 65`, `Community 66`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Should `Formulaires de contact` be split into smaller, more focused modules?**
  _Cohesion score 0.07782898105478751 - nodes in this community are weakly interconnected._
- **Why does `server-only` connect `Community 33` to `Community 32`, `Formulaires de contact`, `Community 35`, `Community 37`, `Community 39`, `Santé de l agent WhatsApp`, `Webhook Meta`, `Agent WhatsApp (réponses)`, `Générateur d articles IA`, `Config du projet`, `Envoi Meta (WhatsApp)`, `Community 56`, `Community 27`, `Community 60`, `Community 29`, `Community 31`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `Page Mariage` be split into smaller, more focused modules?**
  _Cohesion score 0.06497175141242938 - nodes in this community are weakly interconnected._