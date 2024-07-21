import type { Meta, StoryObj } from '@storybook/react';
import SuggestionChip, { SuggestionChipProps } from './SuggestionChip';

const meta = {
  title: 'Atoms/SuggestionChip',
  component: SuggestionChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // ArgTypes for controls (you can customize these further)
    size: { control: 'number' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderRadius: { control: 'number' },
    borderWidth: { control: 'number' },
    boxShadow: { control: 'text' },
    padding: { control: 'text' },
    hoverSize: { control: 'number' },
    hoverTextColor: { control: 'color' },
    hoverBackgroundColor: { control: 'color' },
    hoverBorderColor: { control: 'color' },
    hoverBorderRadius: { control: 'number' },
    hoverBorderWidth: { control: 'number' },
    hoverBoxShadow: { control: 'text' },
    hoverPadding: { control: 'text' },
    hoverScale: { control: 'number' },
  },
} satisfies Meta<typeof SuggestionChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary Chip',
    backgroundColor: '#007bff',
    textColor: 'white',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Chip',
    backgroundColor: '#6c757d',
    textColor: 'white',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Chip',
    borderWidth: 2,
    borderColor: '#007bff',
  },
};

export const Rounded: Story = {
  args: {
    label: 'Rounded Chip',
    borderRadius: 20,
  },
};

export const Custom: Story = {
  args: {
    label: 'Custom Chip',
    backgroundColor: '#f08080',
    textColor: '#333',
    borderWidth: 1,
    borderColor: '#f08080',
    borderRadius: 5,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '8px 16px',
  },
};

export const HoverColorChange: Story = {
    args: {
      label: 'Hover Color',
      backgroundColor: '#f0f0f0',
      hoverBackgroundColor: '#007bff',
      textColor: '#333',
      hoverTextColor: 'white',
    },
  };
  
  export const HoverScale: Story = {
    args: {
      label: 'Hover Scale',
      hoverScale: 1.1,
    },
  };
  
  export const HoverBorderChange: Story = {
    args: {
      label: 'Hover Border',
      borderWidth: 2,
      borderColor: '#ccc',
      hoverBorderWidth: 3,
      hoverBorderColor: '#007bff',
    },
  };
  
  export const HoverAll: Story = {
    args: {
      label: 'Hover All',
      backgroundColor: '#f0f0f0',
      hoverBackgroundColor: '#007bff',
      textColor: '#333',
      hoverTextColor: 'white',
      borderRadius: 10,
      hoverBorderRadius: 20,
      borderWidth: 1,
      hoverBorderWidth: 2,
      borderColor: '#ccc',
      hoverBorderColor: '#0056b3',
      hoverScale: 1.05,
    },
  };