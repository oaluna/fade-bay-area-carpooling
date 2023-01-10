import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import NavOptions from "../components/NavOptions";

const Tab = createStackNavigator();

const MapNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="NavigateCard" component={NavigateCard} />
            <Tab.Screen name="RideOptionsCard" component={RideOptionsCard} />
    
        </Tab.Navigator>
    );
}

export default MapNavigator;
