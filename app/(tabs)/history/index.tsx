import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { HistoryCard } from "../../../src/components/HistoryCard";
import { historyStories } from "../../../src/data/history";
import {
    colors,
    spacing,
    typography,
} from "../../../src/theme/colors";

export default function History() {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.eyebrow}>
                    THE YORÙBÁ STORY
                </Text>

                <Text style={styles.title}>
                    History
                </Text>

                <Text style={styles.subtitle}>
                    Walk through the cities, kingdoms, beliefs,
                    language and people that shaped Yorùbá history.
                </Text>
            </View>

            {/* HISTORY CONTENT */}
            <ScrollView
                style={styles.list}
                contentContainerStyle={[
                    styles.listContent,
                    {
                        paddingBottom: tabBarHeight + spacing.xl,
                    },
                ]}
                showsVerticalScrollIndicator={false}
            >
                {historyStories.map((story) => (
                    <HistoryCard
                        key={story.id}
                        story={story}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        paddingTop: spacing.lg,
    },

    // ─────────────────────────────────────────
    // HEADER
    // ─────────────────────────────────────────

    header: {
        paddingHorizontal: spacing.md,
        marginBottom: spacing.sm,
    },

    eyebrow: {
        ...typography.caption,
        color: colors.gold,
        letterSpacing: 2,
        marginBottom: spacing.xs,
    },

    title: {
        ...typography.hero,
        color: colors.textPrimary,
        marginBottom: 4,
    },

    subtitle: {
        ...typography.body,
        color: colors.textMuted,
        lineHeight: 22,
    },

    // ─────────────────────────────────────────
    // HISTORY LIST
    // ─────────────────────────────────────────

    list: {
        flex: 1,
    },

    listContent: {
        paddingHorizontal: spacing.lg,
        paddingTop: 0,
    },
});