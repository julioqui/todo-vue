

<template>
    <div>
        <h1>Todo Page</h1>
        <ul>
            <li v-for="(item, index) in todos" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    const todos = ref(["Buy groceries", "Study Vue", "Walk my dog"])
</script>

<style scoped>
    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
</style>