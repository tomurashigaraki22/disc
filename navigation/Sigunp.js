import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pay from '../assets/d.png'
import { AppContext } from "../Context";
import { useNavigation } from "@react-navigation/native";

function Signup() {
    const [email, setEmail] = useState("");
    const navigation = useNavigation()
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { login, signup } = useContext(AppContext)


    const handleLogin = () => {
        // Add your login logic here
        signup(email, password)
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textcont}>
                <Image
                source={Pay}
                style={styles.logoImage}
                />
            <Text style={styles.logo}>DiscreetNet</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="gray"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Re-enter Password"
                    placeholderTextColor="gray"
                    value={password2}
                    onChangeText={(text) => setPassword2(text)}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.new}>
                <Text style={styles.user}>Already Have An Account? Login </Text>
                <Text onPress={() => navigation.navigate('Login')} style={styles.here}>Here</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    here:{
        fontWeight: "bold",
        fontStyle: "italic"
    },
    user: {
        color: "gray",
        fontStyle: "italic"
    },
    new: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    textcont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
        marginRight: '1rem'
    },
    logo: {
        fontSize: 24,
        fontWeight: "bold",
    },
    logoImage: {
        width: 50,
        height: 50,
        marginBottom: 0,
        marginRight: 10,
        backgroundColor: 'transparent'
    },
    inputView: {
        width: "80%",
        backgroundColor: "#D3D3D3",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20,
    },
    inputText: {
        height: 50,
        color: "black",
    },
    loginBtn: {
        width: "30%",
        backgroundColor: "#000",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    loginText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default Signup;
