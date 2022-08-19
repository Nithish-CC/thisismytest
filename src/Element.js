
import { useSelector } from "react-redux";
import "./App.css";
function Element() {

  let createdTodo = useSelector((state) => state.Todo);
  console.log(createdTodo,"====");
  
  return (
    <div className="App">
    </div>
  );
}

export default Element;
