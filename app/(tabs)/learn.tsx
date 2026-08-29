import { Ionicons } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ToneLegend } from "../../src/components/ToneBadge";
import { WordCard } from "../../src/components/WordCard";
import { lessonCategories } from "../../src/data/lessons";
import {
  colors,
  radii,
  spacing,
  typography,
} from "../../src/theme/colors";

const categoryIcons: Record<
  string,
  keyof typeof Ionicons.glyphMap
> = {
  greetings: "hand-left-outline",
  family: "people-outline",
  everyday: "chatbubble-ellipses-outline",
  numbers: "calculator-outline",
  bathroom: "water-outline",
  home: "home-outline",
  kitchen: "restaurant-outline",
  food: "restaurant-sharp",
  market: "bag-outline",
};

export default function Learn() {
  const [activeId, setActiveId] = useState(
    lessonCategories[0].id
  );

  const tabBarHeight = useBottomTabBarHeight();

  const active =
    lessonCategories.find(
      (category) => category.id === activeId
    ) ?? lessonCategories[0];

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.eyebrow}>Lesson library</Text>
          <Text style={styles.title}>Learn</Text>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.countText}>
            {active.words.length} words
          </Text>
        </View>
      </View>

      {/* TONE LEGEND */}
      <View style={styles.legend}>
        <ToneLegend />
      </View>

      {/* CATEGORY NAVIGATION */}
      <View style={styles.categories}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
          keyboardShouldPersistTaps="handled"
        >
          {lessonCategories.map((category) => {
            const isActive = category.id === activeId;

            const iconName =
              categoryIcons[category.id] ?? "book-outline";

            return (
              <Pressable
                key={category.id}
                onPress={() => setActiveId(category.id)}
                style={({ pressed }) => [
                  styles.category,
                  isActive && styles.categoryActive,
                  pressed && styles.categoryPressed,
                ]}
              >
                <Ionicons
                  name={iconName}
                  size={13}
                  color={
                    isActive
                      ? colors.textPrimary
                      : colors.textSecondary
                  }
                />

                <Text
                  numberOfLines={1}
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {category.title}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* ACTIVE LESSON */}
      <ScrollView
        style={styles.lessonList}
        contentContainerStyle={[
          styles.lessonContent,
          {
            paddingBottom: tabBarHeight + spacing.xl,
          },
        ]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {/* SECTION HEADER */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text
              style={styles.sectionTitle}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.85}
            >
              {active.title}
            </Text>

            <Text style={styles.wordCount}>
              {active.words.length}
            </Text>
          </View>

          <Text style={styles.subtitle}>
            {active.subtitle}
          </Text>
        </View>

        {/* WORDS */}
        <View style={styles.wordList}>
          {active.words.map((word) => (
            <WordCard
              key={word.id}
              word={word}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: spacing.md,
  },

  // ─────────────────────────────────────────
  // HEADER
  // ─────────────────────────────────────────

  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    marginBottom: 2,
  },

  headerLeft: {
    flex: 1,
    minWidth: 0,
  },

  eyebrow: {
    ...typography.caption,
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  title: {
    ...typography.hero,
    color: colors.textPrimary,
    marginTop: 0,
  },

  countBadge: {
    alignSelf: "flex-end",
    backgroundColor: colors.bgElevated,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 2,
    flexShrink: 0,
  },

  countText: {
    ...typography.caption,
    color: colors.textSecondary,
    fontWeight: "700",
  },

  // ─────────────────────────────────────────
  // TONE LEGEND
  // ─────────────────────────────────────────

  legend: {
    paddingHorizontal: spacing.md,
    marginBottom: 2,
  },

  // ─────────────────────────────────────────
  // CATEGORY NAVIGATION
  // ─────────────────────────────────────────

  categories: {
    height: 32,
    marginBottom: 2,
  },

  categoryRow: {
    paddingHorizontal: spacing.md,
    alignItems: "center",
    gap: 6,
  },

  category: {
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.pill,
    backgroundColor: colors.bgElevated,
    flexShrink: 0,
  },

  categoryActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  categoryPressed: {
    opacity: 0.72,
  },

  categoryText: {
    ...typography.caption,
    color: colors.textSecondary,
    fontWeight: "700",
    lineHeight: 14,
    flexShrink: 0,
  },

  categoryTextActive: {
    color: colors.textPrimary,
  },

  // ─────────────────────────────────────────
  // LESSON LIST
  // ─────────────────────────────────────────

  lessonList: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },

  lessonContent: {
    paddingTop: 0,
  },

  // ─────────────────────────────────────────
  // SECTION HEADER
  // ─────────────────────────────────────────

  sectionHeader: {
    marginBottom: 10,
  },

  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    minHeight: 30,
  },

  sectionTitle: {
    ...typography.h2,
    color: colors.textPrimary,
    flexShrink: 1,
  },

  wordCount: {
    ...typography.caption,
    color: colors.gold,
    backgroundColor: colors.bgElevated,
    borderRadius: radii.pill,
    paddingHorizontal: 7,
    paddingVertical: 2,
    overflow: "hidden",
    flexShrink: 0,
  },

  subtitle: {
    ...typography.body,
    color: colors.textMuted,
    marginTop: 2,
    lineHeight: 19,
  },

  // ─────────────────────────────────────────
  // WORD CARDS
  // ─────────────────────────────────────────

  wordList: {
    gap: spacing.sm,
  },
});