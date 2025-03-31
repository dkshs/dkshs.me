import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nicolas Contiero",
    short_name: "Nicolas Contiero",
    description: "Nicolas Contiero's personal website.",
    lang: "en-US",
    start_url: "/",
    display: "standalone",
    background_color: "#f9fafb",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon",
        type: "image/png",
        sizes: "52x52",
      },
    ],
  };
}
