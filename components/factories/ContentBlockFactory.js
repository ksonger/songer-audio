import PropTypes from "prop-types";
import * as Blocks from "@/content-blocks";

const BLOCK_MAP = {
  accordion: Blocks.Accordion,
  image: Blocks.Image,
  text: Blocks.Text,
  simpleCallout: Blocks.SimpleCallout,
  insetCallout: Blocks.InsetCallout,
  fullBleedCallout: Blocks.FullBleedCallout,
  quoteCallout: Blocks.QuoteCallout,
  iconCallout: Blocks.IconCallout,
  formEmbed: Blocks.FormEmbed,
  quiz: Blocks.Quiz,
  html: Blocks.Html,
  sectionContainer: Blocks.Section,
  columnarContainer: Blocks.ColumnarSection,
  cardContainer: Blocks.CardSection,
  sideBySideImageContainer: Blocks.SideBySideImageContainer,
  postList: Blocks.PostList,
  staffList: Blocks.StaffList,
};

export default function ContentBlockFactory({
  type,
  data,
  blockMap = BLOCK_MAP,
}) {
  const Block = blockMap[type];
  if (!Block) return null;
  return <Block {...data} />;
}

ContentBlockFactory.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  blockMap: PropTypes.object,
};
