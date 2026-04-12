import AddTodo from "./components/AddTodo";
import TodoList from "./features/todo/TodoList";
import Filter from "./features/todo/Filter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex justify-center items-center p-4">
   
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
      
      <div className="relative z-10 bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-8 rounded-[32px] w-full max-w-[450px] shadow-2xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Tasks
          </h1>
          <p className="text-gray-500 text-sm">Stay organized and productive.</p>
        </header>
        
        <AddTodo />
        <Filter />
        
        <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          <TodoList />
        </div>
      </div>
    </div>
  );
}
