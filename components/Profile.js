import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, Divider, Text } from 'react-native-paper';
import Header from './Header';

export default function Profile({ route }) {
    const user = route.params?.user;

    return (
        <>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.header}>
                    <Header />
                </View>

                <View style={styles.body}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <View style={styles.container}>
                                <View style={styles.overview}>
                                    <Avatar.Image
                                        size={150}
                                        source={user.profile_pic}
                                        style={styles.avatar}
                                    />
                                    <Text variant='displaySmall'>{user.name}</Text>
                                    <Text>Age: {user.age} | Gender: {user.gender}</Text>
                                </View>
                                <Divider />

                                <View style={styles.info}>
                                    <Text style={styles.bold}>Contact Information</Text>
                                    <Text>Email: {user.email}</Text>
                                    <Text>Phone: {user.phone}</Text>
                                    <Text>Address: {user.address}</Text>
                                </View>

                                <Divider />

                                <View style={styles.bioInfo}>
                                    <Text style={styles.bold}>Biological Information</Text>
                                    <Text>Gender: {user.gender}</Text>
                                    <Text>Age: {user.age}</Text>
                                    <Text>Blood Group: {user.blood_group}</Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>UOV © 2024</Text>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    avatar: {
        marginBottom: 10,
    },
    overview: {
        alignItems: 'center',
        marginBottom: 20,
    },
    info: {
        marginTop: 10,
        marginBottom: 10,
    },
    bioInfo: {
        marginTop: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        width: '100%',
        elevation: 4,
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
    },
    footer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4a148c',
    },
    footerText: {
        color: '#fff',
    },
    scrollView: {
        flexGrow: 1,
    },
});