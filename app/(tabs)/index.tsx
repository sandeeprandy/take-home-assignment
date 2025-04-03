"use client";

import { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import Profile from "../../components/ui/Profile";

const { width } = Dimensions.get("window");

const TabCollections = () => (
  <View style={styles.tabContent}>
    <Image
      source={require("../../assets/images/collections.png")}
      style={styles.tabImage}
    />
  </View>
);

const TabManage = () => (
  <View style={styles.tabContent}>
    <Image
      source={require("../../assets/images/text.png")}
      style={styles.tab2Image}
    />
  </View>
);

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("collections");

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <Profile />
        <View style={styles.buttonContainer}>
          <Button
            mode={activeTab === "collections" ? "contained" : "outlined"}
            icon="folder" // icon before the label
            onPress={() => setActiveTab("collections")}
            style={activeTab === "collections" ? styles.activeButton : styles.inactiveButton}
            labelStyle={
              activeTab === "collections" ? styles.activeButtonLabel : styles.inactiveButtonLabel
            }
          >
            COLLECTIONS
          </Button>
          <Button
            mode={activeTab === "manage" ? "contained" : "outlined"}
            icon="cog" // icon before the label
            onPress={() => setActiveTab("manage")}
            style={activeTab === "manage" ? styles.activeButton : styles.inactiveButton}
            labelStyle={
              activeTab === "manage" ? styles.activeButtonLabel : styles.inactiveButtonLabel
            }
          >
            MANAGE TAGS
          </Button>
        </View>
        {activeTab === "collections" ? <TabCollections /> : <TabManage />}
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20, // increased space between tabs
    padding: 15,
    backgroundColor: "#121212",
  },
  activeButton: {
    backgroundColor: "#1E0A2E",
  },
  inactiveButton: {
    borderColor: "#666",
  },
  activeButtonLabel: {
    color: "lightgreen",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  inactiveButtonLabel: {
    color: "#ccc",
    textTransform: "uppercase",
  },
  tabContent: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#121212",
    minHeight: 400,
  },
  tabImage: {
    width: width, // Fixed full width
    height: 350,  // Adjust height as needed
    width: 600,
    resizeMode: "contain",
  },
  tab2Image: {
    width: width, // Fixed full width
    height: 300,  // Adjust height as needed
    width: 500,
    resizeMode: "contain",
  },
});

