import qs from "query-string";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function useVimeoOembedAPI(videoId, options = {}) {
  const endpoint = "https://vimeo.com/api/oembed.json";
  const url = qs.stringifyUrl({
    url: endpoint,
    query: {
      ...options,
      url: `https://vimeo.com/${videoId}`,
    },
  });
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });
  return { data, error };
}
