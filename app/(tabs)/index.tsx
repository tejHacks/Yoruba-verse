import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useUser } from "../../src/context/UserContext";
import { historyStories } from "../../src/data/history";
import { lessonCategories } from "../../src/data/lessons";
import { colors, radii, spacing, typography } from "../../src/theme/colors";

export default function Home() {
  const { name } = useUser();
  const firstName = name?.split(" ")[0] ?? "there";
  const totalWords = lessonCategories.reduce((sum, c) => sum + c.words.length, 0);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: spacing.xxl }}>
      <LinearGradient colors={colors.gradientHero} style={styles.hero}>
        <View style={styles.greetingRow}>
          <Text style={styles.greeting}>Ẹ n lé, {firstName}</Text>
          <Ionicons name="bulb" size={22} color={colors.gold} />
        </View>
        <Text style={styles.heroSubtitle}>Ready to sharpen your ear today?</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{lessonCategories.length}</Text>
            <Text style={styles.statLabel}>Categories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{totalWords}</Text>
            <Text style={styles.statLabel}>Words</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{historyStories.length}</Text>
            <Text style={styles.statLabel}>Stories</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.section}>
        <Pressable style={styles.ctaCard} onPress={() => router.push("/(tabs)/learn")}>
          <View style={styles.ctaIcon}>
            <Ionicons name="play" size={22} color={colors.bg} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.ctaTitle}>Continue learning</Text>
            <Text style={styles.ctaSubtitle}>
              Pick up in &quot;{lessonCategories[0].title}&quot;
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
        </Pressable>

        <Pressable style={styles.ctaCardSecondary} onPress={() => router.push("/(tabs)/history")}>
          <View style={[styles.ctaIcon, { backgroundColor: colors.goldSoft }]}>
            <Ionicons name="library" size={20} color={colors.gold} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.ctaTitle}>Explore Yoruba history</Text>
            <Text style={styles.ctaSubtitle}>Ilé-Ifẹ̀, the Ọ̀yọ́ Empire, and more</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Word of the day</Text>
        <View style={styles.wotdCard}>
          <Text style={styles.wotdWord}>Ẹ ṣé</Text>
          <Text style={styles.wotdMeaning}>Thank you</Text>
          <Text style={styles.wotdNote}>Tone: Mid → High. Say it like you mean it.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  hero: {
    paddingTop: spacing.xl + 12,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
  },
  greetingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  greeting: {
    ...typography.hero,
    color: colors.textPrimary,
  },
  heroSubtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  statsRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  statCard: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  statNumber: {
    ...typography.h1,
    color: colors.gold,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  ctaCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.primary,
    borderRadius: radii.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  ctaCardSecondary: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.bgElevated,
    borderRadius: radii.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ctaIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  ctaTitle: {
    ...typography.bodyBold,
    color: colors.textPrimary,
  },
  ctaSubtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  },
  wotdCard: {
    backgroundColor: colors.bgElevated,
    borderRadius: radii.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  wotdWord: {
    ...typography.hero,
    color: colors.gold,
  },
  wotdMeaning: {
    ...typography.bodyBold,
    color: colors.textPrimary,
    marginTop: 4,
  },
  wotdNote: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: spacing.sm,
  },
});
