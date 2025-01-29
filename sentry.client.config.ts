// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7ffe7ca827ae47ffe3fbc0fc9c388cd3@o4507666684641280.ingest.us.sentry.io/4508727595761664",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
