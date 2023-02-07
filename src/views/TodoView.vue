<template>
  <div>
    <div>
      <app-input :modelValue="value" @update:modelValue="updateValue" />
      <app-button
        text="Send"
        :disabled="!value.length"
        @click="create(value)"
      />
    </div>

	<todo-list :todos="todos" @remove="remove">

	</todo-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppInput from "@/components/App/AppInput.vue";
import AppButton from "@/components/App/AppButton.vue";
import TodoList from '@/components/Todo/TodoList.vue';
import { ITodo } from "@/interfaces/ITodo";

@Component({
  components: {
    AppInput,
    AppButton,
	TodoList
  },
})
export default class HomeView extends Vue {
  todos: Array<ITodo> = [];

  value: string = "";
  updateValue(newValue: string) {
    this.value = newValue;
  }

  create(text: string) {
    this.todos.push({ text, checked: false, id: Date.now() });
    this.value = "";
  }

  remove(id: number) {
	this.todos = this.todos.filter(x => x.id !== id);
  }
}
</script>