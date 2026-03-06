import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';

export default function ExploreScreen() {
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
        <ThemedText type="title">Explore Zaby</ThemedText>
      </ThemedView>
      <ThemedText>Discover more about your AI learning companion and the methodology behind it.</ThemedText>

      <Collapsible title="Official Resources">
        <ThemedText>
          Visit our main website to stay up to date with the latest features and news.
        </ThemedText>
        <ExternalLink href="https://zaby.io">
          <ThemedText type="link">zaby.io</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="PRISM Framework">
        <ThemedText>
          Learn how our proprietary PRISM framework personalizes your learning path in real-time.
        </ThemedText>
        <ExternalLink href="https://zaby.io">
          <ThemedText type="link">Methodology Overview</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="AI Tutor & Support">
        <ThemedText>
          Explore how Zaby Tutor provides 24/7 expert guidance and instant answers to your questions.
        </ThemedText>
        <ExternalLink href="https://zaby.io">
          <ThemedText type="link">Feature Details</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Community & Support">
        <ThemedText>
          Join our community of learners and get support from our team.
        </ThemedText>
        <ExternalLink href="https://zaby.io">
          <ThemedText type="link">Join Discord</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Technical Background">
        <ThemedText>
          Built with Expo and cutting-edge AI EdTech, Zaby is optimized for cross-platform performance.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev">
          <ThemedText type="link">Expo Documentation</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 178,
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
});
