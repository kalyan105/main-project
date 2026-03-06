import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D1E8FF', dark: '#0A1A2F' }}
      headerImage={
        <Image
          source={require('@/assets/images/zaby_banner.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Zaby!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <Image
          source={require('@/assets/images/zaby_mascot.png')}
          style={styles.mascotImage}
        />
        <ThemedText type="subtitle">Your AI Learning Companion</ThemedText>
        <ThemedText style={styles.description}>
          Zaby is designed to make learning faster, smarter, and more engaging. Our platform adapts to your unique learning style to help you achieve mastery.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">The PRISM Framework</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Personalized. Real-time. Integrated. Smart. Mastery-oriented.</ThemedText>
          {'\n\n'}
          Our framework ensures that every lesson is tailored to your progress, providing real-time feedback and identifying your specific needs.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Key Features</ThemedText>

        <ThemedView style={styles.featureItem}>
          <ThemedText type="defaultSemiBold">🎓 Zaby Tutor</ThemedText>
          <ThemedText>Get instant help with any subject. Zaby provides clear, adaptive explanations.</ThemedText>
        </ThemedView>

        <ThemedView style={styles.featureItem}>
          <ThemedText type="defaultSemiBold">💬 Zaby Interview</ThemedText>
          <ThemedText>Practice your skills with AI-powered mock interviews and feedback.</ThemedText>
        </ThemedView>

        <ThemedView style={styles.featureItem}>
          <ThemedText type="defaultSemiBold">📊 Zaby Assessment</ThemedText>
          <ThemedText>Test your knowledge with personalized assessments that track your growth.</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  contentContainer: {
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  description: {
    textAlign: 'center',
  },
  stepContainer: {
    gap: 12,
    marginBottom: 24,
  },
  featureItem: {
    gap: 4,
    paddingLeft: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#0a7ea4',
    marginBottom: 12,
  },
  headerImage: {
    height: 178,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  mascotImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
});
