import { parsePhoneNumberFromString } from 'libphonenumber-js'

const format = (value) => {
  if (!value) return null
  const phone = parsePhoneNumberFromString(value)
  return phone.formatNational()
}

const unformat = (value) => value.replace(/\D/g, '')

const toE164 = (value) => `+1${unformat(value)}`

/**
 * Format a phone number on input/keyUp change events, as (###) ###-####
 */
const onPhoneChange = (event) => {
  if (event.keyCode !== 8) {
    // always allow delete
    const phoneField = document.querySelector(`#${event.target.id}`)
    const phoneValue = phoneField.value.replace(/\D/g, '')
    const area = phoneValue.substr(0, 3)
    const pre = phoneValue.substr(3, 3)
    const tel = phoneValue.substr(6, 4)
    let output = ''
    if (area.length && area.length < 3 && !pre.length) {
      output = `(${area}`
    } else if (area.length === 3 && !pre.length) {
      output = `(${area})`
    } else if (pre.length && pre.length < 3 && !tel.length) {
      output = `(${area}) ${pre}`
    } else if (pre.length === 3 && !tel.length) {
      output = `(${area}) ${pre}-`
    } else if (tel.length) {
      output = `(${area}) ${pre}-${tel}`
    }
    phoneField.value = output
  }
}

export default {
  format,
  toE164,
  unformat,
  onPhoneChange,
}