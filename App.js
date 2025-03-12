import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TextInput, Button, View, Text} from 'react-native';
import TaskItem from './components/ManageTasks'; 

export default function App() {
  const [tasks, setTasks] = useState([
    { key: "1", title: "Clean Room", completed: false },
    { key: "2", title: "Do Laundry", completed: false },
    { key: "3", title: "Walk Dog", completed: false }
  ]);

  const [inputText, setInputText] = useState(""); 

  const addTask = () => {
    if (inputText.trim()) {
      setTasks([
        ...tasks,
        {
          key: (tasks.length + 1).toString(),
          title: inputText,
          completed: false
        }
      ]);
      setInputText("");  
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskList}>
      <Text style={styles.heading}>To Do List</Text>
        <View>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem 
                task={item} 
              />
            )}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a new task"
            value={inputText}
            onChangeText={setInputText}
          />
          <Button title="Add Task" onPress={addTask} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f5",
    justifyContent: "flex-start",
    
  },
  taskList: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 10,
    flex: 1,
    marginRight: 10,
  },

});
