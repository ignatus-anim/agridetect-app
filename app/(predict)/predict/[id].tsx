import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  View,
  Alert,
} from "react-native";
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  CameraOptions,
  MediaType,
} from "react-native-image-picker";

import { Stack } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router";

import axios from "axios";
import { useTensorflowModel } from "react-native-fast-tflite";

// Importing crop images dynamically
const appleImage = require("@/assets/photos/apple.jpeg");
const bananaImage = require("@/assets/photos/banana.jpeg");
const cornImage = require("@/assets/photos/corn.jpeg");
const cherryImage = require("@/assets/photos/cherry.jpeg");
const grapeImage = require("@/assets/photos/grape.jpeg");
const peachImage = require("@/assets/photos/peach.jpeg");
const potatoImage = require("@/assets/photos/potato.jpeg");
const mangoImage = require("@/assets/photos/mango.jpeg");
const orangeImage = require("@/assets/photos/orange.jpeg");
const tomatoImage = require("@/assets/photos/tomato.jpeg");
const pepperImage = require("@/assets/photos/pepper.jpeg");
const strawberryImage = require("@/assets/photos/strawberry.jpeg");
const riceImage = require("@/assets/photos/rice.jpeg");

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

  const [inference, setInference] = useState<null | string>(null);

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

        const plugin = useTensorflowModel(require(`assets/${id}.tflite`))

        const inputData = {}

        const uri = response.assets[0].uri;
        const formData = new FormData();

        const imageBlob = await (await fetch(uri!!)).blob();
        // const imageFile = new File([imageBlob], id as string, {
        //   type: "image/jpeg"
        // })

        formData.append("file", imageBlob, id as string);
        formData.append("crop", id as string);
        fetch("http://127.0.0.1:8000/predict", {
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

      {/* Action Buttons for Camera and Upload */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleCameraPress}
        >
          <Ionicons name="camera" size={24} color="black" />
          <ThemedText style={styles.actionButtonText}>Use Camera</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleUploadPress}
        >
          <Ionicons name="cloud-upload" size={24} color="black" />
          <ThemedText style={styles.actionButtonText}>Upload Image</ThemedText>
        </TouchableOpacity>
      <ThemedText>{JSON.stringify(inference)}</ThemedText>
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
