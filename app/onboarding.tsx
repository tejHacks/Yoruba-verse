import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { OnboardingSlide, SlideData } from "../src/components/OnboardingSlide";
import { useUser } from "../src/context/UserContext";
import { colors, radii, spacing, typography } from "../src/theme/colors";

const { width } = Dimensions.get("window");

const slides: SlideData[] = [
  {
    icon: "musical-notes-outline",
    title: "Yoruba is a language that sings",
    body: "Every word carries a pitch — high, mid, or low. Get the tone wrong and the meaning changes entirely. Yoba puts tone front and center, not as a footnote.",
    tones: ["L", "H", "M"],
    accent: colors.gold,
  },
  {
    icon: "library-outline",
    title: "Learn the culture, not just the words",
    body: "From Ilé-Ifẹ̀ to the Ọ̀yọ́ Empire to the drums that speak — Yoba pairs every lesson with the history and stories behind the language.",
    accent: colors.primary,
  },
  {
    icon: "leaf-outline",
    title: "Start where you are",
    body: "No pressure, no streak anxiety on day one. Just your name, a first lesson, and a language that's been waiting for you.",
    accent: colors.toneLow,
  },
];

export default function Onboarding() {
  const listRef = useRef<FlatList>(null);
  const [page, setPage] = useState(0);
  const { completeOnboarding } = useUser();

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const p = Math.round(e.nativeEvent.contentOffset.x / width);
    setPage(p);
  };

  const goNext = () => {
    if (page < slides.length - 1) {
      listRef.current?.scrollToIndex({ index: page + 1 });
    } else {
      finish();
    }
  };

  const finish = async () => {
    await completeOnboarding();
    router.replace("/join");
  };

  return (
    <View style={styles.container}>
      <View style={styles.skipRow}>
        <Pressable onPress={finish} hitSlop={10}>
          <Text style={styles.skip}>Skip</Text>
        </Pressable>
      </View>

      <FlatList
        ref={listRef}
        data={slides}
        keyExtractor={(_, i) => String(i)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => <OnboardingSlide data={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                { backgroundColor: i === page ? colors.gold : colors.bgSoft, width: i === page ? 20 : 8 },
              ]}
            />
          ))}
        </View>

        <Pressable style={styles.button} onPress={goNext}>
          <Text style={styles.buttonText}>
            {page === slides.length - 1 ? "Get started" : "Next"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  skipRow: {
    alignItems: "flex-end",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  skip: {
    ...typography.bodyBold,
    color: colors.textMuted,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    paddingTop: spacing.md,
    gap: spacing.lg,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    ...typography.bodyBold,
    color: colors.textPrimary,
    fontSize: 16,
  },
});
