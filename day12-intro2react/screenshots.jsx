<div className="container">
  <h1>My To-Do List</h1>
  <button onClick={handleClick}>Add Task</button>
</div>;

// This breaks — can't return multiple elements
function TaskList() {
  return (
    <>
      <h2>My Tasks</h2>
      <ul>...</ul>
    </>
  );
}

// Instead, Use a Fragment as an invisible wrapper
function TaskList() {
  return (
    <>
      <h2>My Tasks</h2>
      <ul>...</ul>
    </>
  );
}

// Or the explicit version:
import { Fragment } from "react";
<Fragment>...</Fragment>;

function TodoList() {
  return (
    <div>
      <h1>My Tasks</h1>
      <p>Nothing here yet!</p>
    </div>
  );
}

function Task(props) {
  return <li>{props.text}</li>;
}

<>
  // Usage:
  <Task text="Finish homework" />
  <Task text="Do laundry" />
</>;

{
  text: "Finish homework";
}

function Task({ text }) {
  return <li>{text}</li>;
}

// React passes in this object:
const props = { text: "Finish homework" };

// Destructuring pulls 'text' out:
const { text } = props;

// Now you can use 'text' directly
console.log(text); // "Finish homework"

const tasks = ["Buy groceries", "Walk dog", "Study React"];
// .map() loops through each task and returns JSX for each one
return (
  <ul>
    <li key={0}>Buy groceries</li>,<li key={1}>Walk dog</li>,
    <li key={2}>Study React</li>
  </ul>
);

const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers; // Skip the second item

const person = {
  name: "Alex",
  age: 20,
  major: "CS",
};

// Without destructuring
const name = person.name;
const age = person.age;

// With destructuring
const { name, age } = person;

// Without destructuring
function Task(props) {
  return <li>{props.text}</li>;
}

// With destructuring
function Task({ text }) {
  return <li>{text}</li>;
}

// Multiple props
function Task({ text, completed, priority }) {
  return <li>{text}</li>;
}
