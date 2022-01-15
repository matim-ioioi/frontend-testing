import { mount } from "@vue/test-utils";
import MyDialog from "@/components/to_be_tested/MyDialog.vue";
import MyButton from "@/components/not_to_be_tested/MyButton.vue";

describe("Success test for dialog", () => {
  it("Test emit on close btn in dialog", async () => {
    const wrapper = mount({
      components: {
        MyDialog,
        MyButton,
      },
      template: `<div><my-dialog v-model="isVisible" header="header of dialog" /></div>`,
      data: () => ({
        isVisible: true,
      }),
    });

    const dialog = wrapper.find('transition-stub[name="modal"]');
    expect(dialog.vm).toBeTruthy();

    const closeBtn = wrapper.find(".my-dialog__close");
    expect(closeBtn.vm).toBeTruthy();

    await closeBtn.trigger("click");
    expect(dialog.emitted().change).toBeTruthy();
  });
});
