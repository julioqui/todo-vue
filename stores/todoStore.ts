import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
    state: () => ({ todos: [] as string[] }),
    actions: {
        addTodo(task: string): void {
            const newTask: string = task.trim()
            if (newTask) {
                this.todos.push(newTask)
            }
        },

        removeTodo(index: number): void {
            this.todos.splice(index, 1)
        }
    }
})