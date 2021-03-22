import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import firebase from "firebase";
import db from "./firebase.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //When the app loads, we need to listen to the database and fetch new todos as they get added/removed.

  useEffect(() => {
    //This code here... fires when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>To-do List</h1>
      <form>
        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo} >Add Todo</button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
