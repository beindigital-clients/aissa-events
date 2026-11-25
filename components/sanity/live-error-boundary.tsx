"use client";

import { Component, type ReactNode } from "react";

/**
 * Isole `<SanityLive />` : si l'API Live Content refuse la connexion
 * (ex. origine absente de la liste CORS du projet Sanity), l'erreur levée
 * côté client ne doit pas faire tomber tout le site sur « This page couldn't
 * load ». Le contenu reste servi (cache + webhook de revalidation) ; seule la
 * mise à jour en direct est désactivée.
 */
export class LiveErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("[SanityLive] désactivé :", error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
