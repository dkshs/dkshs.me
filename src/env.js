import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    // Node
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    // these variables are used for the site's SEO
    SITE_NAME: z.string().default("Nicolas Contiero"),
    SITE_LOCALE: z.string().default("en_US"),
    // URLs
    SITE_BASEURL: z.string().url().default("http://localhost:3000"),
  },
  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_FORM_SEND_URL: z.string().url(),
  },
  runtimeEnv: {
    // Node
    NODE_ENV: process.env.NODE_ENV,
    // SEO
    SITE_NAME: process.env.SITE_NAME,
    SITE_LOCALE: process.env.SITE_LOCALE,
    SITE_BASEURL: process.env.SITE_BASEURL,

    // Client
    // ----------------------------
    NEXT_PUBLIC_FORM_SEND_URL: process.env.NEXT_PUBLIC_FORM_SEND_URL,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
