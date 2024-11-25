import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {s} from 'react-native-wind';

const Tags = () => {
  return (
    <View
        style={s`flex flex-row gap-x-4 gap-x-4 items-center justify-between w-full pl-8 pr-8 mt-5 mb-10`}
      >
        <View
          style={[s`flex-1 h-6 text-sm bg-purple-400 mr-1 ml-3 justify-center items-center rounded-lg`,{fontFamily:"Poppins-Light"}]}
        >
          <Text style={[s`text-white text-xs`,{fontFamily:"Poppins-Light"}]}>Recent</Text>
        </View>
        <View
          style={[s`flex-1 h-6 text-sm bg-green-400 mr-1 justify-center items-center rounded-lg`,{fontFamily:"Poppins-Light"}]}
        >
          <Text style={[s`text-white text-xs`,{fontFamily:"Poppins-Light"}]}>Completed</Text>
        </View>
        <View
          style={[s`flex-1 text-sm h-6 bg-yellow-400 justify-center items-center rounded-lg mr-3`,{fontFamily:"Poppins-Light"}]}
        >
          <Text style={[s`text-white text-xs`,{fontFamily:"Poppins-Light"}]}>Undone</Text>
        </View>
      </View>

  )
}

export default Tags

const styles = StyleSheet.create({})