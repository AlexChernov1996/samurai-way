import React from 'react';
import style from "./login.module.css"
import 'antd/dist/antd.css';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import {useForm} from "react-hook-form";
import {connect, useDispatch, useSelector} from "react-redux";
import {logInTC} from "../../state/authReducer";
import {LogInRequestType} from "../../api/auth-api";
import {AppStateType} from "../../state/store";
import {Redirect} from "react-router-dom";


type LoginValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
//type LogInFormType = MSTPType & { logIn: (data: LoginValuesType) => void }
export const LogInFormPage: React.FC = (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const {register, formState: {errors}} = useForm<LoginValuesType>();
    const onSubmit = (data: LogInRequestType) => dispatch(logInTC(data));
    if (isAuth) {
        return <Redirect to={'profile'}/>
    }
    return (
        <div className={style.loginPage}>
            <Form

                className={style.loginBlock}
                initialValues={{
                    remember: true,
                }}
                onFinish={onSubmit}
            >
                <Form.Item {...register("email", {required: true, maxLength: 20})}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                           placeholder="Email"/>
                </Form.Item>
                <Form.Item {...register("password", {required: true, maxLength: 20})}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"

                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
// let MSTP = (state: AppStateType): MSTPType => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }
//
// export  const ConnectedLoginForm = connect(MSTP, {logInTC})(LogInFormPage)
// type MSTPType = {
//     isAuth: boolean
// }
