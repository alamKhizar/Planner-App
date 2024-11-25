import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {s} from 'react-native-wind';

const SeeAllBtn = () => {
  return (
    <View
    style={[
      s`flex flex-row justify-between font-bold w-full pr-10 pl-10 pt-2 items-center`,
      { fontFamily: "Poppins-Bold" },
    ]}
  >
    <Text
      style={[s`text-lg text-secondary`, { fontFamily: "Poppins-Bold" }]}
    >
      Ongoing
    </Text>
    <Text
      style={[s`text-lg text-secondary`, { fontFamily: "Poppins-Light" }]}
    >
      see all
    </Text>
  </View>
  )
}

export default SeeAllBtn

const styles = StyleSheet.create({})