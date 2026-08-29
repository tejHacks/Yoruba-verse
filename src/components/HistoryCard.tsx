import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { HistoryStory } from "../data/history";
import { colors, radii, spacing, typography } from "../theme/colors";

export function HistoryCard({ story }: { story: HistoryStory }) {
  const router = useRouter();

  const openStory = () => {
    router.push({
      pathname: "/history/[id]",
      params: { id: story.id },
    });
  };

  return (
    <Pressable
      onPress={openStory}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.topRow}>
        <View style={styles.iconBox}>
          <Ionicons
            name={story.iconName ?? "book-outline"}
            size={24}
            color={colors.gold}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.era}>{story.era}</Text>

          <Text style={styles.title} numberOfLines={2}>
            {story.title}
          </Text>
        </View>

        <View style={styles.arrow}>
          <Ionicons
            name="arrow-forward"
            size={18}
            color={colors.gold}
          />
        </View>
      </View>

      <Text style={styles.summary}>{story.summary}</Text>

      <View style={styles.readRow}>
        <Ionicons
          name="book-outline"
          size={16}
          color={colors.gold}
        />

        <Text style={styles.readText}>
          Read this chapter
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: radii.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.985 }],
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg,
    marginRight: spacing.sm,
  },

  titleContainer: {
    flex: 1,
  },

  era: {
    ...typography.caption,
    color: colors.gold,
    marginBottom: 3,
  },

  title: {
    ...typography.h2,
    color: colors.textPrimary,
  },

  arrow: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg,
    marginLeft: spacing.sm,
  },

  summary: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    lineHeight: 22,
  },

  readRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.sm,
    gap: 7,
  },

  readText: {
    ...typography.caption,
    color: colors.gold,
  },
});