import { useFocusEffect } from "@react-navigation/native";

import { useCallback } from "react";
import { BackHandler } from "react-native";

export const useAndroidBack = (onBack?: VoidFunction) => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (onBack) {
          onBack();
          return true;
        }

        return false;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [onBack])
  );
};
