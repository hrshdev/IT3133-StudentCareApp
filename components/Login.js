import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { students } from "../data/StudentsDb";
import Header from "./Header";

export default function Login({ navigation }) {
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState("");
    const [showpwd, setShowpwd] = useState(false);

    const handleLogin = () => {
        if (!name || !pwd) {
            setError("Please check your username or password");
            return;
        }
        const user = students.find(
            (student) => student.username === name && student.password === pwd
        );
        if (user) {
            setError("");
            navigation.navigate("MainTab", { user });
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.flexContainer}
                >
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                            <View style={styles.header}>
                                <Header />
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={styles.title}>
                            <Text variant="displaySmall" style={styles.titleText}>
                                STUDENT LOGIN
                            </Text>
                        </View>

                        <View style={styles.body}>
                            <View style={styles.input}>
                                <TextInput
                                    label="Username"
                                    mode="outlined"
                                    value={name}
                                    onChangeText={setName}
                                />
                            </View>

                            <View style={styles.input}>
                                <TextInput
                                    label="Password"
                                    mode="outlined"
                                    secureTextEntry={!showpwd}
                                    value={pwd}
                                    onChangeText={setPwd}
                                    right={
                                        <TextInput.Icon
                                            icon={showpwd ? "eye-off" : "eye"}
                                            onPress={() => setShowpwd(!showpwd)}
                                            color={showpwd ? "#000" : "#000"}
                                        />
                                    }
                                />
                            </View>

                            {error ? <Text style={styles.errorText}>{error}</Text> : null}

                            <View style={styles.input}>
                                <Button mode="contained" onPress={handleLogin}>
                                    Login
                                </Button>
                            </View>
                        </View>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>UOV © 2024</Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    flexContainer: {
        flex: 1, 
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    titleText: {
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
    },
    header: {
        flex: 3,
    },
    body: {
        marginBottom: 20,
        flex: 5,
        width: "100%",
    },
    footer: {
        backgroundColor: "#4a148c",
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: 10,
    },
    footerText: {
        color: '#fff',
    },
    input: {
        marginBottom: 10,
    },
    errorText: {
        color: "red",
        textAlign: "center",
        marginBottom: 10,
    },
});