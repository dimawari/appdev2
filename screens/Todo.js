import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";

export default function TodoScreen() {

  const [todo, setTodo] = useState("");
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  // ADD TODO
  const addTodo = () => {
    if (todo.trim() === "") {
      Alert.alert("Error", "Please enter a task.");
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      text: todo,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  // TOGGLE TODO
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    );

    setTodos(updatedTodos);
  };

  // DELETE TODO
  const deleteTodo = (id) => {
    Alert.alert("Delete Task", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Delete",
        onPress: () => {
          setTodos(todos.filter((item) => item.id !== id));
        }
      }
    ]);
  };

  // SEARCH FILTER
  const filteredTodos = todos.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

      <Text style={styles.title}>Todo List</Text>

      {/* SEARCH */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search task..."
        value={search}
        onChangeText={setSearch}
      />

      {/* ADD TODO */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task..."
          value={todo}
          onChangeText={setTodo}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* TODO LIST */}
      <ScrollView style={styles.list}>
        {filteredTodos.map((item) => (
          <View key={item.id} style={styles.todoItem}>

            {/* CHECK / TOGGLE */}
            <TouchableOpacity
              style={styles.todoTextContainer}
              onPress={() => toggleTodo(item.id)}
            >
              <Text
                style={[
                  styles.todoText,
                  item.completed && styles.completed
                ]}
              >
                {item.completed ? "☑ " : "☐ "}
                {item.text}
              </Text>
            </TouchableOpacity>

            {/* DELETE */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(item.id)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>

          </View>
        ))}

        {/* EMPTY STATE */}
        {filteredTodos.length === 0 && (
          <Text style={styles.emptyText}>No tasks found</Text>
        )}
      </ScrollView>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#f2f2f2"
    
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },

  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },

  inputRow: {
    flexDirection: "row",
    marginBottom: 10
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginRight: 10
  },

  addButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 8
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },

  list: {
    marginTop: 10
  },

  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8
  },

  todoTextContainer: {
    flex: 1
  },

  todoText: {
    fontSize: 16
  },

  completed: {
    textDecorationLine: "line-through",
    color: "gray"
  },

  deleteButton: {
    marginLeft: 10
  },

  deleteText: {
    color: "red",
    fontWeight: "bold"
  },

  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray"
  }

});