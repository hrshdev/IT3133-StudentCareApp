import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, DataTable, Divider, Text } from 'react-native-paper';
import { courses, marks, subjects } from '../data/StudentsDb';
import Header from './Header';

export default function Subjects({ route }) {
    const user = route.params?.user;

    const subjectDetail = subjects.filter(s => user.course_id === s.course_id);
    const marksDetail = marks.filter(m => user.id === m.student_id);
    const CourseDetail = courses.find(c => user.course_id === c.id);

    const totalMarks = marksDetail.reduce((sum, mark) => sum + mark.marks, 0);
    const averageMarks = marksDetail.length > 0 ? (totalMarks / marksDetail.length).toFixed(2) : 0;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>

            <View style={styles.body}>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.overview}>
                            <Text variant="displaySmall">{CourseDetail?.name}</Text>
                            <Text>{subjectDetail.length} Subjects | Average: {averageMarks}</Text>
                        </View>

                        <Divider />

                        <Text style={styles.bold}>Marks Information</Text>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Subject</DataTable.Title>
                                <DataTable.Title numeric>Marks</DataTable.Title>
                            </DataTable.Header>

                            {subjectDetail.map(subject => {
                                const markEntry = marksDetail.find(m => m.subject_id === subject.id && m.student_id === user.id);
                                return (
                                    <DataTable.Row key={subject.id}>
                                        <DataTable.Cell>{subject.name}</DataTable.Cell>
                                        <DataTable.Cell numeric>{markEntry ? markEntry.marks : 'N/A'}</DataTable.Cell>
                                    </DataTable.Row>
                                );
                            })}
                        </DataTable>
                    </Card.Content>
                </Card>
            </View>

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
    },
    overview: {
        alignItems: 'center',
        marginBottom: 20,
    },
    bold: {
        fontWeight: 'bold',
        marginVertical: 10,
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
});