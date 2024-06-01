import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';

const categories = [
  {
    image: require('./assets/coding.png'),
    title: 'Code',
    tasks: '12 Tasks'
  },
  {
    image: require('./assets/cooking.png'),
    title: 'Cook',
    tasks: '12 Tasks'
  },
  {
    image: require('./assets/reading.png'),
    title: 'Read',
    tasks: '5 Tasks'
  },
  {
    image: require('./assets/exercise.png'),
    title: 'Exercise',
    tasks: '3 Tasks'
  },
  {
    image: require('./assets/dancing.png'),
    title: 'Dance',
    tasks: '4 Tasks'
  },
  {
    image: require('./assets/running.png'),
    title: 'Run',
    tasks: '6 Tasks'
  },
  {
    image: require('./assets/sleeping.png'),
    title: 'Sleep',
    tasks: '8 Tasks'
  },
  {
    image: require('./assets/praying.png'),
    title: 'Pray',
    tasks: '2 Tasks'
  }
];

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        style={styles.input}
        placeholder="New Task"
        placeholderTextColor="#FFFFFF"
        value={taskName}
        onChangeText={setTaskName}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([
    { name: 'Mobile App Development', category: 'Code' },
    { name: 'Web Development', category: 'Code' },
    { name: 'Push Ups', category: 'Exercise' },
    { name: 'Exercise', category: 'Exercise' },
    { name: 'Study', category: 'Read' },
    { name: 'Data Structures', category: 'Read' },
    { name: 'Software Engineering', category: 'Code' },
    { name: 'Info Modelling', category: 'Read' },
    { name: 'Projects', category: 'Code' },
    { name: 'Cyber Security', category: 'Read' },
    { name: 'Canva', category: 'Design' },
    { name: 'UI/UX', category: 'Design' },
    { name: 'Mock-Up Text', category: 'Write' },
    { name: 'Timetable', category: 'Plan' },
    { name: 'After School Activities', category: 'Misc' },
  ]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, category: 'Uncategorized' }]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, Righteous</Text>
          <Text style={styles.tasks}>20 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('./assets/Profile Image.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#FFFFFF" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('./assets/Filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Image style={styles.categoryImage} source={category.image} />
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryTasks}>{category.tasks}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <AddTask addTask={addTask} />

      <View style={styles.ongoingTasks}>
        <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
        {tasks.map((task, index) => (
          <TouchableOpacity key={index} style={styles.taskCard}>
            <Text style={styles.taskText}>{task.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#330033',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tasks: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  filterButton: {
    padding: 10,
  },
  profileIcon: {
    width: 40,
    height: 70,
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 5,
    color: '#FFFFFF',
  },
  filterIcon: {
    width: 34,
    height: 34,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 16,
    marginVertical: 8,
    color: '#FFFFFF',
  },
  horizontalScroll: {
    paddingLeft: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  addTaskContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  input: {
    flex: 1,
    height: 30,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#FFFFFF',
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#5cb85c',
    padding: 8,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  ongoingTasks: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  taskCard: {
    padding: 25,
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    height: 100,
  },
  taskText: {
    fontSize: 20,
  },
});

export default App;
