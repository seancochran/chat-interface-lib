import type { Meta, StoryObj } from '@storybook/react';
import IconButton, { IconButtonProps } from './IconButton';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Material: Story = {
    args: {
      iconName: 'Send',
      library: 'material'
    },
  };
  
  export const MaterialOutlined: Story = {
    args: {
      iconName: 'MicNone',
      library: 'material-outlined'
    },
  };
  
  export const Color: Story = {
      args: {
        iconName: 'Send',
        library: 'material',
        color: 'blue'
      },
    };
  
  export const Size: Story = {
      args: {
          iconName: 'Send',
          library: 'material',
          size: 44
      },
  };
  
  export const ColorAndSize: Story = {
      args: {
          iconName: 'Send',
          library: 'material',
          color: 'red',
          size: 32
      },
  };

