//import "expo-dev-client"

import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App() {

  const [courseGoals, setCourseGoals] = useState([])

  const [modalIsVisible, setModalIsVisible] = useState(false)
  
  function addGoalHandler(entredGoalText){
    setCourseGoals((currentCourseGoals)=> [...currentCourseGoals, entredGoalText])
    closeGoalInput();
  }

  function deleteGoalHandler(id){
    let newCourseGoals = courseGoals
    newCourseGoals.splice(id, 1)
    setCourseGoals([...newCourseGoals])
  }

  function displayGoalInput(){
    setModalIsVisible(true)
  }

  function closeGoalInput(){
    setModalIsVisible(false)
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Add New Goal' color="#f06543" onPress={displayGoalInput} />
        <GoalInput onAddGoal={addGoalHandler} onClose={closeGoalInput} visible={modalIsVisible}/>
        <View style={styles.listWraper}>
          <FlatList data={courseGoals} renderItem={itemData=>{
              return (
                <GoalItem i={itemData.index} text={itemData.item} onDeleteGoal={deleteGoalHandler} />
              )
            }} 
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  listWraper:{
    flex: 9,
  },
  
});

export default App;