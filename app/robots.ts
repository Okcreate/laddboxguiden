export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://laddboxguiden.vercel.app/sitemap.xml",
  }
}