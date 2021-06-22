import React from 'react';
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // 5.0.0
// import { completeReu } from 'app';
//......

const Reunion = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <TouchableOpacity>
                <View>
                    <FontAwesome style={styles.icon} name="trash" size={27} color="#69D3E0" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        opacity: .93,
        height:70,
        borderRadius: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:15,
        // shadow
        shadowColor: "#C93780",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        width:40,
        height:40,
        backgroundColor: '#69D3E0',
        opacity: 0.4,
        borderRadius: 50,
        marginRight:10
    },
    itemText:{
        maxWidth:'80%',
    },
    icon:{
        paddingRight: 7,
    },
});

export default Reunion;