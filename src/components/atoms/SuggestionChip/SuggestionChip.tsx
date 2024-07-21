import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../ThemeProvider';

export interface SuggestionChipProps {
  label: string;
  size?: number;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  boxShadow?: string;
  padding?: string;
  hoverSize?: number;
  hoverTextColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  hoverBorderRadius?: number;
  hoverBorderWidth?: number;
  hoverBoxShadow?: string;
  hoverPadding?: string;
  hoverScale?: number;
}

const StyledButton = styled.button<{
  size?: number;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  boxShadow?: string;
  padding?: string;
  hoverSize?: number;
  hoverTextColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  hoverBorderRadius?: number;
  hoverBorderWidth?: number;
  hoverBoxShadow?: string;
  hoverPadding?: string;
  hoverScale?: number;
}>`
  border: ${({ theme, borderWidth, borderColor }) =>
    borderWidth && borderColor
      ? `${borderWidth}px solid ${borderColor}`
      : theme.suggestionChip.borderWidth && theme.suggestionChip.borderColor 
        ? `${theme.suggestionChip.borderWidth}px solid ${theme.suggestionChip.borderColor}`
        : 'none'
  };
  background-color: ${({ theme, backgroundColor }) => backgroundColor || theme.suggestionChip.backgroundColor};
  border-radius: ${({ theme, borderRadius }) => `${borderRadius || theme.suggestionChip.borderRadius}px`};
  padding: ${({ theme, padding }) => padding || theme.suggestionChip.padding};
  margin: 0 5px;
  box-shadow: ${({ theme, boxShadow }) => boxShadow || theme.suggestionChip.boxShadow};
  font-size: ${({ theme, size }) => `${size || theme.suggestionChip.fontSize}px`};
  color: ${({ theme, textColor }) => textColor || theme.suggestionChip.color};

  &:hover {
    font-size: ${({ theme, hoverSize, size }) => (hoverSize ? `${hoverSize}px` : `${size || theme.suggestionChip.hoverSize}px`)};
    color: ${({ theme, hoverTextColor, textColor }) => hoverTextColor || textColor || theme.suggestionChip.hoverTextColor};
    background-color: ${({ theme, hoverBackgroundColor, backgroundColor }) =>
      hoverBackgroundColor || backgroundColor || theme.suggestionChip.hoverBackgroundColor};
    border: ${({ theme, hoverBorderWidth, hoverBorderColor, borderWidth, borderColor }) =>
      hoverBorderWidth && hoverBorderColor
        ? `${hoverBorderWidth}px solid ${hoverBorderColor}`
        : borderWidth && borderColor
        ? `${borderWidth}px solid ${borderColor}`
        : theme.suggestionChip.hoverBorderWidth && theme.suggestionChip.hoverBorderColor
        ? `${theme.suggestionChip.hoverBorderWidth}px solid ${theme.suggestionChip.hoverBorderColor}`
        : 'none'};
    border-radius: ${({ theme, hoverBorderRadius, borderRadius }) =>
      `${hoverBorderRadius || borderRadius || theme.suggestionChip.hoverBorderRadius}px`};
    box-shadow: ${({ theme, hoverBoxShadow, boxShadow }) => hoverBoxShadow || boxShadow || theme.suggestionChip.hoverBoxShadow};
    padding: ${({ theme, hoverPadding, padding }) => hoverPadding || padding || theme.suggestionChip.hoverPadding};
    transform: ${({ theme, hoverScale }) => (hoverScale ? `scale(${hoverScale})` : `scale(${theme.suggestionChip.hoverScale})` )};
  }
`;

const SuggestionChip = ({ label, ...styleProps }: SuggestionChipProps) => {
  const theme = useContext(ThemeContext);

  return <StyledButton {...styleProps} theme={theme}>{label}</StyledButton>;
};

export default SuggestionChip;