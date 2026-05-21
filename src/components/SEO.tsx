import { Helmet } from "react-helmet-async";
import { SITE, pageTitle } from "@/utils/seo";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function SEO({ title, description, path = "/", image }: SEOProps) {
  const fullTitle = pageTitle(title);
  const desc = description ?? SITE.description;
  const url = `${SITE.url}${path}`;
  const img = image ?? `${SITE.url}/og-default.svg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
