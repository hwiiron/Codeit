import { CustomButton } from "../components/CustomButton";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Test/CustomButton",
  component: CustomButton,
  // 여기에 args 및 label 추가
  args: {
    label: "test",
  },
  parameters: {},
};

export const Solid = {
  args: {
    variant: "solid",
  },
};

export const Outline = {
  args: {
    variant: "outline",
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

export const ClickTestButton = {
  args: {
    variant: "outline",
    label: "Click!",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = await canvas.getByRole("button", {
      name: /Click/i,
    });
    await userEvent.click(primaryButton);
  },
};
