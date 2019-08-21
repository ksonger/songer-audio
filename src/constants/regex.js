export default {
  ALPHA_WITH_DASH: /^([\w.%+\-']+)$/,
  ALPHA_WITH_DASH_SPACE: /^([\w.%+\-\s']+)$/,
  EMAIL_REGEX: /^([\w.%+\-']+)@([\w-]+\.)+([\w]{2,})$/,
  PHONE_REGEX: /^(?:\+?1(-| )?)?(?:\((?=\d{3})\d{3}(?=\))\)|\d{3})(?:(-| ))?\d{3}(?:(-| ))?\d{4}$/,
}
