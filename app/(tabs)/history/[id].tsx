import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import * as Speech from "expo-speech";
import React, { useEffect, useMemo, useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { historyStories } from "../../../src/data/history";
import { colors, radii, spacing, typography } from "../../../src/theme/colors";

export default function HistoryStoryScreen() {
    const router = useRouter();

    const params = useLocalSearchParams<{
        id: string;
    }>();

    const story = useMemo(
        () => historyStories.find((item) => item.id === params.id),
        [params.id]
    );

    const [speaking, setSpeaking] = useState(false);

    useEffect(() => {
        return () => {
            Speech.stop();
        };
    }, []);

    if (!story) {
        return (
            <View style={styles.notFound}>
                <Text style={styles.notFoundTitle}>
                    Story not found
                </Text>

                <Pressable onPress={() => router.back()}>
                    <Text style={styles.backText}>
                        Go back
                    </Text>
                </Pressable>
            </View>
        );
    }

    const textToRead = [
        story.title,
        story.summary,
        ...story.body,
    ].join("\n\n");

    const toggleSpeech = async () => {
        if (speaking) {
            await Speech.stop();
            setSpeaking(false);
            return;
        }

        setSpeaking(true);

        await Speech.speak(textToRead, {
            language: "en-US",
            pitch: 0.95,
            rate: 0.9,

            onDone: () => {
                setSpeaking(false);
            },

            onStopped: () => {
                setSpeaking(false);
            },

            onError: () => {
                setSpeaking(false);
            },
        });
    };

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >
                    {/* BOOK HEADER */}

                    <View style={styles.bookHeader}>
                        <Pressable
                            onPress={() => router.back()}
                            style={styles.backButton}
                            hitSlop={10}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={21}
                                color={colors.textPrimary}
                            />
                        </Pressable>

                        <Text style={styles.bookLabel}>
                            YORÙBÁ HISTORY
                        </Text>

                        <View style={{ width: 40 }} />
                    </View>

                    {/* COVER */}

                    <View style={styles.cover}>
                        <View style={styles.coverIconWrap}>
                            <Ionicons
                                name={story.iconName ?? "book-outline"}
                                size={52}
                                color={colors.gold}
                            />
                        </View>
                        <Text style={styles.coverEra}>
                            {story.era}
                        </Text>

                        <Text style={styles.coverTitle}>
                            {story.title}
                        </Text>

                        <View style={styles.coverLine} />

                        <Text style={styles.coverSummary}>
                            {story.summary}
                        </Text>
                    </View>

                    {/* AUDIO */}

                    <Pressable
                        onPress={toggleSpeech}
                        style={({ pressed }) => [
                            styles.audioButton,
                            pressed && styles.audioPressed,
                        ]}
                    >
                        <View style={styles.audioIcon}>
                            <Ionicons
                                name={speaking ? "stop" : "volume-high"}
                                size={19}
                                color={colors.bg}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.audioTitle}>
                                {speaking
                                    ? "Stop reading"
                                    : "Listen to this chapter"}
                            </Text>

                            <Text style={styles.audioSubtitle}>
                                {speaking
                                    ? "Yoruba history is being read aloud"
                                    : "Listen instead of reading"}
                            </Text>
                        </View>

                        <Ionicons
                            name="chevron-forward"
                            size={18}
                            color={colors.gold}
                        />
                    </Pressable>

                    {/* QUOTE */}

                    {story.quote && (
                        <View style={styles.quoteBox}>
                            <Text style={styles.quoteMark}>
                                “
                            </Text>

                            <Text style={styles.quote}>
                                {story.quote}
                            </Text>
                        </View>
                    )}

                    {/* CHAPTER */}

                    <View style={styles.chapterHeader}>
                        <Text style={styles.chapterLabel}>
                            CHAPTER
                        </Text>

                        <View style={styles.chapterLine} />
                    </View>

                    {story.body.map((paragraph, index) => (
                        <View
                            key={`${story.id}-${index}`}
                            style={styles.paragraphBlock}
                        >
                            {index === 0 ? (
                                <Text style={styles.dropCapParagraph}>
                                    <Text style={styles.dropCap}>
                                        {paragraph.charAt(0)}
                                    </Text>
                                    {paragraph.slice(1)}
                                </Text>
                            ) : (
                                <Text style={styles.paragraph}>
                                    {paragraph}
                                </Text>
                            )}
                        </View>
                    ))}

                    {/* SOURCE NOTE */}

                    {story.sourceNote && (
                        <View style={styles.sourceBox}>
                            <View style={styles.sourceHeader}>
                                <Ionicons
                                    name="information-circle-outline"
                                    size={18}
                                    color={colors.gold}
                                />

                                <Text style={styles.sourceTitle}>
                                    Historical note
                                </Text>
                            </View>

                            <Text style={styles.sourceText}>
                                {story.sourceNote}
                            </Text>
                        </View>
                    )}

                    <View style={styles.endMark}>
                        <View style={styles.endLine} />
                        <Text style={styles.endText}>
                            END OF CHAPTER
                        </Text>
                        <View style={styles.endLine} />
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },

    content: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl + 12,
        paddingBottom: spacing.xxl * 2,
    },

    bookHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: spacing.lg,
    },

    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.bgElevated,
        borderWidth: 1,
        borderColor: colors.border,
    },

    bookLabel: {
        ...typography.caption,
        color: colors.gold,
        letterSpacing: 2,
    },

    cover: {
        backgroundColor: colors.bgElevated,
        borderRadius: radii.lg,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.xxl,
        alignItems: "center",
        marginBottom: spacing.lg,
    },

    coverIconWrap: {
        marginBottom: spacing.md,
        alignItems: "center",
        justifyContent: "center",
    },

    coverEra: {
        ...typography.caption,
        color: colors.gold,
        textTransform: "uppercase",
        letterSpacing: 1.5,
        marginBottom: spacing.sm,
    },

    coverTitle: {
        ...typography.hero,
        color: colors.textPrimary,
        textAlign: "center",
        lineHeight: 42,
    },

    coverLine: {
        width: 55,
        height: 1,
        backgroundColor: colors.gold,
        marginVertical: spacing.md,
    },

    coverSummary: {
        ...typography.body,
        color: colors.textSecondary,
        textAlign: "center",
        lineHeight: 23,
        maxWidth: 330,
    },

    audioButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.bgElevated,
        borderRadius: radii.lg,
        borderWidth: 1,
        borderColor: colors.border,
        padding: spacing.sm,
        marginBottom: spacing.xl,
    },

    audioPressed: {
        opacity: 0.8,
    },

    audioIcon: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: colors.gold,
        alignItems: "center",
        justifyContent: "center",
        marginRight: spacing.sm,
    },

    audioTitle: {
        ...typography.body,
        color: colors.textPrimary,
        fontWeight: "700",
    },

    audioSubtitle: {
        ...typography.caption,
        color: colors.textMuted,
        marginTop: 2,
    },

    quoteBox: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.lg,
        borderLeftWidth: 3,
        borderLeftColor: colors.gold,
        marginBottom: spacing.xl,
    },

    quoteMark: {
        fontSize: 38,
        lineHeight: 30,
        color: colors.gold,
    },

    quote: {
        ...typography.body,
        color: colors.textSecondary,
        fontStyle: "italic",
        lineHeight: 25,
    },

    chapterHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.lg,
        gap: spacing.sm,
    },

    chapterLabel: {
        ...typography.caption,
        color: colors.gold,
        letterSpacing: 1.5,
    },

    chapterLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.border,
    },

    paragraphBlock: {
        marginBottom: spacing.md,
    },

    paragraph: {
        ...typography.body,
        color: colors.textSecondary,
        fontSize: 17,
        lineHeight: 29,
    },

    dropCapParagraph: {
        ...typography.body,
        color: colors.textSecondary,
        fontSize: 17,
        lineHeight: 29,
    },

    dropCap: {
        fontSize: 48,
        lineHeight: 48,
        color: colors.gold,
        fontWeight: "800",
    },

    sourceBox: {
        marginTop: spacing.lg,
        padding: spacing.md,
        backgroundColor: colors.bgElevated,
        borderRadius: radii.lg,
        borderWidth: 1,
        borderColor: colors.border,
    },

    sourceHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginBottom: spacing.sm,
    },

    sourceTitle: {
        ...typography.body,
        color: colors.textPrimary,
        fontWeight: "700",
    },

    sourceText: {
        ...typography.caption,
        color: colors.textMuted,
        lineHeight: 20,
    },

    endMark: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.sm,
        marginTop: spacing.xxl,
    },

    endLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.border,
    },

    endText: {
        ...typography.caption,
        color: colors.textMuted,
        letterSpacing: 1,
    },

    notFound: {
        flex: 1,
        backgroundColor: colors.bg,
        alignItems: "center",
        justifyContent: "center",
        padding: spacing.lg,
    },

    notFoundTitle: {
        ...typography.h2,
        color: colors.textPrimary,
        marginBottom: spacing.md,
    },

    backText: {
        ...typography.body,
        color: colors.gold,
    },
});