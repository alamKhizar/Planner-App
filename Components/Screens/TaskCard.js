import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {s} from 'react-native-wind';


const TaskCard = () => {
  return (
    <View style={[s`flex justify-center items-center mt-3`]}>
    <View
      style={[
        s`bg-red-400 p-3 border-1 border-black w-72 h-72 rounded-2xl `,
      ]}
    >
      <Text
        style={[
          s`text-lg text-secondary`,
          { fontFamily: "Poppins-Medium" },
        ]}
      >
        1
      </Text>
    </View>
  </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({})