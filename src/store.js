import zustand, {create} from "zustand";
import axios from "axios";

export const useTodoStore = create((set) => ({
    todos: [],
    loading: true,

    fetchTodos: async () => { 
        try {
            const res = await axios.get('https://a60a4121-996b-493e-80a4-60a8154a5d4f-00-1nsum8dvrq67m.sisko.replit.dev/api/todos/');
            set({ todos: res.data, loading: false });
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    },
     
    addTodo: async (todoTitle, todoDesc) => { 
        try {
            const res = await axios.post('https://a60a4121-996b-493e-80a4-60a8154a5d4f-00-1nsum8dvrq67m.sisko.replit.dev/api/todos/', {
                todo_title: todoTitle,
                todo_desc: todoDesc // Corrected property name
            });
            set((state) => ({ todos: [...state.todos, res.data] }));
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    },
    
    deleteTodo: async (id) => {
        try {
            set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) }));
            await axios.delete(`https://a60a4121-996b-493e-80a4-60a8154a5d4f-00-1nsum8dvrq67m.sisko.replit.dev/api/todos/${id}`);
        } catch (err) {
            console.log("An error occurred ", err);
        }
    },
    
    editTodo: async (id, todoTitle, todoDesc) => { 
        console.log(id)
        console.log(todoTitle)
        console.log(todoDesc)
        try {
            await axios.patch(`https://a60a4121-996b-493e-80a4-60a8154a5d4f-00-1nsum8dvrq67m.sisko.replit.dev/api/todos/${id}/`, {
                todo_title: todoTitle,
                todo_desc: todoDesc // Corrected property name
            });
        } catch (error) {
            console.error('Error editing todo:', error);
        }
    }
}));
