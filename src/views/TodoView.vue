<template>
  <div>
    <input type="text" v-model="value" />
    <button :disabled="!value.length" @click="createTodo">Send</button>
    <ul v-for="todo of todos" :key="todo.id">
      <li>
        <span>
          <input
            type="checkbox"
            :value="todo.checked"
            @click="editTodo(todo)"
          />
        </span>
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)">Remove Item</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ITodo } from "../interfaces/ITodo";

@Component({
  components: {},
})
export default class HomeView extends Vue {
  todos: ITodo[] = [];
  value: string = "";

  createTodo(): void {
    this.todos.push({ id: Date.now(), text: this.value, checked: false });
    this.resetValue();
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((x) => x.id !== id);
  }

  editTodo({ id, checked }: ITodo): void {
    let todo = this.todos.find((x) => x.id === id);
    if (todo) {
      todo.checked = checked;
      this.resetValue();
    }
  }

  private resetValue(): void {
    this.value = "";
  }
}
</script>

<style scoped>
li {
  list-style: none;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  
  max-width: 500px;
}
</style>