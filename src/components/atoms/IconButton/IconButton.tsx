import React from 'react';
import styled from 'styled-components';
import Icon, { IconProps } from '../Icon/Icon';

export interface IconButtonProps extends IconProps {
  label?: string;
  onClick?: () => void;
  hoverBackgroundColor?: string;
}

const StyledButton = styled.button<{ hoverBackgroundColor?: string }>`
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || '#f0f0f0'};
    // Optional: you can also add a scale effect here
    // transform: scale(1.1);
  }
`;

const IconButton = ({ label, onClick, hoverBackgroundColor, ...iconProps }: IconButtonProps) => {

  return (  
  <StyledButton onClick={onClick} hoverBackgroundColor={hoverBackgroundColor}>
    <Icon {...iconProps} />
    {label && <span style={{ marginLeft: '8px' }}>{label}</span>} 
  </StyledButton>
)};

export default IconButton;