import { defineStore } from "pinia";

type Task = {
    name: string
    completed: boolean
  }

export const useTodoStore = defineStore("todo", {
    state: () => ({ todos: [] as Task[] }),
    actions: {
        addTodo(task: string): void {
            const newTask: Task = { name: task.trim(), completed: false } 
            if (task) {
                this.todos.push(newTask)
            }
        },

        removeTodo(index: number): void {
            this.todos.splice(index, 1)
        },

        toggleCompleteTodo(index: number) {
            this.todos[index].completed = !this.todos[index].completed
        }
    }
})