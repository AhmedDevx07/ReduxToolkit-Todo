import { useDispatch } from "react-redux";

import { useState } from "react";
import { Check, Trash2, Edit3, Save } from "lucide-react";
import { removeTodo, toggleTodo, updateTodo } from "../features/todo/todoSlice";
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <div className="group flex items-center justify-between bg-white/5 border border-white/5 p-4 rounded-2xl mb-3 hover:bg-white/10 transition-all backdrop-blur-sm">
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            todo.completed
              ? "bg-green-500 border-green-500"
              : "border-gray-500 hover:border-indigo-400"
          }`}
        >
          {todo.completed && <Check size={14} className="text-white" />}
        </button>

        {editing ? (
          <input
            className="bg-transparent border-b border-indigo-500 outline-none text-white w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
        ) : (
          <span
            className={`text-gray-200 transition-all ${todo.completed ? "line-through text-gray-500 opacity-60" : ""}`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {editing ? (
          <button
            onClick={() => {
              dispatch(updateTodo({ id: todo.id, text }));
              setEditing(false);
            }}
            className="text-indigo-400 hover:text-white transition-colors"
          >
            <Save size={18} />
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Edit3 size={18} />
          </button>
        )}
        <button
          onClick={() => dispatch(removeTodo(todo.id))}
          className="text-gray-400 hover:text-red-400 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
