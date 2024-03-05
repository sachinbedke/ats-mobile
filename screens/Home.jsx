import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper';
import { BottomNavigation, Card, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { useGetAllJobsQuery, useGetAllUsersQuery, useGetProfileQuery } from '../redux/userApi';
import { useSelector } from "react-redux";
import { Icon, MD3Colors, PaperProvider, Portal, Snackbar, Text } from 'react-native-paper';
import { Alert, Modal, Pressable } from 'react-native';



const Homes = () => {
    return <ScrollView
        contentContainerStyle={{}}
    >

        <Card>
            <Card.Content>
                <Text variant="titleLarge">Card titlelorem is the testing sdfo te the ar ihe ahjei snf siudfnksdf </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            </Card.Actions>
        </Card>
        <Card>
            <Card.Content>
                <Text variant="titleLarge">Card titlelorem is the testing sdfo te the ar ihe ahjei snf siudfnksdf </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            </Card.Actions>
        </Card>
        <Card>
            <Card.Content>
                <Text variant="titleLarge">Card titlelorem is the testing sdfo te the ar ihe ahjei snf siudfnksdf </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            </Card.Actions>
        </Card>
        <Card>
            <Card.Content>
                <Text variant="titleLarge">Card titlelorem is the testing sdfo te the ar ihe ahjei snf siudfnksdf </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            </Card.Actions>
        </Card>
        <Card>
            <Card.Content>
                <Text variant="titleLarge">Card titlelorem is the testing sdfo te the ar ihe ahjei snf siudfnksdf </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            </Card.Actions>
        </Card>
        <Card>
            <Card.Content>
                <Text variant="titleLarge">Card titlelorem is the testing sdfo te the ar ihe ahjei snf siudfnksdf </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            </Card.Actions>
        </Card>
        <Card>
            <Card.Content>
                <Text variant="titleLarge">Card titlelorem is the testing sdfo te the ar ihe ahjei snf siudfnksdf </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            </Card.Actions>
        </Card>
        <Card>
            <Card.Content>
                <Text variant="titleLarge">Card titlelorem is the testing sdfo te the ar ihe ahjei snf siudfnksdf </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>

            </Card.Actions>
        </Card>
    </ScrollView>
}

const NetworkRoute = () => {

    const { data } = useGetAllUsersQuery()
    console.warn(data)
    return <ScrollView contentContainerStyle={{}} >

        <Text>gksdgksjg</Text>
    </ScrollView>
}
const PostRoute = () => {
    return <ScrollView contentContainerStyle={{}} >

        <Text>gksdgksjg</Text>
    </ScrollView>
}
const NotificationRoute = () => {
    return <ScrollView

        contentContainerStyle={{}}
    >

        <Text>gksdgksjg</Text>
    </ScrollView>
}
const JobsRoute = () => {
    const { data } = useGetAllJobsQuery()
    const [allJobsData, setAllJobsData] = useState([])
    const [show, setShow] = useState(false)
    const [selectedJob, setSelectedJob] = useState({})

    const containerStyle = { backgroundColor: 'white', padding: 20 };

    useEffect(() => {
        if (data) {
            setAllJobsData(data)
        }
    }, [data])
    return <ScrollView>
        <FlatList
            data={allJobsData}
            renderItem={({ item }) => {
                return <Card onPress={e => { setShow(true), setSelectedJob(item) }} style={{ backgroundColor: "white", paddingLeft: 4, paddingRight: 5 }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 20, color: "black", width: 250 }} variant="displayLarge" >{item.jobTitle}</Text>
                            <Icon source="bell" size={30} />
                        </View>
                        <Text style={{ fontSize: 15 }}>{item.company}</Text>
                        <Text style={{ fontSize: 15 }}>{item.location}</Text>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', marginVertical: 20 }} />
                    </Card.Content>
                </Card>
            }}
        />

        <PaperProvider>

            <Modal style={{ margin: 300, marginTop: 20 }} visible={show} onDismiss={e => setShow(false)} contentContainerStyle={containerStyle}>
                <ScrollView>
                    <Card style={{ padding: 10, marginTop: 10, backgroundColor: "white" }}>

                        <Text style={{ fontSize: 25, fontFamily: "sans" }}>{selectedJob && selectedJob.jobTitle}</Text>
                        <Text style={{ fontSize: 15, paddingRight: 5 }}>{selectedJob.company}{selectedJob.companyType}</Text>
                        <Text style={{ fontSize: 15 }}>{selectedJob.location}  </Text>

                        <Text variant='bodyMedium'>  <Icon source="camera" /> {selectedJob.jobType} . {selectedJob.jobFrom}</Text>
                        <Text variant='bodyMedium'>  <Icon source="camera" /> {selectedJob.companySize} employees</Text>
                        <Text variant='bodyMedium'>  <Icon source="camera" /> {selectedJob.skills} </Text>

                        <Button variant="contined"> Easy apply</Button><Button>save</Button>

                        <Text variant='bodyLarge'>Draft message to the hiring team with AI</Text>
                        <Text>{selectedJob.hrDescription}</Text>

                        <Text variant='titleLarge' style={{ marginTop: 15 }}>About the job</Text>
                        <Text>{selectedJob.jobDescription}</Text>
                        <Text variant='titleLarge' style={{ marginTop: 15 }}>Skills</Text>
                        <Text>{selectedJob.skillsDiscription}</Text>
                        <Text variant='titleLarge' style={{ marginTop: 15 }}>Qualification</Text>
                        <Text>{selectedJob.education}{selectedJob.PreferredQualifications}</Text>
                        <Text variant='titleLarge' style={{ marginTop: 15 }}>Roles and Responsbilities</Text>
                        <Text>{selectedJob.Responsibilities}</Text>
                        <Text variant='titleLarge' style={{ marginTop: 15 }}>About Us</Text>
                        <Text>{selectedJob.companyDiscription}</Text>

                        <Button style={{ marginTop: 30 }} onPress={e => setShow(false)}>
                            Back
                        </Button>
                    </Card>
                </ScrollView>
            </Modal>


        </PaperProvider>

    </ScrollView >

}
const Home = ({ navigation }) => {
    const { user } = useSelector(state => state.user)
    console.warn(user.uid)

    const { data } = useGetProfileQuery(user.uid)
    console.warn(data);

    const [profile] = data
    // console.log(profile);
    const [index, setIndex] = useState(0)
    const [show, setShow] = useState(false)
    const [routes] = useState([
        { key: 'Homes', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'network', title: 'Network', focusedIcon: 'network', unfocusedIcon: 'network-outline' },
        { key: 'post', title: 'Post', focusedIcon: 'plus-circle', unfocusedIcon: "plus-circle-outline" },
        { key: 'notification', title: 'Notification', focusedIcon: 'message', unfocusedIcon: "message-outline" },
        { key: 'jobs', title: 'Jobs', focusedIcon: 'album', unfocusedIcon: "album" },
    ])


    const renderScene = BottomNavigation.SceneMap({
        Homes: Homes,
        network: NetworkRoute,
        post: PostRoute,
        notification: NotificationRoute,
        jobs: JobsRoute,

    });


    return <SafeAreaProvider>
        <Appbar.Header style={{ marginLeft: 10, marginRight: 10, position: "sticky" }}>
            <Text onPress={e => setShow(true)}>  <Avatar.Image size={40} source={require('../assets/IMG_20220618_144624.jpg')} /></Text>
            <TextInput style={{ width: 280, height: 35, backgroundColor: "#e0e0e0" }} placeholder='search' />
            <Appbar.Action icon="message" onPress={() => { }} />


        </Appbar.Header >
        <Modal style={{ margin: 300, marginTop: 20 }} visible={show} onDismiss={e => setShow(false)} >
            <ScrollView>

                <View style={styles.container}>
                    <Button onPress={e => setShow(false)} >X</Button>
                    <Text style={styles.name}>{profile.name}</Text>
                    <Text style={styles.skills}>{profile.skills}</Text>
                    <Text style={styles.skills}>{profile.company}.{profile.univrcity}</Text>
                    {/* Add more sections like experience, education, skills, etc. */}
                    <View style={{ display: 'flex', flexDirection: "row", gap: 4 }}>
                        <Button style={{ width: 140 }} mode="contained" >
                            Open to
                        </Button>
                        <Button style={{ width: 140 }} mode="outlined">
                            add section
                        </Button>
                        <Button style={{ width: 0 }} mode="outlined">
                            ...
                        </Button>
                    </View>
                    <View>
                        <Text style={{ marginTop: 5 }} variant="titleLarge">Exprerinace</Text>
                        <Text>{profile.company}{profile.location} </Text>
                        <Text>{profile.skills} </Text>
                    </View>
                    <View>
                        <Text style={{ marginTop: 5 }} variant="titleLarge">Education</Text>
                        <Text>{profile.univrcity}  {profile.qualification}</Text>
                        <Text>{profile.collage}  {profile.stream}</Text>
                    </View>
                </View>
            </ScrollView>
        </Modal>
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />

    </SafeAreaProvider >
}

export default Home

const styles = StyleSheet.create({
    container: {

        padding: 15,
    },

    name: {
        position: "relative",
        left: 0,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    headline: {
        fontSize: 18,
        fontStyle: 'italic',
        marginBottom: 10,
    },
    summary: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    skills: {
        fontSize: 18,

        marginBottom: 20,
    },
})