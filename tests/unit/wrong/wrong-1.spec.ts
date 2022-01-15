import { shallowMount } from "@vue/test-utils";
import MyButton from "@/components/not_to_be_tested/MyButton.vue";

describe("Wrong tests fot button", () => {
  it("Test content in button", () => {
    const content = "click on button";
    const wrapper = shallowMount(MyButton, {
      propsData: {
        content,
      },
    });
    expect(wrapper.text()).toMatch("click on button");
  });

  it("Test function increment in button", () => {
    const content = "click on button";
    const wrapper = shallowMount(MyButton, {
      propsData: {
        content,
      },
    });

    const number = 1;

    // @ts-ignore
    const newNumber = wrapper.vm.incrementNumber(number);

    expect(newNumber).toBe(2);
  });
});
