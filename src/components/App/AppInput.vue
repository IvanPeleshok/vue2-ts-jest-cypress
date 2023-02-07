<template>
  <input :type="type" :value="value" @input="onChange" :data-cy="testId" />
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from "vue-property-decorator";

@Component
export default class AppInput extends Vue {
  @Prop({ default: "text", type: String }) readonly type: string;
  @Prop({ default: "text", type: String }) readonly testId: string;
  @PropSync("modelValue", { type: String }) value!: string;

  onChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }
}
</script>
