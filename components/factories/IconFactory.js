import PropTypes from "prop-types";
// import * as Icon from "@/svgs/icon";
// import * as Logo from "@/svgs/logo";
import svgProps from "@/shapes/svg";

const Icon = {};
const Logo = {};

const ICON_MAP = {
  caretDown: Icon.CaretDown,
  caretLeft: Icon.CaretLeft,
  caretRight: Icon.CaretRight,
  checkbox: Icon.Checkbox,
  closeMenu: Icon.CloseMenu,
  close: Icon.Close,
  closeFill: Icon.CloseFill,
  geoMarker: Icon.GeoMarker,
  hamburger: Icon.Hamburger,
  play: Icon.Play,
  plusFill: Icon.PlusFill,
  quote: Icon.Quote,
  search: Icon.Search,
  facebook: Icon.Facebook,
  twitter: Icon.Twitter,
  instagram: Icon.Instagram,
  linkedin: Icon.LinkedIn,
  youtube: Icon.YouTube,
  ofbLogoSimple: Logo.OFBLogoSimple,
  ofbLogoDefault: Logo.OFBLogoDefault,
  feedingAmerica: Logo.FeedingAmerica,
};

function IconFactory({ icon, ...props }) {
  const Icon = ICON_MAP[icon];
  if (!Icon) return null;
  return <Icon {...props} />;
}

IconFactory.propTypes = {
  ...svgProps,
  icon: PropTypes.string.isRequired,
};

export default IconFactory;
