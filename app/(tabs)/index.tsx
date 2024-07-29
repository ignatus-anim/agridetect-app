import { Image, StyleSheet, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Ionicons size={310} name="home" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to AgriDetect</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedText>Our Mission is to help in identifying plant diseases efficiently. Upload an image of a plant, and our system will analyze it to detect any disease in it</ThemedText>
        <ThemedText type="subtitle">How It Works</ThemedText>
        <ThemedText>
        Please go to the Predict and upload an image of a plant showing signs of disease. Our system will analyze the image using advanced algorithms to identify potential diseases. You can then view the results and receive recommendations for further action.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Why Choose Us</ThemedText>
        <ThemedText>
        Our system uses advanced machine learning for precise disease detection, featuring a user-friendly interface for a seamless experience. It delivers results within seconds, ensuring fast decision-making.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Get Started</ThemedText>
        <ThemedText>
        Click on the <ThemedText type="defaultSemiBold">Predict</ThemedText> tab to upload an image and experience the power of our Crop Disease Recognition system
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});
