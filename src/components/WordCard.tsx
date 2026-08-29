import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { YorubaWord } from "../data/lessons";
import { colors, radii, spacing, typography } from "../theme/colors";
import { ToneBadge } from "./ToneBadge";

export function WordCard({ word }: { word: YorubaWord }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Pressable onPress={() => setFlipped((f) => !f)} style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.wordBlock}>
          <Text style={styles.word}>{word.word}</Text>
          <ToneBadge tones={word.tones} size="sm" />
        </View>

        <Pressable
          hitSlop={8}
          style={styles.audioBtn}
          onPress={(e) => e.stopPropagation?.()}
        >
          <Ionicons name="volume-medium-outline" size={18} color={colors.gold} />
        </Pressable>
      </View>

      {!flipped ? (
        <View style={styles.metaRow}>
          <Text style={styles.hint}>Tap for meaning</Text>
          <View style={styles.pill}>
            <Text style={styles.pillText}>{word.tones.length} tones</Text>
          </View>
        </View>
      ) : (
        <View style={styles.answerBlock}>
          <Text style={styles.english}>{word.english}</Text>
          {word.example && (
            <View style={styles.exampleBox}>
              <Text style={styles.example}>{word.example}</Text>
              {word.exampleEnglish && (
                <Text style={styles.exampleEnglish}>{word.exampleEnglish}</Text>
              )}
            </View>
          )}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: 18,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    marginBottom: spacing.xs,
    borderWidth: 1,
    borderColor: colors.border,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  wordBlock: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  word: {
    ...typography.h2,
    color: colors.textPrimary,
    marginBottom: 6,
    fontSize: 24,
  },
  audioBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.goldSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
  },
  hint: {
    ...typography.caption,
    color: colors.textMuted,
  },
  pill: {
    backgroundColor: colors.bgSoft,
    borderRadius: radii.pill,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillText: {
    ...typography.caption,
    color: colors.textSecondary,
    fontWeight: "700",
  },
  answerBlock: {
    marginTop: 4,
  },
  english: {
    ...typography.bodyBold,
    color: colors.gold,
  },
  exampleBox: {
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  example: {
    ...typography.body,
    color: colors.textSecondary,
    fontStyle: "italic",
  },
  exampleEnglish: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: 2,
  },
});
