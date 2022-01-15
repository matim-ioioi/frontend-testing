import { shallowMount } from "@vue/test-utils";
import MyDialog from "@/components/to_be_tested/MyDialog.vue";

describe("Success test for dialog", () => {
  it("Test without child components", () => {
    const isVisible = true;
    const wrapper = shallowMount(MyDialog, {
      propsData: {
        visible: isVisible,
      },
    });

    const dialog = wrapper.find(".my-dialog");

    expect(dialog.exists()).toBeTruthy();
  });
});
