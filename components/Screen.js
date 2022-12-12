import React from 'react'
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native'
import Constants from 'expo-constants'
import { colors } from "../global/styles"

const { width, height } = Dimensions.get('screen')

export default function Screen({children, style }) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    view: {
        backgroundColor: colors.darkblue,
        width: width,
        height: height,
        paddingHorizontal: 15,
        // flex: 1
    }
})
