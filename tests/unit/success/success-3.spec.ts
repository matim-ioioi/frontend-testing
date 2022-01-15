import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Success test for Home Page", () => {
  it("Test router push", async () => {
    const wrapper = mount(Home, {
      data: () => ({
        repos: null,
      }),
    });

    // @ts-ignore
    jest.spyOn(wrapper.vm, "fetchSomeData").mockImplementation(() => {
      wrapper.setData({
        repos: [
          {
            name: "test-name-1",
            url: "test-url-1",
            lastUpdate: "test-date-1",
          },
          {
            name: "test-name-2",
            url: "test-url-2",
            lastUpdate: "test-date-2",
          },
          {
            name: "test-name-3",
            url: "test-url-3",
            lastUpdate: "test-date-3",
          },
        ],
      });
    });

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

    const fetchBtn = wrapper.find('button[data-test="fetch"]');
    expect(fetchBtn.vm).toBeTruthy();

    await fetchBtn.trigger("click");
    const reposBlocks = wrapper.findAll('div[data-test="repo"]');
    expect(reposBlocks.exists()).toBeTruthy();
    expect(reposBlocks.length).toBe(3);
  });
});
