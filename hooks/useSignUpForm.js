import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import qs from "query-string";
import { useTranslation } from "next-i18next";

const FORM_TYPE = "SignupForm";
const CHECKBOX_NAME = "YesSignMeUpForUpdatesForBinder";

async function postFormData(data, formId) {
  const url = `https://secure.everyaction.com/v1/Forms/${formId}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: qs.stringify({ type: FORM_TYPE, ...data }),
  });
  return response.json();
}

export default function useSignUpForm(formId) {
  const { t } = useTranslation("common");
  const methods = useForm({ defaultValues: { [CHECKBOX_NAME]: true } });
  const {
    formState: { isSubmitSuccessful, isSubmitting },
    reset,
  } = methods;

  async function onSubmit(data) {
    await postFormData(data, formId).then((response) => {
      const {
        resultCode,
        page: { confirmationRedirectUrl, confirmationPageContent },
      } = response;
      if (resultCode === "Success") {
        setHasError(false);
        if (confirmationRedirectUrl) window.open(confirmationRedirectUrl);
        if (confirmationPageContent)
          setConfirmationHtml(confirmationPageContent);
      }
      if (resultCode === "Failure") {
        // react-hook-form doesn't catch this kind of submit error,
        // so we track it and pass it along ourselves
        setHasError(true);
      }
    });
  }

  function onError(errors, e) {
    console.error(errors, e);
  }

  const [hasError, setHasError] = useState(false);
  const [srAnnouncement, setSrAnnouncement] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [confirmationHtml, setConfirmationHtml] = useState(null);

  useEffect(() => {
    if (isSubmitting) {
      setStatusMessage("");
    }
    if (isSubmitSuccessful && !hasError) {
      reset({
        [firstNameProps.name]: "",
        [lastNameProps.name]: "",
        [emailProps.name]: "",
        [zipCodeProps.name]: "",
      });
      setStatusMessage(t("sign-up-form.success"));
      setSrAnnouncement(t("sign-up-form.reset"));
    }
    if (hasError) {
      setStatusMessage(t("sign-up-form.error"));
    }
  }, [isSubmitSuccessful, isSubmitting, reset, hasError, t]); // eslint-disable-line react-hooks/exhaustive-deps

  const firstNameProps = {
    name: "FirstName",
  };

  const lastNameProps = {
    name: "LastName",
  };

  const emailProps = {
    name: "EmailAddress",
    useHtmlValidation: true,
    required: true,
  };

  const zipCodeProps = {
    name: "PostalCode",
    useHtmlValidation: true,
  };

  const checkboxProps = {
    name: CHECKBOX_NAME,
    label: t("sign-up-form.checkbox-label"),
    required: true,
    useHtmlValidation: true,
  };

  const submitProps = {
    "aria-disabled": isSubmitting,
    label: isSubmitting
      ? t("sign-up-form.submitting")
      : t("sign-up-form.submit"),
  };

  return {
    methods,
    onSubmit,
    onError,
    srAnnouncement,
    statusMessage,
    confirmationHtml,
    firstNameProps,
    lastNameProps,
    emailProps,
    zipCodeProps,
    checkboxProps,
    submitProps,
  };
}
