import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {

    return ( 
        <Pressable onPress ={props.onDeleteGoal.bind(this,props.i)} android_ripple={{color:'lightgray' } } >
            <View style={styles.item }>
               <Text key={props.i}>{props.text}</Text> 
            </View> 
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginTop: 15,
        backgroundColor: "lightgray",
    }
})

export default GoalItem;