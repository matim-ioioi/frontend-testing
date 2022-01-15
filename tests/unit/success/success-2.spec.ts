import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Success test for Home Page", () => {
  it("Test mybutton and mydialog composition", async () => {
    const wrapper = mount(Home);

    let dialog = wrapper.find('*[data-test="dialog"]').find(".my-dialog");
    expect(dialog.exists()).toBeFalsy();

    const openDialogBtn = wrapper.find('button[data-test="dialog-open"]');
    expect(openDialogBtn.vm).toBeTruthy();

    await openDialogBtn.trigger("click");
    await wrapper.vm.$nextTick();

    const dialogComponent = wrapper.find('*[data-test="dialog"]');
    expect(dialogComponent.exists()).toBeTruthy();
    expect(dialogComponent.vm).toBeTruthy();

    dialog = dialogComponent.find(".my-dialog");
    expect(dialog.exists()).toBeTruthy();
    expect(dialog.isVisible()).toBeTruthy();
  });
});
