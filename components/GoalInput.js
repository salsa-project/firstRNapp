import {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Image, Modal} from 'react-native'


function GoalInput(props){
    
  const [entredGoalText, setEntredGoalText] = useState('')

  function goalInputHandler(txt){
    setEntredGoalText(txt)
  }

  function addGoalHandler(){
    props.onAddGoal(entredGoalText);
    setEntredGoalText('')
  }

  return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputWraper}>
            <Image style={styles.img} source={require('../app/assets/images/img2.png')} />
            <TextInput style={styles.input} onChangeText={goalInputHandler} value={entredGoalText} placeholder='Your Course Goal!' />
            <View style={styles.btnWraper}>
                <Button title='Add Goal' onPress={addGoalHandler} />
                <Button title='Cancel' color={'#f06543'} onPress={props.onClose} />
            </View>
        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputWraper:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    img:{
        height: 100,
        width: 100,
    },
    input:{
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 16,
        borderColor: 'lightgray'
    },
    btnWraper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
})

export default GoalInput;