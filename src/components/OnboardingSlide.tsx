import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import type { Tone } from "../data/lessons";
import { colors, spacing, typography } from "../theme/colors";
import { ToneBadge } from "./ToneBadge";

const { width } = Dimensions.get("window");

export interface SlideData {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  body: string;
  tones?: Tone[];
  accent: string;
}

export function OnboardingSlide({ data }: { data: SlideData }) {
  return (
    <View style={[styles.slide, { width }]}>
      <LinearGradient
        colors={[`${data.accent}33`, "transparent"]}
        style={styles.glow}
      />
      <View style={[styles.iconWrap, { backgroundColor: `${data.accent}22` }]}>
        <Ionicons name={data.icon} size={54} color={colors.textPrimary} />
      </View>

      {data.tones && (
        <View style={styles.toneRow}>
          <ToneBadge tones={data.tones} size="md" />
        </View>
      )}

      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.body}>{data.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
  },
  glow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 400,
  },
  iconWrap: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  emoji: {
    fontSize: 56,
  },
  toneRow: {
    marginBottom: spacing.md,
  },
  title: {
    ...typography.hero,
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  body: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    maxWidth: 320,
  },
});
