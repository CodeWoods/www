import { format } from 'date-fns'
import enUS from 'date-fns/locale/en-US/index.js'
import { formatInTimeZone } from 'date-fns-tz'
import { tz } from '../config'

type DateOrString = Date | string

// ISO 8601 format for Structured Data (https://en.wikipedia.org/wiki/ISO_8601)
// 2023-04-19T14:29:00.000Z ( YYYY-MM-DDTHH:mm:ss.sssZ )
// T: Date-Time separator.
// Z: UTC (+0) offset; often spoken "Zulu".(便於準確朗讀與理解，民航/通訊常用)
export function machineDate(isoDate: DateOrString) {
  return new Date(isoDate).toISOString()
}

// e.g. Formats date to Apr 19, 2023
export function readableDate(isoDate: DateOrString) {
  // return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(isoDate))

  // or
  // const options = { year: 'numeric', month: 'short', day: '2-digit' }
  // return new Date(isoDate).toLocaleDateString('en-US', options)

  const pattern = 'MMM dd, yyyy'
  return formatInTimeZone(isoDate, tz, pattern, { locale: enUS })
}

// RFC 2822 format for XML Feed
export function parseRFC2822(isoDate: DateOrString) {
  const pattern = 'eee, dd MMM yyyy HH:mm:ss zzz'
  return formatInTimeZone(isoDate, tz, pattern, { locale: enUS })
}

// RFC 3339 format for JSON Feed ( YYYY-MM-DDThh:mmTZD )
export function parseRFC3339(isoDate: DateOrString) {
  const pattern = "yyyy-MM-dd'T'HH:mm:ssXXX"
  return formatInTimeZone(isoDate, tz, pattern, { locale: enUS })
}

export function parseYear() {
  // return new Date().getFullYear()
  return format(new Date(), 'yyyy')
}
/* @credit:
 * https://github.com/johneatmon/eatmon.co/blob/2e27ffbe1f9d17eb8d6f8403970231d2a9763931/src/lib/dates.ts
 * https://github.com/scottaw66/scottwillsey2.0/blob/main/src/components/utilities/DateFormat.js
 */
