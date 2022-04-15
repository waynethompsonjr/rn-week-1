import React, { Component } from 'react';
import { View, Platform, ScrollView } from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler'; // Where did this come from?
import { Card } from 'react-native-elements';


function RenderItem() {

        return (
            <Card wrapperStyle={{margin: 20}}
                featuredTitle='Contact Information'
            >
                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text style={{marginBottom: 10}}>U.S.A.</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>   
            </Card>
        );
}

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem />
            </ScrollView>
        );
    }
}

export default Contact;
