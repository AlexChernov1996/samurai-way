import React from 'react';
type MessagePropsType = {
    text:string
}
const Message = (props:MessagePropsType) => {
    return (
        <div>
            {props.text}
        </div>
    );
};

export default Message;
