export const SITE_NAME = process.env.SITE_NAME;
export const FORM_SEND_URL = process.env.NEXT_PUBLIC_FORM_SEND_URL;

if (!FORM_SEND_URL) {
  throw new Error("FORM_SEND_URL is not defined");
}
