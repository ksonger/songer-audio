import * as Icon from "@/svgs/content";
import { iconShape } from "@/shapes/icon";
import svgProps from "@/shapes/svg";

const ICON_MAP = {
  "additional-assistance-child-care": Icon.AdditionalAssistanceChildCare,
  "additional-assistance-general-support":
    Icon.AdditionalAssistanceGeneralSupport,
  "additional-assistance-health-care": Icon.AdditionalAssistanceHealthCare,
  "additional-assistance-housing": Icon.AdditionalAssistanceHousing,
  "additional-assistance-survivors": Icon.AdditionalAssistanceSurvivors,
  "additional-assistance-transportation":
    Icon.AdditionalAssistanceTransportation,
  advocacy: Icon.Advocacy,
  "email-signup": Icon.EmailSignUp,
  "end-hunger": Icon.EndHunger,
  "find-support-free-food": Icon.FindSupportFreeFood,
  "find-support-network": Icon.FindSupportNetwork,
  "find-support-produce": Icon.FindSupportProduce,
  "find-support-produce-alt": Icon.FindSupportProduceAlt,
  "library-faqs": Icon.LibraryFAQs,
  "our-food-network-local-orgs": Icon.OurFoodNetworkLocalOrgs,
  "our-food-network-partner-opps": Icon.OurFoodNetworkPartnerOpps,
  "people-based": Icon.PeopleBased,
  "sign-up": Icon.SignUp,
  "support-partner-services": Icon.SupportPartnerServices,
  "time-ideas": Icon.TimeIdeas,
  "volunteer-calendar": Icon.VolunteerCalendar,
  "volunteer-profile": Icon.VolunteerProfile,
  "volunteer-sign-up": Icon.VolunteerSignUp,
  "giving-business-cause-related": Icon.GivingBusinessCauseRelated,
  "giving-business-donating": Icon.GivingBusinessDonating,
  "giving-business-host-fundraiser": Icon.GivingBusinessHostFundraiser,
  "giving-business-sponsorship": Icon.GivingBusinessSponsorship,
  "giving-business-workplace-giving": Icon.GivingBusinessWorkplaceGiving,
  "giving-individual-donate-vehicle": Icon.GivingIndividualsDonateVehicle,
  "giving-individual-donations": Icon.GivingIndividualsDonations,
  "giving-individual-fundraiser": Icon.GivingIndividualsFundraiser,
  "giving-individual-planned-gift": Icon.GivingIndividualsPlannedGift,
};

function ContentIconFactory({
  icon: { slug, ...restIconProps },
  ...restProps
}) {
  const Icon = ICON_MAP[slug];
  if (!Icon) return null;
  return <Icon {...restIconProps} {...restProps} />;
}

ContentIconFactory.propTypes = {
  ...svgProps,
  icon: iconShape.isRequired,
};

export default ContentIconFactory;
