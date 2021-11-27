import { useRouter } from "next/router";
import qs from "query-string";
import { parsePathData } from "@/helpers/url";

export default function useFilterEntryList() {
  const paginationScrollTargetId = "entry-list";
  const router = useRouter();
  const { asPath } = router;
  const { pathname, query } = parsePathData(asPath);

  function paginationHrefBuilder(page) {
    return qs.stringifyUrl({
      url: pathname,
      query: { ...query, page },
      fragmentIdentifier: paginationScrollTargetId,
    });
  }

  const options = {
    shallow: true,
    scroll: false,
  };

  function doFilter(param, value) {
    router.push(
      {
        pathname,
        query: { ...query, page: 1, [param]: value },
      },
      null,
      options
    );
  }

  function doReset() {
    router.push(
      {
        pathname,
        query: {},
      },
      pathname,
      options
    );
  }

  return {
    query,
    doFilter,
    doReset,
    paginationHrefBuilder,
    paginationScrollTargetId,
  };
}
