import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { s } from 'react-native-wind';  // Importing 's' from 'react-native-wind'

const AddScreen = () => {
  return (
    <SafeAreaView style={[s`justify-center items-center mt-14`, { backgroundColor: '#f2f2f2' }]}>
      <Text style={[s`text-red-400 text-2xl`, { fontFamily: 'Poppins-Bold', color:"red" }]}>Dash</Text>
    </SafeAreaView>
  );
};

export default AddScreen;
