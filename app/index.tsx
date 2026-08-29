import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";
import { useUser } from "../src/context/UserContext";
import { colors } from "../src/theme/colors";

export default function Index() {
  const { loading, hasOnboarded, name } = useUser();

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.bg, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color={colors.gold} />
      </View>
    );
  }

  if (!hasOnboarded) return <Redirect href="/onboarding" />;
  if (!name) return <Redirect href="/join" />;
  return <Redirect href="/(tabs)" />;
}
