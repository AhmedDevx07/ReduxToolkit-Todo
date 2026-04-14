import { useSelector } from "react-redux";
import TodoItem from "../../components/TodoItem";

export default function TodoList() {
  const { todos, filter } = useSelector((state) => state.todo);

  const filtered = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  if (!filtered.length) return <p className="text-gray-500 text-sm">No todos</p>;

  return filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />);
}
