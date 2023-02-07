<template>
  <span>
    <ul v-for="{ id, text, checked } of todos" :key="id">
      <li>
        <span>
          <app-input type="checkbox" :value="checked" />
          <span>{{ text }}</span>
        </span>
        <app-button text="Remove" @click="remove(id)" data-cy="delete" />
      </li>
    </ul>
  </span>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import AppInput from "@/components/App/AppInput.vue";
import AppButton from "@/components/App/AppButton.vue";
import { ITodo } from "@/interfaces/ITodo";

@Component({
  components: {
    AppInput,
    AppButton,
  },
})
export default class TodoList extends Vue {
  @Prop() readonly todos: ITodo[];

  @Emit()
  remove(id: number) {
    return id;
  }
}
</script>

<style scoped>
li {
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-content: center;

  margin: 0 auto;
  max-width: 50wv;
}
</style>