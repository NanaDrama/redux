import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/reducers';

function TaskListScreen({ navigation }) {
  const [taskText, setTaskText] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now().toString(),  text: taskText, completed: false }));
    setTaskText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text
              style={[styles.taskText, item.completed && styles.completed]}
              onPress={() => navigation.navigate('TaskDetail', { task: item })}
            >
              {item.text}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  input: { borderColor: '#ddd', borderWidth: 1, padding: 10, marginVertical: 10 },
  taskContainer: { marginVertical: 5 },
  taskText: { fontSize: 18 },
  completed: { textDecorationLine: 'line-through', color: 'gray' },
});

export default TaskListScreen;
