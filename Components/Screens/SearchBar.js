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


const SearchBar = () => {

     // Function to handle search icon click
  const handleSearchClick = () => {
    console.log("Search icon clicked!");
  };


  return (
    <View style={styles.searchContainer}>
        <TouchableOpacity
          activeOpacity={0.6} // Opacity effect when pressed
          onPress={handleSearchClick}
        >
          <Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Search item"
          placeholderTextColor="#aaa"
        />
      </View>

  )
}

export default SearchBar

// Styles outside the component to keep the code clean and organized
const styles = {
    container: [
      s`justify-center items-center mt-20 h-28`,
      { backgroundColor: "#f2f2f2", height: "200px" },
    ],
    title: [s`text-red-300 text-xl`, { fontFamily: "Poppins-Bold" }],
  
    searchContainer: s`
      flex-row items-center 
      bg-Highlight p-2 pl-3
      rounded-2xl mt-16 shadow-md
      ml-9 mr-9
    `,
    icon: s`mr-3 ml-3`,
    input: [
      s`flex-1 text-sm text-gray-500 mt-1`,
      { fontFamily: "Poppins-Medium" },
    ],
  };
  