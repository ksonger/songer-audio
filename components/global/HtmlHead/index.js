import PropTypes from "prop-types";
import Head from "next/head";
import { craftImageShape } from "@/shapes/image";
import { useGlobalContext } from "@/hooks";
import { getVariable } from "@/styles/mixins/common";

function HtmlHead({ title, description, url, featuredImage, children }) {
  const {
    siteInfo: { siteTitle, siteDescription, siteImage },
  } = useGlobalContext();
  const image = featuredImage?.[0] || siteImage?.[0];

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta name="description" content={description || siteDescription} />
      <meta
        name="theme-color"
        content={getVariable("palette", "accentPrimary")}
      />
      {url && <meta name="og:url" content={url} />}
      <meta name="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description || siteDescription} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary" />
      {image?.url && (
        <>
          <meta name="og:image" content={image.url} />
          {image.altText && (
            <meta name="og:image:alt" content={image.altText} />
          )}
          <meta name="twitter:image" content={image.url} />
          {image.altText && (
            <meta name="twitter:image:alt" content={image.altText} />
          )}
        </>
      )}
      <link rel="alternate icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
      {children}
    </Head>
  );
}

HtmlHead.displayName = "Global.HtmlHead";

HtmlHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  featuredImage: PropTypes.arrayOf(craftImageShape),
  children: PropTypes.node,
};

export default HtmlHead;
