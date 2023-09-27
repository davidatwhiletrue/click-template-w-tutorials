import React from "react";
import {
  Lang, LanguageSettings,
} from "@make-software/csprclick-react";
import * as net from "net";
import {CURRENCIES} from "./currency";

export const LANGUAGES: Lang[] = [
  Lang.EN,
  Lang.AZ,
  Lang.DE,
  Lang.ES,
  Lang.FR,
  Lang.NL,
  Lang.PL,
  Lang.RU,
  Lang.TR,
  Lang.UA,
  Lang.VT
];

export const languageSettings = (lang: Lang, setLang: (l: Lang) => void) => {
  return {
    languages: LANGUAGES,
    creditsUrl: "/credits",
    contributeUrl: "/contribute",
    currentLanguage:  lang,
    onChangeLanguage: (l: Lang) => { setLang(l); console.log(`Switched language to ${l}`) }
  }
};
