import React from 'react';
import s from "./post.module.css"
type PostPropsType = {
    text:string
    likes:number
}
const Post = (props:PostPropsType) => {
    return (
        <div className={s.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpGdJw8wuHSUgzEIoeDoK86p_akIzZf2ohg&usqp=CAU" alt=""/>
            <p>{props.text}</p>
            <div className={s.likes}>{props.likes}</div>
        </div>
    );
};

export default Post;
