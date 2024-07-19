import React from 'react';

interface ChatWidgetProps {
    label: string;
}

const ChatWidget = (props: ChatWidgetProps) => {
    return <button>{props.label}</button>
};

export default ChatWidget;