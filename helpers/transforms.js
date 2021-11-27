const PRIVATE_DOMAIN = `https://${process.env.PRIVATE_DOMAIN}`;

export const formattedPhone = (num) => {
  if (typeof num !== "string" || num.length === 0) return;
  return num.replace("tel:", "").replace(/-/g, ".");
};

export const formattedAddress = (addr) => {
  if (typeof addr !== "string" || addr.length === 0) return;
  const split = addr.split("\n");
  return (
    <div>
      <div>{split[0]}</div>
      <div>{split[1]}</div>
    </div>
  );
};

export const titleCase = (str) => {
  return `${str.substr(0, 1).toUpperCase()}${str.slice(1)}`;
};

export const normalizeContentLink = (linkData) => {
  if (!linkData?.length) return null;
  const { id, text, url, linkEntry, linkText, titleOverride, urlOverride } =
    linkData[0];
  const entry = linkEntry ? linkEntry[0] : null;

  const linkObj = {
    id: entry?.id || id,
    text: titleOverride || linkText || entry?.text || text,
    url: urlOverride || entry?.url || url,
  };

  return linkObj;
};

export const mapPostToCard = (post, linkText) => {
  const { postImage, thumbnail, postType, title, uri } = post;
  return {
    label: postType?.length ? postType[0].title : null,
    title,
    image: thumbnail?.length ? thumbnail : postImage,
    link: [
      {
        url: uri,
        text: linkText,
      },
    ],
  };
};

export const mapPostToCallout = (post, linkText, labelText) => {
  const { postImage, thumbnail, postType, teaser, title, uri } = post;
  return {
    label: labelText,
    heading: title,
    body: teaser,
    image: thumbnail?.length ? thumbnail : postImage,
    link: [
      {
        url: uri,
        text: linkText,
      },
    ],
  };
};

export const insertApiDomain = (markup) => {
  if (!markup) return;
  return markup.replace(/###API_DOMAIN###/g, PRIVATE_DOMAIN);
};
