import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Plus } from "lucide-react";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center group mb-6"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full bg-white/5 border border-white/10 py-3 px-5 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-gray-500"
      />
      <button className="absolute right-2 bg-indigo-600 hover:bg-indigo-500 p-2 rounded-xl transition-all active:scale-95 shadow-lg shadow-indigo-500/20">
        <Plus size={20} />
      </button>
    </form>
  );
}
