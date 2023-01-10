import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList, Image } from 'react-native'
import { Icon, Avatar, Badge } from 'react-native-elements'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import Feed from "../components/Feed"
import SubscriptionCard from '../components/SubscriptionCard'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../global/styles'
import {styles as Styles} from "./CommuteListingScreen"

const { width, height } = Dimensions.get('screen')

const SubscribedScreen = ({ data }) => {
  return (

    <View style={{flex: 1, width: width, height: height }}>
     <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        colors={[theme.colors.blue[8], theme.colors.blue[10]]}
        style={{width: width, height: height}}
      >
    <View>
    <HomeHeader />
    </View>
    
   <View style={{width: width, height: 400, top: -75}}>
   <SubscriptionCard />
   </View>
     <Feed />


     </LinearGradient>
    </View>
  )
}

export default SubscribedScreen

const styles = StyleSheet.create({})