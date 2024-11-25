import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { s } from "react-native-wind";
import { StatusBar } from "expo-status-bar";
import TaskCard from "./TaskCard";
import SeeAllBtn from "./SeeAllBtn";
import Tags from "./Tags";
import SearchBar from "./SearchBar";

// HomeScreen component
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[s`text-red-400 text-2xl`, { fontFamily: "Poppins-Bold" }]}>
        Dash
      </Text>

      <SearchBar />
      <Tags />
      <SeeAllBtn />

      <TaskCard />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

// Styles outside the component to keep the code clean and organized
const styles = {
  container: [
    s`justify-center items-center mt-20 h-28`,
    { backgroundColor: "#f2f2f2", height: "200px" },
  ],
 
};

export default HomeScreen;
