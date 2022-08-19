import { Todo } from "../types/redux-types";
let todo_values = {
	todo: [],
};
export const TodoReducer = (values = todo_values, action) => {
	switch (action?.type) {
		case Todo.SET_TODO_CREATE:
			todo_values.todo.push(action.payload);
			let tempTodo = [...todo_values.todo];
			return { create: tempTodo };
		case Todo.SET_TODO_DELETE:
			if (todo_values && todo_values.hasOwnProperty("todo") && todo_values.todo && todo_values.todo.length) {
				let tempArr = [...todo_values.todo];
				tempArr.splice(action.payload, 1);
				return { create: [...tempArr] };
			}
		default:
			return { values: values };
	}
};
