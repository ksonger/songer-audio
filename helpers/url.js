import qs from "query-string";

const SITE_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function isAbsoluteUrl(url) {
  return /^https?:\/\//i.test(url);
}

export function isInternalUrl(url) {
  if (!isAbsoluteUrl(url)) return true;
  return new URL(url).origin === SITE_BASE_URL;
}

export const parsePathData = (pathnameInput) => {
  if (!pathnameInput) return { pathParams: {} };

  const { url, query } = qs.parseUrl(pathnameInput);

  return { pathname: url, query };
};
