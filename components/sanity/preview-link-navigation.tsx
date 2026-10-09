"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * En « Aperçu en direct » (draft mode), garantit que le MENU du header navigue
 * vers sa page au clic — et uniquement lui.
 *
 * Contexte : l'éditeur visuel de Sanity pose un gestionnaire « cliquer pour
 * modifier » (phase de capture) sur chaque élément dont le texte est marqué,
 * donc un clic sur « Mariage » ouvrait les Réglages du site au lieu de
 * naviguer. On intercepte le clic AVANT ce gestionnaire, mais seulement pour
 * les liens marqués `data-preview-nav` (menu desktop et mobile).
 * Tout le reste — boutons, cartes, pied de page — garde le « cliquer pour
 * modifier » : un clic ouvre le champ à éditer.
 *
 * - Alt / Option / Cmd / Ctrl / Maj + clic : comportement natif inchangé.
 * - Liens internes : navigation Next.js (router.push).
 * - Ancres, tel:, mailto:, liens externes, nouvel onglet : navigation native.
 */
export function PreviewLinkNavigation() {
  const router = useRouter();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.altKey || event.metaKey || event.ctrlKey || event.shiftKey) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>(
        "[data-preview-nav] a[href]",
      );
      if (!anchor) return;

      // Coupe les gestionnaires « cliquer pour modifier » situés plus bas.
      event.stopImmediatePropagation();

      const url = new URL(anchor.href, window.location.href);
      const opensElsewhere =
        url.origin !== window.location.origin ||
        (anchor.target !== "" && anchor.target !== "_self") ||
        anchor.hasAttribute("download");
      const samePage =
        url.pathname === window.location.pathname &&
        url.search === window.location.search;
      if (opensElsewhere || samePage) return; // navigation native

      event.preventDefault();
      router.push(`${url.pathname}${url.search}${url.hash}`);
    };

    window.addEventListener("click", onClick, { capture: true });
    return () => window.removeEventListener("click", onClick, { capture: true });
  }, [router]);

  return null;
}
