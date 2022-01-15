<template>
  <button class="my-button" v-on="$listeners">
    <span>{{ content }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  @Prop(String)
  content!: string;

  public incrementNumber(number: number): number {
    return number + 1;
  }
}
</script>

<style scoped lang="scss">
.my-button {
  font-size: 16px;
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid #bcbcbc;
  color: #9191ff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border: 1px solid #9191ff;
    color: #4e4eff;
  }
}
</style>
