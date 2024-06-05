/*
// Compare object titles alphabetically (case-insensitive)
const compareByTitle = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = {
  // return the list of todo lists sorted by completion status and title.
  sortTodoLists(todoLists) {
    let undone = todoLists.filter(todoList => !todoList.isDone());
    console.log("The value of undone is ");
    console.log(undone); // TodoList { id: 5, title: 'Grocery Checklist', todos: [] }
    let done = todoLists.filter(todoList => todoList.isDone());
    console.log("The value of done is ");
    console.log(done);
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
    return [].concat(undone, done);
  },

  // sort a list of todos
  sortTodos(todoList) {
    let undone = todoList.todos.filter(todo => !todo.isDone());
    console.log("The value of undone in todos is ")
    console.log(undone);
    let done = todoList.todos.filter(todo => todo.isDone());
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
    return [].concat(undone, done);
  },
};
*/

// Compare object titles alphabetically (case insensitive)
const compareByTitle = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = {
  // return the list of todo lists sorted by completion status and title.
  sortTodoLists(todoLists) {
    let undone = todoLists.filter(todoList => !todoList.isDone());
    console.log("The value of undone in todoLists is ");
    console.log(undone);
    let done = todoLists.filter(todoList => todoList.isDone());
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
    return [].concat(undone, done);
  },

  // return the list of todos in the todo list sorted by completion status and
  // title.
  sortTodos(todoList) {
    let undone = todoList.todos.filter(todo => !todo.isDone());
     console.log("The value of undone in todos is ");
    console.log(undone);
    let done = todoList.todos.filter(todo => todo.isDone());
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
    return [].concat(undone, done);
  },
};