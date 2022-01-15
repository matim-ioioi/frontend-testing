import { mount } from "@vue/test-utils";
import MyButton from "@/components/not_to_be_tested/MyButton.vue";

describe("Wrong tests fot button", () => {
  it("Test content in button", () => {
    const wrapper = mount({
      components: {
        MyButton,
      },
      template: `<my-button :content="content" />`,
      data: () => ({
        content: "click on button",
      }),
    });

    expect(wrapper.text()).toMatch("click on button");
  });
});
