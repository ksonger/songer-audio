import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import useGlobalContext from "@/hooks/useGlobalContext";

export default function useSiteSearch() {
  const router = useRouter();
  const { t: translate } = useTranslation("common");
  const {
    localeInfo: { site },
  } = useGlobalContext();
  const searchPathname = `${
    site.handle === "default" ? "" : `/${site.locale}`
  }/search`;

  const methods = useForm({
    defaultValues: { search: "" },
  });

  const onSubmit = (data) => {
    router.push({
      pathname: searchPathname,
      query: data,
    });
  };

  const inputProps = {
    type: "text",
    label: translate("header.search.label"),
    name: "search",
    inputProps: {
      placeholder: translate("header.search.placeholder"),
      autoComplete: "off",
    },
    required: true,
    useHtmlValidation: true,
  };

  const submitProps = {
    type: "submit",
    label: translate("header.search.submit"),
  };

  return {
    translate,
    methods,
    onSubmit,
    inputProps,
    submitProps,
  };
}
