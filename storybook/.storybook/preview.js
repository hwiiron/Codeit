/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      values: [
        {
          name: "blue",
          value: "blue",
        },
        {
          name: "red",
          value: "red",
        },
      ],
    },
  },
};

export default preview;
