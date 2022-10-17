import ExpoMixpanelAnalytics from "@bothrs/expo-mixpanel-analytics";

import { MutableRefObject } from "react";
import { EventRegister } from "react-native-event-listeners";

import Config from "#helpers/config";
import { getDeviceData } from "#helpers/device";
import { AppVersion, EventKey, Generic, MixPanel, User } from "#types";

export const initAnalytics = async (
  user: User,
  mixpanelRef: MutableRefObject<MixPanel>
) => {
  const deviceData = getDeviceData();
  const userId = user.id.toString();

  const userProps = {
    id: userId,
    email: user.email,
    name: user.name,
    lastname: user.lastname ?? "",
  };

  const extraProps = {
    env: Config.env,
    currentVersion: deviceData.currentVersion,
    OS: deviceData.deviceMeta.OS,
    appVersion: AppVersion,
  };

  if (Config.useMixpanelAnalytics && Config.mixpanelToken) {
    const peopleConfig = {
      ...userProps,
      ...extraProps,
    };

    mixpanelRef.current = new ExpoMixpanelAnalytics(Config.mixpanelToken);
    mixpanelRef.current.identify(peopleConfig.id);

    Object.entries(peopleConfig).forEach(([key, value]) => {
      (mixpanelRef.current as ExpoMixpanelAnalytics).people_set({
        [`$${key}`]: value,
      });
    });

    mixpanelRef.current.register(peopleConfig);
  }
};

export const logEvent = (eventName: string, eventData?: Generic) => {
  EventRegister.emit(EventKey.LogEvent, { eventName, eventData });
};

export const logScreenView = async (screenName: string) => {
  EventRegister.emit(EventKey.ScreenView, screenName);
};

export const mixpanelEvent = (
  mixpanelRef: MutableRefObject<ExpoMixpanelAnalytics>,
  eventName: string,
  props?: Generic
) => {
  if (Config.useMixpanelAnalytics && mixpanelRef.current) {
    mixpanelRef.current.track(eventName, props);
  }
};

export const clearMixpanel = (
  mixpanelRef: MutableRefObject<ExpoMixpanelAnalytics>
) => {
  if (Config.useMixpanelAnalytics && mixpanelRef.current) {
    mixpanelRef.current.reset();
  }
};
