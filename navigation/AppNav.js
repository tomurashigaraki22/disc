import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Sigunp";


function AppNav(){
    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNav;