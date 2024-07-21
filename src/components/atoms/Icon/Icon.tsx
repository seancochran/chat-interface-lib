import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import * as MaterialOutlinedIcons from '@styled-icons/material-outlined';
import styled from 'styled-components';

export interface IconProps {
  iconName: keyof typeof MaterialIcons | keyof typeof MaterialOutlinedIcons;
  library?: 'material' | 'material-outlined'; 
  color?: string;
  size?: number;
}

const IconWrapper = styled.div<{ color?: string; size?: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({ size = 24 }) => size}px;
    height: ${({ size = 24 }) => size}px;
    color: ${({ color }) => color || 'currentColor'}; // Use currentColor as default
  }
`;

const Icon: React.FC<IconProps> = ({ iconName, library = 'material', color, size }) => {
  const Icons = library === 'material' ? MaterialIcons : MaterialOutlinedIcons;
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    console.error(`Icon with name "${iconName}" not found in @styled-icons/${library}`);
    return null; 
  }

  return (
    <IconWrapper color={color} size={size}>
      <IconComponent />
    </IconWrapper>
  );
};

export default Icon;