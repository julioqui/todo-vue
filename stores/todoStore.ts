import { defineStore } from "pinia";

type Task = {
    id: number
    name: string
    completed: boolean
  }

export const useTodoStore = defineStore("todo", {
    state: () => ({ todos: [] as Task[] }),
    actions: {
        addTodo(task: string): void {
            const newTask: Task = {
                id: Date.now(),
                name: task.trim(), 
                completed: false,
            } 
            if (task) {
                this.todos.push(newTask)
            }
        },

        removeTodo(index: number): void {
            if (index >= 0 && index < this.todos.length) {
              this.todos.splice(index, 1)
            }
        },

        toggleCompleteTodo(index: number): void {
            if (index >= 0 && index < this.todos.length) {
              this.todos[index].completed = !this.todos[index].completed
            }
        }
    }
})