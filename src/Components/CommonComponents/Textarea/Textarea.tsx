import React from 'react';
import s from './textarea.module.css'

const FormField = ({input, meta, child, ...restProps}: any) => {
    let error = meta.touched && meta.error
    return (
        <div className={error && s.error}>
            {restProps.children}
            {error && <div>{meta.error}</div>}
        </div>
    )
};
const Textarea = (props:any) => {
    return <FormField {...props}><textarea {...props} {...props.input}/></FormField>
};
export const Input = (props: any) => {
    return <FormField {...props}><input {...props} {...props.input}/></FormField>
    
};

export default Textarea;
