import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

import es from "../locales/es.json";

const translations = {
  es,
};

const i18n = new I18n(translations);

// Set the locale once at the beginning of your app.
i18n.locale = "es" ?? Localization.locale;

i18n.enableFallback = true;

export default i18n;
