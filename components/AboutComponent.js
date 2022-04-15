import React, { Component } from 'react';
import { View, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


function RenderItem({item}) {
    if (item) {
        return (
            <Card 
                featuredTitle = { item.name }
            >
                <Text style={{margin: 10}}>
                    { item.description }
                </Text>
            </Card>
        );
    }
    return <View />;
}


class About extends Component {

 
    static navigationOptions = {
        title: 'About Us'
    }

    render() {

        return(
            <ScrollView>

            </ScrollView>
        );
    }

}

export default About;
