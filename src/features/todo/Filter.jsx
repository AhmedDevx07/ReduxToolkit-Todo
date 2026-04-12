import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./todoSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todo.filter);

  const filters = ["all", "pending", "completed"];

  return (
    <div className="flex bg-black/20 p-1 rounded-xl mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          className={`flex-1 py-1.5 text-sm font-medium capitalize rounded-lg transition-all ${
            activeFilter === f ? "bg-indigo-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}