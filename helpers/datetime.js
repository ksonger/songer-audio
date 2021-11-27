import parseISO from "date-fns/parseISO";
import formatISO from "date-fns/formatISO";
import getUnixTime from "date-fns/getUnixTime";
import fromUnixTime from "date-fns/fromUnixTime";
import addDays from "date-fns/addDays";

/*
 * functions to convert between ISO (`yyyy-mm-dd`), required by input[type=date],
 * and Unix timestamp, required for Mobilize API query params
 */
export function ISOToUnix(dateStr) {
  try {
    return getUnixTime(parseISO(dateStr));
  } catch (error) {
    return "";
  }
}

export function UnixToISO(unixStr) {
  try {
    return formatISO(fromUnixTime(unixStr), { representation: "date" });
  } catch (error) {
    return "";
  }
}

export function ISOToUnixNextDay(dateStr) {
  try {
    return getUnixTime(addDays(parseISO(dateStr), 1));
  } catch (error) {
    return "";
  }
}
