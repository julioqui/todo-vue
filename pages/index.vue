<template>
    <main class="main">
        <h1 class="heading">Todo Page</h1>
        <form class="input" @submit.prevent="addTodo">
            <input 
                class="input__box" 
                type="text" 
                placeholder="Add new task" 
                v-model="task"
            >
            <button class="input__submit" type="submit">Go</button>
        </form>
        <section  class="todos">
            <template v-if="todoStore.todos.length <= 0">
                <p class="todos__nothing">You have no tasks</p>
            </template>
            <template v-else>
                    <div class="todos__single"
                        v-for="(item, index) in todoStore.todos" 
                        :key="index"
                        :class="{completed: item.completed}"
                    >
                        <label :for="'task-' + index">{{ item.name }}</label>
                        <div>
                            <button class="icon" @click="removeTodo(index)">
                                <font-awesome-icon icon="trash" />
                            </button>
                            <button class="icon" @click="toggleCompleteTodo(index)">
                                <font-awesome-icon icon="check" />
                            </button>
                        </div>
                    </div>
            </template>
        </section >
    </main>
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
    function toggleCompleteTodo(index: number): void {
        todoStore.toggleCompleteTodo(index)
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
}

.heading {
    text-transform: uppercase;
    font-size: 40px;
    margin: 30px 0;
    color: white;
    z-index: 1;
    text-align: center;
}

.completed {
    text-decoration: line-through;
    color: red;
}

.input {
    display: flex;
    width: 95%;
    position: relative;
    align-items: center;
}

.input__box {
    width: 100%;
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 25px;
    border: none;
    transition: 0.2s;
    box-shadow: inset 0 0 5px black;
}

.input__box:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
}

.input__submit {
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 50px;
    right: 0px;
    border: none;
    font-size: 15px;
    background-color: #2f74c0;
    color: white;
    transition: 0.2s all;
    box-shadow: 0 0 10px black;
    cursor: pointer;
}

.input__submit:hover {
    background-color: #388ae2;
}

.input__submit:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
}

.todos {
    display: flex;
    justify-content: space-evenly;
    width: 95%;
    margin-top: 10px;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;
}

.todos__nothing {
    text-align: center;
    width: 100%;
    margin-top: 30px;
    font-size: 20px;
    color: white;
}

.todos__single {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 28%;
    border-radius: 5px;
    padding: 20px;
    margin-top: 15px;
    font-size: 20px;
    background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
    transition: 0.2s;
}

.todos__single:hover {
    box-shadow: 0 0 5px black;
    transform: scale(1.03);
}

.todos__single--text {
    flex: 1;
    padding: 5px;
    border: none;
    font-size: 20px;
}

.todos__single--text:focus {
    outline: none;
}

.icon {
    margin-left: 10px;
    font-size: 25px;
    cursor: pointer;
    border: none;
    background: inherit
}

@media (max-width: 700px) {
    .container {
        padding: 0 20px;
    }
    .heading {
        margin: 15px 0;
        font-size: 30px;
    }

    .input {
        width: 70%;
        flex-direction: column;
    }

    .input__box {
        padding: 20px 25px;
    }

    .input__submit {
        width: 45px;
        height: 45px;
        font-size: 12px;
    }

    .todos {
        flex-direction: column;
        align-items: center;
    }

    .todos__single {
        width: 80%;
        padding: 20px;
        margin-top: 10px;
        font-size: 16px;
    }

    .todos__nothing {
        font-size: 18px;
    }

    .todos__single div {
        min-width: 100px;
    }
}

@media (max-width: 500px) {
    .heading {
        font-size: 25px;
    }

    .input__box {
        font-size: 18px;
    }

    .input__submit {
        width: 40px;
        height: 40px;
        font-size: 10px;
    }

    .todos__single {
        font-size: 14px;
    }

    .todos__single label {
        font-size: 14px;
    }
}
</style>