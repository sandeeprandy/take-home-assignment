"use client";

import { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Image, Animated, TouchableOpacity, Dimensions } from "react-native";
import { Text, Avatar, IconButton } from "react-native-paper";

const { width } = Dimensions.get("window");

const Profile = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scrollX = useRef(new Animated.Value(0)).current;

  const images = [
    require("../../assets/images/profile.png"), // Replace with actual image path
    require("../../assets/images/profile.png"), // Replace with actual image path
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setImageIndex((prev) => (prev + 1) % images.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: -width,
        duration: 10000, // Adjust speed of scrolling
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.backgroundWrapper}>
        <Animated.Image
          source={require("../../assets/images/image1.png")}
          style={[styles.backgroundImage, { transform: [{ translateX: scrollX }] }]}
        />
        <Animated.Image
          source={require("../../assets/images/image2.png")}
          style={[styles.backgroundImage, { transform: [{ translateX: Animated.add(scrollX, width) }] }]}
        />
      </View>

      <View style={styles.headerIcons}>
        <IconButton icon="share-variant" iconColor="#fff" size={24} onPress={() => {}} style={styles.iconButton} />
        <IconButton icon="cog" iconColor="#fff" size={24} onPress={() => {}} style={styles.iconButton} />
      </View>

      <View style={styles.avatarBorder}>
        <Image size={90} source={images[imageIndex]} style={styles.avatar} />
      </View>

      <View style={styles.userInfoContainer}>
        <View style={styles.usernameContainer}>
          <Text variant="titleLarge" style={styles.username}>
            @theo_from_hsr
          </Text>
          <View style={styles.verifiedBadge}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <Text variant="bodyMedium" style={styles.location}>
            🇮🇳 INDIA
          </Text>
        </View>

        <Text variant="bodyMedium" style={styles.bio}>
          18 y/o with high ambitions. want to build cool stuff!
        </Text>

        <View style={styles.followingContainer}>
          <IconButton icon="account-group" iconColor="#fff" size={18} style={styles.followingIcon} />
          <Text variant="bodyMedium" style={styles.following}>2</Text>
          <Text variant="bodySmall" style={styles.followingLabel}>FOLLOWING</Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>EDIT PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#1E0A2E",
    position: "relative",
    paddingTop: 10,
    paddingBottom: 30,
  },
  backgroundWrapper: {
    position: "absolute",
    width: "200%", // To cover both images
    height: "100%",
    flexDirection: "row",
  },
  backgroundImage: {
    width: width,
    height: "110%",
    resizeMode: "cover",
    position: "absolute",
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 10,
  },
  iconButton: {
    margin: 0,
  },
  avatarBorder: {
    width: 80,
    marginBottom: 10, 
   
   
    borderRadius: 0,
    padding: 2,
  },
  avatar: {
    backgroundColor: "#333",
    alignItems: "flex-start",
    borderRadius: 0
  },
  userInfoContainer: {
    alignItems: "flex-start",
    width: "100%",
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  verifiedBadge: {
    backgroundColor: "green",
    borderRadius: 50,
    width: 18,
    height: 18,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 5,
  },
  checkmark: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  locationContainer: {
    marginBottom: 10,
  },
  location: {
    color: "white",
  },
  bio: {
    color: "white",
    textAlign: "flex-start",
    marginHorizontal: 10,
    marginBottom: 15,
  },
  followingContainer: {
    flexDirection: "row",
    alignItems: "start",
    marginBottom: 20,
  },
  followingIcon: {
    margin: 0,
    padding: 0,
  },
  following: {
    color: "white",
    fontWeight: "bold",
    marginRight: 5,
  },
  followingLabel: {
    color: "#999",
    textTransform: "uppercase",
  },
  editButton: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  editButtonText: {
    color: "#CCC",
    fontSize: 12,
  },
});

export default Profile;
