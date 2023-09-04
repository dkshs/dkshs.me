import type { FC, PropsWithChildren } from "react";
import Head from "next/head";

export interface MetaProps {
  title?: string;
  path: string;
  baseUrl?: string;
  description?: string;
  siteName?: string;
  manifest?: string;
  image?: {
    src: string;
    alt: string;
    isExternalImage?: boolean;
  };
  type?: string;
  updatedAt?: string;
  index?: boolean;
  follow?: boolean;
  locale?: string;
  twitter?: string;
}

/**
 * Add meta tags to the document head.
 */
export const Meta: FC<PropsWithChildren<MetaProps>> = ({
  title,
  description,
  path,
  baseUrl = process.env.SITE_BASEURL,
  siteName = process.env.SITE_NAME,
  manifest = "/manifest.json",
  type = "website",
  image,
  updatedAt,
  index = true,
  follow = true,
  locale = process.env.SITE_LOCALE,
  twitter,
  children,
}) => {
  const titleSiteName = title ? `${title} · ${siteName}` : siteName;
  const canonicalUrl = `${baseUrl}${path}`;
  const imgUrl = image && `${image.isExternalImage ? "" : baseUrl}${image.src}`;

  const indexString = index ? "index" : "noindex";
  const followString = follow ? "follow" : "nofollow";

  return (
    <Head>
      {/* SEO */}
      <title>{titleSiteName}</title>
      <meta name="title" content={titleSiteName}></meta>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={`${indexString} ${followString}`} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="manifest" href={manifest} />

      {/* Facebook */}
      <meta property="og:title" content={title || titleSiteName} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={locale} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={imgUrl} />}
      {image && <meta property="og:image:alt" content={image.alt} />}
      {updatedAt && <meta property="og:updated" content={updatedAt} />}

      {/* Twitter */}
      {twitter && <meta name="twitter:site" content={`@${twitter}`} />}
      {twitter && <meta name="twitter:creator" content={`@${twitter}`} />}
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={titleSiteName} />
      <meta property="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={imgUrl} />}
      {image && <meta name="twitter:image:alt" content={image.alt} />}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />

      {children}
    </Head>
  );
};
