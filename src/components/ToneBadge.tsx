import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { Tone } from "../data/lessons";
import { colors } from "../theme/colors";

const TONE_COLOR: Record<Tone, string> = {
  H: colors.toneHigh,
  M: colors.toneMid,
  L: colors.toneLow,
};

const TONE_Y: Record<Tone, number> = {
  H: 0,
  M: 4,
  L: 8,
};

export function ToneBadge({ tones, size = "md" }: { tones: Tone[]; size?: "sm" | "md" }) {
  const dot = size === "sm" ? 5 : 7;
  const height = size === "sm" ? 16 : 20;

  return (
    <View style={[styles.track, { height }]}>
      {tones.map((t, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            {
              width: dot,
              height: dot,
              borderRadius: dot / 2,
              backgroundColor: TONE_COLOR[t],
              transform: [{ translateY: TONE_Y[t] * (size === "sm" ? 0.8 : 1) }],
              marginLeft: i === 0 ? 0 : 4,
            },
          ]}
        />
      ))}
    </View>
  );
}

export function ToneLegend() {
  return (
    <View style={styles.legendRow}>
      {(["H", "M", "L"] as Tone[]).map((t) => (
        <View key={t} style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: TONE_COLOR[t] }]} />
          <Text style={styles.legendText}>{t === "H" ? "High" : t === "M" ? "Mid" : "Low"}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 2,
  },
  dot: {},
  legendRow: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "600",
  },
});
