<template>
  <transition name="modal">
    <div class="my-dialog" v-if="visible">
      <div class="my-dialog__inner">
        <header class="my-dialog__header">
          <slot name="header">
            {{ header || "dialog" }}
          </slot>
          <my-button
            class="my-dialog__close"
            @click="handleCloseModal"
            content="close"
          />
        </header>
        <main class="my-dialog__body">
          <slot name="body" />
        </main>
        <footer class="my-dialog__footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Model, Prop, Vue } from "vue-property-decorator";
import MyButton from "@/components/not_to_be_tested/MyButton.vue";
@Component({
  components: { MyButton },
})
export default class MyDialog extends Vue {
  @Model("change", { type: Boolean })
  visible!: boolean;

  @Prop(String)
  header?: string;

  handleCloseModal(): void {
    this.$emit("change", false);
  }
}
</script>

<style scoped lang="scss">
.my-dialog {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  &__inner {
    width: 400px;
    transform: translateY(200px);
    margin: 0 auto;
    padding: 20px 32px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background-color: #fff;
  }

  &__header {
    position: relative;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .my-dialog__inner,
.modal-leave-active .my-dialog__inner {
  transform: scale(1.1);
}
</style>
