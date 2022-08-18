import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxValueValidator, requiredField } from '../../utilits/validation/validation';
import { Input } from '../CommonComponents/Textarea/Textarea';
type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const maxValue = maxValueValidator(10)
    return <form onSubmit={() => props.handleSubmit}>
        <div>
            <Field component={Input} name='login' placeholder={'login'} validate={[requiredField, maxValue]}/></div>
        <div>
            <Field component={Input} name='password' placeholder={'password'} validate={[requiredField, maxValue]}/>
        </div>
        <div>
            <Field component="input" name='rememberMe' type="checkbox"/>
        </div>
        <button>Login</button>
    </form>
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'}) (LoginForm)

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>);
};

export default LoginPage
