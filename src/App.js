import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoCreate, TodoDelete, TodoApiCreate } from "./redux/actions/todo_actions";
import "./App.css";
import axios from "axios";

function App() {
	let dispatch = useDispatch();
	const [value, setValue] = useState("");

	let dummydata = { name: "Tenali Ramakrishna", gender: "male", email: "hiweareusingfortest@test.com", status: "active" };

	let createdTodo = useSelector((state) => state.Todo);

	const setValuesToAction = () => {
		//dispatch(TodoCreate(value));
		dispatch(TodoApiCreate(dummydata));
	};

	const setDelteValuesToAction = () => {
		console.log(createdTodo["create"]);
		const findIndexValue = (data) => data === value;
		let IndexValue = createdTodo["create"].findIndex(findIndexValue);
		dispatch(TodoDelete(IndexValue));
	};

	console.log(createdTodo);

	const fetchData = () => {
		// axios
		// 	.get("https://fakestoreapi.com/products")
		// 	.then(function (response) {
		// 		console.log(response.data);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<input type="text" onChange={(e) => setValue(e.target.value)} />
				<button onClick={setValuesToAction}>submit</button>
				<button onClick={setDelteValuesToAction}>Delete</button>
			</header>
		</div>
	);
}

export default App;
