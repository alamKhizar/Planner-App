import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import { Ionicons, FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons'; // Fixed import
import Modal from 'react-native-modal';  // Importing the modal for the bottom sheet

const TaskCard = () => {
  // State to control the modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={[s`flex flex-wrap justify-center items-center mt-3`]}>
      {/* TOP/ */}
      <View
        style={[s`bg-red-500 p-6 w-72 h-72 rounded-2xl `, { elevation: 5 }]}
      >
        <View style={s`flex flex-row justify-between items-center  w-full  h-8`}>
          <View
            style={[
              s`flex justify-center items-center w-28 h-7 rounded-xl `,
              { backgroundColor: "#ffffff70" },
            ]}
          >
            <Text
              style={[
                s`flex justify-center items-center text-sm text-white`,
                { fontFamily: "Poppins-Bold" },
              ]}
            >
              Tag
            </Text>
          </View>

          {/* Heart Icon */}
          <View style={[s`w-8 h-8  rounded-lg `]}>
            <TouchableOpacity onPress={toggleModal}>  {/* Trigger the modal when pressed */}
              <Ionicons name="heart" size={32} color={"#FFFFFF50"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* MIDDLE */}
        <Text style={[s`text-3xl text-white mt-5`, { fontFamily: "Syne-Bold" }]}>
          Capture pictures of sunset
        </Text>

        <Text
          style={[s`text-sm text-red-400 mb-3`, { fontFamily: "Poppins-Medium" }]}
        >
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
        </Text>

        {/* BOTTOM  */}
        <View style={s`flex flex-row justify-between items-center  w-full mt-3  h-8`}>
          <View
            style={[
              s`flex justify-center items-center w-28 h-7 rounded-xl `,
              { backgroundColor: "#48BB78" },
            ]}
          >
            <Text
              style={[
                s`flex justify-center items-center text-sm text-white`,
                { fontFamily: "Poppins-Bold" },
              ]}
            >
              Mark Done
            </Text>
          </View>

          <View
            style={[
              s`flex justify-center items-center w-28 h-7 rounded-xl `,
              { backgroundColor: "#ffffff30" },
            ]}
          >
            <Text
              style={[
                s`flex justify-center items-center text-sm text-white`,
                { fontFamily: "Poppins-Medium" },
              ]}
            >
              Edit
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Sheet Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}  // Close the modal when clicking outside
        animationIn="slideInUp"       // Animation when opening
        animationOut="slideOutDown"   // Animation when closing
      >
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>This is a test Bottom Sheet!</Text>
          <TouchableOpacity onPress={toggleModal} style={{ marginTop: 20 }}>
            <Text style={{ color: 'blue' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
