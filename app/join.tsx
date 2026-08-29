import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useUser } from "../src/context/UserContext";
import { colors, radii, spacing, typography } from "../src/theme/colors";

export default function Join() {
  const [input, setInput] = useState("");
  const { setName } = useUser();

  const canContinue = input.trim().length > 0;

  const handleContinue = async () => {
    if (!canContinue) return;
    await setName(input.trim());
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.content}>
        <View style={styles.iconWrap}>
          <Ionicons name="hand-left-outline" size={48} color={colors.gold} />
        </View>
        <Text style={styles.title}>What should we call you?</Text>
        <Text style={styles.subtitle}>
          No email, no password — just your name to personalize your lessons.
        </Text>

        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Your name"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
          autoFocus
          autoCapitalize="words"
          returnKeyType="done"
          onSubmitEditing={handleContinue}
        />

        <Pressable
          style={[styles.button, !canContinue && styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={!canContinue}
        >
          <Text style={styles.buttonText}>Let&apos;s go</Text>
        </Pressable>

        <Text style={styles.footnote}>
          Progress stays on this device for now — cloud sync is on the way.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: spacing.xl,
  },
  iconWrap: {
    marginBottom: spacing.md,
    alignItems: "flex-start",
  },
  title: {
    ...typography.h1,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
    lineHeight: 20,
  },
  input: {
    backgroundColor: colors.bgSoft,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    color: colors.textPrimary,
    fontSize: 17,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: spacing.md,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonText: {
    ...typography.bodyBold,
    color: colors.textPrimary,
    fontSize: 16,
  },
  footnote: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: "center",
  },
});
