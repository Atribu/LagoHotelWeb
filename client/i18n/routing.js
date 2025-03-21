import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['tr', 'en','ru', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'tr',
  localePrefix : "always",
  pathnames : {
    "/": {
      tr: "/",
      en: "/homepage",
      de: "/startseite",
      ru:"/домашняястраница"
    },


  }})