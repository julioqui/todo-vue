<template>
    <div>
        <h1>Todo Page</h1>
        <input type="text" placeholder="Add new task" v-model="task" @keyup.enter="addTodo(task)">
        <ul>
            <li v-for="(item, index) in todos" :key="index">
                {{ item }}
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    const task = ref("")
    const todos: Ref<string[]> = ref([])

    function addTodo(task: string): void {
        const newTask: string = task.trim()
        if (newTask) {
            todos.value.push(newTask)
            task = ""
        }
    }

    function removeTodo(index: number): void {
        todos.value.splice(index, 1)
    }
</script>
