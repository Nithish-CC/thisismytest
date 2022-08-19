import { Todo } from "../types/redux-types";
import axios from "axios";

export const TodoCreate = (values) => async (dispatch) => {
	try {
		axios.defaults.headers.common["Authorization"] = `Bearer `;
		let data = {};
		const { data: dataValues } = await axios.get("https://fakestoreapi.com/products");
		console.log(dataValues);
		dispatch({
			type: Todo.SET_TODO_CREATE,
			payload: dataValues,
		});
	} catch (error) {}
};

export const TodoApiCreate = (values) => async (dispatch) => {
	try {
		axios.defaults.headers.common["Authorization"] = `Bearer 8e508d9170920a103f384c3ae44a629a1f032f224694712db1d37e670c9828c1`;
		const { data: dataValues } = await axios.post("https://gorest.co.in/public/v2/users", values);
		console.log(dataValues);
		dispatch({
			type: Todo.SET_TODO_CREATE,
			payload: dataValues,
		});
	} catch (error) {}
};

export const TodoDelete = (values) => {
	console.log(values);
	return {
		type: Todo.SET_TODO_DELETE,
		payload: values,
	};
};
