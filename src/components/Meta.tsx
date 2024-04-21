import type { FC, PropsWithChildren } from "react";
import Head from "next/head";

export interface MetaProps {
  readonly title?: string;
  readonly path: string;
  readonly baseUrl?: string;
  readonly description?: string;
  readonly siteName?: string;
  readonly manifest?: string;
  readonly image?: {
    src: string;
    alt: string;
    isExternalImage?: boolean;
  };
  readonly type?: string;
  readonly updatedAt?: string;
  readonly index?: boolean;
  readonly follow?: boolean;
  readonly locale?: string;
  readonly twitter?: string;
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
      <meta name="title" content={titleSiteName} />
      {description ? <meta name="description" content={description} /> : null}
      <meta name="robots" content={`${indexString}, ${followString}`} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="manifest" href={manifest} />

      {/* Facebook */}
      <meta property="og:title" content={titleSiteName} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={locale} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {image ? <meta property="og:image" content={imgUrl} /> : null}
      {image ? <meta property="og:image:alt" content={image.alt} /> : null}
      {updatedAt ? <meta property="og:updated" content={updatedAt} /> : null}

      {/* Twitter */}
      {twitter ? <meta name="twitter:site" content={`@${twitter}`} /> : null}
      {twitter ? <meta name="twitter:creator" content={`@${twitter}`} /> : null}
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={titleSiteName} />
      <meta property="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={imgUrl} /> : null}
      {image ? <meta name="twitter:image:alt" content={image.alt} /> : null}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />

      {children}
    </Head>
  );
};
