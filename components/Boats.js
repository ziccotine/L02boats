import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boats  = ({title, description, poster})=> {
    return (
        <View>
            <Text>GetABoat - For Sale</Text>
            <Icon name="sailboat" size={30} color="#B23B23"/>
            <Text style={{fontSize: 30}}>{title}</Text>
            <Text>{description}</Text>
            <Image source={poster} style={{width:400,height:500}}/>
        </View>
    );
};

export default Boats;
