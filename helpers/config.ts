import Constants from "expo-constants";
import { merge } from "lodash";

import { Env } from "#types";

const parseBoolean = (value: string | boolean) => {
  if (value === true || value === "true") {
    return true;
  }

  return false;
};

const envValues = merge(Constants.manifest?.extra);

type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

type EnvConfig = {
  env: Env;
  apiUrl: string;

  useMixpanelAnalytics: boolean;
  mixpanelToken: string;

  firebaseConfig: FirebaseConfig;

  sentryDsn: string;
};

const Config: EnvConfig = {
  env: envValues.env,
  apiUrl: envValues.apiUrl,

  useMixpanelAnalytics: parseBoolean(envValues.useMixpanelAnalytics),
  mixpanelToken: envValues.mixpanelToken,

  firebaseConfig: envValues.firebaseConfig,

  sentryDsn: envValues.sentryDsn,
};

export default Config;
