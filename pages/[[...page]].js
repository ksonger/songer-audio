import PropTypes from "prop-types";
import { DefaultTemplate} from "@/templates";
import globalDataShape from "@/shapes/globalData";
import {GlobalDataProvider} from "@/contexts/GlobalData";


const SECTION_MAP = {};

export default function Page({ section, globalData, data: entryData }) {
  const Template = SECTION_MAP[section] || DefaultTemplate;

  return (
    <GlobalDataProvider data={globalData}>
      <Template data={entryData} />
    </GlobalDataProvider>
  );
}

async function getEntryData(uri, section, site, previewToken) {

}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({
                                       params: { uriSegments = '/' },
                                       previewData,
                                     }) {
  const site = [];
  const uri = Array.isArray(uriSegments) ? uriSegments.join("/") : uriSegments;

  const globalData = { };
  const section = { };


  const shapedGlobalData = globalData;

  return {
    props: {
      data: { },
      section,
      globalData: shapedGlobalData
    },
    revalidate: 30,
  };
}

Page.displayName = "Entry.Page";

Page.propTypes = {
  data: PropTypes.object,
  section: PropTypes.string,
  globalData: globalDataShape,
};
