<template>
  <button  @click="click">
	{{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppButton extends Vue {
  @Prop({ default: "text", type: String }) readonly type: string;
  @Prop({ default: "Click me", type: String }) readonly text: string;

  @Emit()
  click(e: Event) {
	return (e.target as HTMLInputElement).value;
  }
}
</script>