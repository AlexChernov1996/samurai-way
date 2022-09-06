import React from 'react';
import style from "./login.module.css"
import 'antd/dist/antd.css';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Checkbox, Form, Input} from 'antd';
import {useForm, Controller, SubmitHandler} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {logInTC} from "../../state/authReducer";
import {LogInRequestType} from "../../api/auth-api";
import {AppStateType} from "../../state/store";
import {Redirect} from "react-router-dom";
import {ErrorMessage} from "@hookform/error-message";


type LoginValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
//type LogInFormType = MSTPType & { logIn: (data: LoginValuesType) => void }
export const LogInFormPage: React.FC = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const {register, handleSubmit, control, formState: {errors}, resetField} = useForm<LoginValuesType>({
        mode: "onChange"
    });
    const onSubmit: SubmitHandler<LogInRequestType> = (data) => {
        dispatch(logInTC(data))
        //resetField("password")
    }

    if (isAuth) {
        return <Redirect to={'profile'}/>
    }
    return (
        <div className={style.loginPage}>
            <form
                className={style.loginBlock}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email is invalid"
                        }
                    }}
                    render={(field) => (<Input value={field.field.value}
                                               onChange={field.field.onChange}
                                               ref={field.field.ref}
                                               placeholder="Email"
                                               defaultValue="vonrehcxela@gmail.com"
                                               prefix={<UserOutlined className="site-form-item-icon"/>}
                    />)}
                />
                <ErrorMessage errors={errors}
                              name="email"
                              render={({message}) => <p className={style.errorMessage}>{message}</p>}
                />

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'password is required',
                    }}
                    render={(field) => (<Input value={field.field.value}
                                               onChange={field.field.onChange}
                                               ref={field.field.ref}
                                               placeholder="Password"
                                               defaultValue="4729649305st"
                                               type={"password"}
                    />)}

                />
                <ErrorMessage errors={errors}
                              name="password"
                              render={({message}) => <p className={style.errorMessage}>{message}</p>}
                />
                <Controller name="rememberMe"
                            control={control}
                            render={({field}) => <Checkbox {...field}>Remember me</Checkbox>}/>


                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </form>
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
