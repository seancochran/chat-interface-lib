import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text'; // Import your Text component

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Provide controls for the various props
    text: { control: 'text' },
    fontFamily: { control: 'text' }, // Assuming a string input for font names
    fontSize: { control: 'number' },
    fontWeight: { control: 'select', options: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is default text', // Default values
  },
};

export const CustomFont: Story = {
  args: {
    text: 'This is text with a custom font',
    fontFamily: 'Arial', // Example custom font
  },
};

export const LargeSize: Story = {
  args: {
    text: 'This is large text',
    fontSize: 24, 
  },
};

export const BoldWeight: Story = {
  args: {
    text: 'This is bold text',
    fontWeight: 'bold', 
  },
};

export const ColoredText: Story = {
  args: {
    text: 'This is colored text',
    color: 'blue',
  },
};

export const CustomAll: Story = {
  args: {
    text: 'Fully customized text',
    fontFamily: 'Courier New',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff5733', // Example custom color
  },
};