import * as Device from "expo-device";

import { Platform, Dimensions } from "react-native";

import { AppVersion, DeviceData } from "#types";

export const getDeviceData = (): DeviceData => {
  const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
  const { height: windowHeight, width: windowWidth } = Dimensions.get("window");

  return {
    currentVersion: AppVersion,
    deviceMeta: {
      brand: Device?.brand ?? "",
      OS: Platform.OS,
      modelName: Device?.modelName,
      modelId: Device?.modelId,
      screenHeight,
      screenWidth,
      windowHeight,
      windowWidth,
    },
  };
};
