"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Garantit qu'en « Aperçu en direct » (draft mode) un clic sur un lien navigue
 * toujours vers sa page.
 *
 * Contexte : l'éditeur visuel de Sanity pose un gestionnaire « cliquer pour
 * modifier » (phase de capture) sur chaque élément dont le texte est marqué.
 * Tout lien qui contient — ou est contenu dans — un tel élément voit donc son
 * clic détourné vers l'édition du document, et l'éditeur ne peut plus passer
 * d'une page à l'autre. On intercepte le clic AVANT ces gestionnaires.
 *
 * - Alt / Option / Cmd / Ctrl / Maj + clic : comportement natif inchangé
 *   (Alt + clic reste le raccourci Sanity pour suivre un lien).
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
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
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
