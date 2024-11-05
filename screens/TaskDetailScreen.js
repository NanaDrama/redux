import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTaskComplete } from '../redux/reducers';

function TaskDetailScreen({ route }) {
  const { task } = route.params;
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{ fontSize: 20 }}>{task.text}</Text>
      <Text>Status: {task.completed ? 'Completed' : 'Incomplete'}</Text>
      <Button title="Toggle Complete" onPress={() => dispatch(toggleTaskComplete(task.id))} />
    </View>
  );
}

export default TaskDetailScreen;
