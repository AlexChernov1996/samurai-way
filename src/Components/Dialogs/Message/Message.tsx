import React from 'react';
type MessagePropsType = {
    text:string
    id:string
}
const Message = (props:MessagePropsType) => {
    return (
        <div>
            {props.text}
        </div>
    );
};

export default Message;
