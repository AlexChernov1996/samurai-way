import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={() => props.handleSubmit}>
        <div>
            <Field component="input" name='login' placeholder={'login'}/></div>
        <div>
            <Field component="input" name='password' placeholder={'password'}/>
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
