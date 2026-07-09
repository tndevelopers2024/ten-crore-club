import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ten Crore Club",
    short_name: "Ten Crore Club",
    description: "Indias private wealth community for serious investors.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080A",
    theme_color: "#D5A04A",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
