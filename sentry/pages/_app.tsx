import React from "react";
import type { AppProps } from "next/app";
import "./styles.css";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_KEY_SOFTWARE_LOG,
  integrations: [
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 1, // Envoyer toutes les traces au serveur Sentry
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
