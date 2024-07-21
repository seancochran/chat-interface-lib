import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../ThemeProvider';


export interface TextProps {
  text: string;
  fontFamily?: string; 
  fontSize?: number;       
  fontWeight?: string | number;
  color?: string;
}

const StyledText = styled.div<{ 
  fontFamily?: string; 
  fontSize?: number;
  fontWeight?: string | number; 
  color?: string;
}>`
  font-family: ${({ theme, fontFamily }) => fontFamily || theme.text.fontFamily};
  font-size: ${({ theme, fontSize }) => (fontSize ? `${fontSize}px` : `${theme.text.fontSize}px`)};
  font-weight: ${({ theme, fontWeight }) => fontWeight || theme.text.fontWeight};
  color: ${({ theme, color }) => color || theme.text.color};
`;

const Text = ({ text, fontFamily, fontSize, fontWeight, color }: TextProps) => {
  const theme = useContext(ThemeContext); // Get theme from context

  return (
    <StyledText theme={theme} fontFamily={fontFamily} fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {text}
    </StyledText>
  );
};

export default Text;