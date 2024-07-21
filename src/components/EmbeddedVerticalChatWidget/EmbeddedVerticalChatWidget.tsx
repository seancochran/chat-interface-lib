import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon/Icon';
import Text from '../atoms/Text/Text'
import IconButton from '../atoms/IconButton/IconButton';
import SuggestionChip from '../atoms/SuggestionChip/SuggestionChip';


export interface EmbeddedVerticalChatWidgetProps {
  connectionType: string;
}
const ChatContainer = styled.div`
  width: 100%; 
  min-width: 200px;
  min-height: 900px;
  padding: 10px; 
  background-color: #fff; 
  border-radius: 20px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
`;

const HeaderBranding = styled.div`
  display: flex;
  align-items: center;
  gap: 15px
`;

const HeaderUtilButtons = styled.div`

`;

const ChatTextArea = styled.div`

`;

const ChatButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  border-top: 1px solid #f0f0f0;
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
  background-color: #f0f0f0;
  outline: none;
  border-radius: 30px;

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

const ChatInputRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  border-radius: 20px;
`;

const ChatBottom = styled.div`

`;

function handleSendClick() {
  console.log('Send button clicked!');
}

function handleMicClick() {
  console.log('Mic button clicked!');
}

const EmbeddedVerticalChatWidget = (props: EmbeddedVerticalChatWidgetProps) => {
  return (
  <ChatContainer>
    <ChatHeader>
      <HeaderBranding>
        <Icon iconName='Chat'/>
        <Text text='Brand Name' fontSize={20} fontWeight='bold'></Text>
      </HeaderBranding>
      <HeaderUtilButtons>
        <IconButton iconName='MoreVert' library='material-outlined' />
        <IconButton iconName='Fullscreen'/>
        <IconButton iconName='Close'/>
      </HeaderUtilButtons>
    </ChatHeader>
    <ChatTextArea>
        <ChatResponse></ChatResponse>
    </ChatTextArea>
    <ChatBottom>
      <ChatButtonRow>
          <ChatSugesstionChipGroup>
              <SuggestionChip label='Create client' />
              <SuggestionChip label='Train model' />
              <SuggestionChip label='Generate layout' />
          </ChatSugesstionChipGroup>
      </ChatButtonRow>
      <ChatInputRow>
          <ChatTextInput placeholder='Enter a prompt here'></ChatTextInput>
          <ChatUtilButtonGroup>
              <IconButton iconName='MicNone' library='material-outlined' onClick={handleMicClick} />
              <IconButton iconName='Send' onClick={handleSendClick} />
          </ChatUtilButtonGroup>
      </ChatInputRow>
    </ChatBottom>
  </ChatContainer>
)};

export default EmbeddedVerticalChatWidget; 