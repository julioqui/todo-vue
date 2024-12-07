<template>
    <div>
        <h1>Todo Page</h1>
        <input type="text" placeholder="Add new task" v-model="task" @keyup.enter="addTodo">
        <template v-if="todoStore.todos.length <= 0">You have no tasks</template>
        <template v-else>
            <ul>
                <li v-for="(item, index) in todoStore.todos" :key="index">
                    {{ item }}
                    <button @click="removeTodo(index)">Remove</button>
                </li>
            </ul>
        </template>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    import { useTodoStore } from "@/stores/todoStore"

    const todoStore = useTodoStore()
    const task = ref("")

    function addTodo(): void {
        if (task.value.trim()) {
            todoStore.addTodo(task.value)
        task.value = ""
        }
    }

    function removeTodo(index: number): void {
        todoStore.removeTodo(index)
    }
</script>
