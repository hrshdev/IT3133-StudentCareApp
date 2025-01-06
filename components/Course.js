import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Divider, Text } from 'react-native-paper';
import { courses } from '../data/StudentsDb';
import Header from './Header';

export default function Course({ route }) {
    const user = route.params?.user;
    const CourseDetail = courses.find(course => user.course_id === course.id);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>

            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.body}>
                    <Card style={styles.card}>
                        <Card.Content>
                            <View style={styles.overview}>
                                <Text variant="displaySmall">{CourseDetail.name}</Text>
                                <Text>Code: {CourseDetail.course_code} | Dept: {CourseDetail.department}</Text>
                            </View>
                            <Divider style={styles.divider}/>
                            <Text style={styles.bold}>Course Information</Text>
                            <Text>Code: {CourseDetail.course_code}</Text>
                            <Text>Department: {CourseDetail.department}</Text>
                            <Text>Duration: {CourseDetail.duration}</Text>
                            <Text>Description: {CourseDetail.description}</Text>
                        </Card.Content>
                        <Divider style={styles.divider}/>
                    </Card>
                    
                </View>
                
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>UOV © 2024</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        width: '90%',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        elevation: 4,
        borderRadius: 8,
        padding: 10,
    },
    overview: {
        alignItems: 'center',
        marginBottom: 20,
    },
    bold: {
        fontWeight: 'bold',
        marginBottom: 10,
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
    divider:{
        marginTop: 10,
        marginBottom: 10,
    }
});