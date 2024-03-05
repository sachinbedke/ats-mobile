import React from 'react'
import { useState, useEffect } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { Avatar, Button, Card, MD3Colors, Text } from 'react-native-paper';
import { useLoginMutation } from '../redux/userApi';

const Login = ({ navigation }) => {
    const [singin, { isSuccess }] = useLoginMutation()

    const [userData, setUserData] = useState({
        email: "sachinbedke88@gmail.com",
        password: "Sa5431"
    })
    useEffect(() => {
        if (isSuccess) {

            navigation.navigate("home")
        }
    }, [isSuccess])
    return <View style={[styles.container, { backgroundColor: MD3Colors.primary90 }]}>
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" />
            <Card.Content>
                <View style={{ gap: 15 }}>
                    <TextInput value={userData.email}
                        onChangeText={val => setUserData({ ...userData, email: val })}
                        mode="outlined" placeholder='Enter Email' />
                    <TextInput value={userData.password}
                        onChangeText={val => setUserData({ ...userData, password: val })}
                        secureTextEntry mode="outlined" label="Enter password" placeholder='Enter Password' />
                    <Button onPress={e => singin(userData)} mode='contained'>Login</Button>

                </View>
            </Card.Content>

        </Card>
    </View>
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    }
})