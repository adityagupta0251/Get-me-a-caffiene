// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const Sentry = require("@sentry/nextjs");

Sentry.init({
  dsn: "https://4b84039c22e3cc208623e5e3c570efb2@o4509400757305344.ingest.de.sentry.io/4509400758747216",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
