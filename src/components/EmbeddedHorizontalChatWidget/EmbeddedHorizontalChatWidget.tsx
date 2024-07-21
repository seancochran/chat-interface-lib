import React from 'react';
import styled from 'styled-components';
import IconButton from '../atoms/IconButton/IconButton';
import SuggestionChip from '../atoms/SuggestionChip/SuggestionChip';


export interface EmbeddedHorizontalChatWidgetProps {
  connectionType: string;
}
const ChatContainer = styled.div`
  width: 100%; 
  min-width: 800px;
  min-height: 180px;
  padding: 20px; 
  background-color: #f0f0f0; 
  border-radius: 30px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatTextArea = styled.div`

`;

const ChatButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-top: 1px solid #eee;
`;
const ChatSugesstionChipGroup = styled.div`
  display: flex;
  justify-content; flex-start;
`;

const ChatUtilButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ChatTextInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;

  padding: 10px;
  font-size: 16px;
  width: 100%; 
  color: inherit;

  ::placeholder {
    color: #999;
  }
`;

const ChatResponse = styled.text`
  
`;

function handleSendClick() {
  console.log('Send button clicked!');
}

function handleMicClick() {
  console.log('Mic button clicked!');
}

const EmbeddedHorizontalChatWidget = (props: EmbeddedHorizontalChatWidgetProps) => {
  return (
  <ChatContainer>
    <ChatTextArea>
        <ChatTextInput placeholder='Enter a prompt here'></ChatTextInput>
        <ChatResponse></ChatResponse>
    </ChatTextArea>
    <ChatButtonRow>
        <ChatSugesstionChipGroup>
            <SuggestionChip label='Create client' />
            <SuggestionChip label='Train model' />
            <SuggestionChip label='Generate layout' />
        </ChatSugesstionChipGroup>
        <ChatUtilButtonGroup>
            <IconButton iconName='MicNone' library='material-outlined' onClick={handleMicClick} />
            <IconButton iconName='Send' onClick={handleSendClick} />
        </ChatUtilButtonGroup>
    </ChatButtonRow>
  </ChatContainer>
)};

export default EmbeddedHorizontalChatWidget; 