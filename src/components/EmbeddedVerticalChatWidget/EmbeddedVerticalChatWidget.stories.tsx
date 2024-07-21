import type { Meta, StoryObj } from '@storybook/react';
import EmbeddedVerticalChatWidget, { EmbeddedVerticalChatWidgetProps } from './EmbeddedVerticalChatWidget';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ReactComponentLibrary/EmbeddedVerticalChatWidget',
  component: EmbeddedVerticalChatWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof EmbeddedVerticalChatWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HelloWorld: Story = {
  args: {
    connectionType: '',
  },
};
