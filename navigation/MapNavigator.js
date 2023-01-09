import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const Tab = createBottomTabNavigator();

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
