import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Pressable,
  Platform,
  View,
  Alert,
} from "react-native";
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  CameraOptions,
} from "react-native-image-picker";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // Function to handle camera button press
  const handleCameraPress = () => {
    const options: CameraOptions = {
      mediaType: "photo",
      maxWidth: 800,
      maxHeight: 800,
      quality: 1,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log("User cancelled camera");
      } else if (response.errorMessage) {
        console.log("Camera Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        //   setSelectedImage(uri ?? null); // Use nullish coalescing operator to handle undefined
        //   setSelectedCrop(null); // Clear selected crop
      }
    });
  };

  interface Inference {
    class: string;
    confidence: number;
    causes: string[];
    recommended_solutions: string[];
    recommended_pesticide: string[];
  }

  const [inference, setInference] = useState<null | Inference>(null);

  // Function to handle image upload button press
  const handleUploadPress = () => {
    const options: CameraOptions = {
      mediaType: "photo",
      maxWidth: 800,
      maxHeight: 800,
      quality: 1,
    };

    launchImageLibrary(options, async (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorMessage) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        // const plugin = useTensorflowModel(require(`assets/${id}.tflite`))

        const inputData = {};

        const uri = response.assets[0].uri;
        const formData = new FormData();

        const imageBlob = await (await fetch(uri!!)).blob();
        // const imageFile = new File([imageBlob], id as string, {
        //   type: "image/jpeg"
        // })

        formData.append("file", imageBlob, id as string);
        formData.append("crop", id as string);
        fetch("https://plantdetection.onrender.com/predict", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            setInference(data);
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#021f01", dark: "#021f01" }}
      headerImage={
        <Ionicons size={310} name="stats-chart" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{id} Disease Prediction</ThemedText>
      </ThemedView>

      <View>
        <View style={styles.actionButtonsContainer}>
          <Pressable style={styles.actionButton} onPress={handleCameraPress}>
            <Ionicons name="camera" size={24} color="black" />
            <ThemedText style={styles.actionButtonText}>Use Camera</ThemedText>
          </Pressable>

          <Pressable style={styles.actionButton} onPress={handleUploadPress}>
            <Ionicons name="cloud-upload" size={24} color="black" />
            <ThemedText style={styles.actionButtonText}>
              Upload Image
            </ThemedText>
          </Pressable>
        </View>

        {/* <View style={{ display: "flex", alignItems: "center" }}>
          {inference ? (
            <ThemedText>
              <ThemedText style={{ fontWeight: "bold" }}>Disease: </ThemedText>
              {inference.class}
              {"\n"}
              <ThemedText style={{ fontWeight: "bold" }}>
                Confidence:{" "}
              </ThemedText>
              {inference.confidence.toFixed(2)}%{"\n"}
              <ThemedText style={{ fontWeight: "bold" }}>
                Causes:{"\n"}
              </ThemedText>
              {inference.causes.map((cause, index) => (
                <ThemedText key={index}>
                  - {cause}
                  {"\n"}
                </ThemedText>
              ))}
              <ThemedText style={{ fontWeight: "bold" }}>
                Recommended Solutions:{"\n"}
              </ThemedText>
              {inference.recommended_solutions.map((solution, index) => (
                <ThemedText key={index}>
                  - {solution}
                  {"\n"}
                </ThemedText>
              ))}
              <ThemedText style={{ fontWeight: "bold" }}>
                Recommended Pesticide:{"\n"}
              </ThemedText>
              {inference.recommended_pesticide.map((pesticide, index) => (
                <ThemedText key={index}>
                  - {pesticide}
                  {"\n"}
                </ThemedText>
              ))}
            </ThemedText>
          ) : (
            <ThemedText>No data available</ThemedText>
          )}
        </View> */}
        <View style={{ display: "flex", alignItems: "center" }}>
            {inference ? (
              inference.confidence < 80 ? (
                <ThemedText style={{ color: "red", fontWeight: "bold" }}>
                  Error: Confidence is below 80%. Please upload a clear image.
                </ThemedText>
              ) : (
                <ThemedText>
                  <ThemedText style={{ fontWeight: "bold" }}>Disease: </ThemedText>
                  {inference.class}
                  {"\n"}
                  <ThemedText style={{ fontWeight: "bold" }}>Confidence: </ThemedText>
                  {inference.confidence.toFixed(2)}%{"\n"}
                  <ThemedText style={{ fontWeight: "bold" }}>Causes:{"\n"}</ThemedText>
                  {inference.causes.map((cause, index) => (
                    <ThemedText key={index}>
                      - {cause}
                      {"\n"}
                    </ThemedText>
                  ))}
                  <ThemedText style={{ fontWeight: "bold" }}>
                    Recommended Solutions:{"\n"}
                  </ThemedText>
                  {inference.recommended_solutions.map((solution, index) => (
                    <ThemedText key={index}>
                      - {solution}
                      {"\n"}
                    </ThemedText>
                  ))}
                  <ThemedText style={{ fontWeight: "bold" }}>
                    Recommended Pesticide:{"\n"}
                  </ThemedText>
                  {inference.recommended_pesticide.map((pesticide, index) => (
                    <ThemedText key={index}>
                      - {pesticide}
                      {"\n"}
                    </ThemedText>
                  ))}
                </ThemedText>
              )
            ) : (
              <ThemedText>No data available</ThemedText>
            )}
      </View>

      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: "hidden",
    margin: 10,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: "#3498db",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  actionButtonText: {
    marginLeft: 10,
    color: "white",
  },
  headerImage: {
    color: "#8f1603",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
