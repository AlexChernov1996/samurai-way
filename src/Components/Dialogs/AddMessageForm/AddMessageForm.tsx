import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Textarea from "../../CommonComponents/Textarea/Textarea";
import {maxValueValidator, requiredField} from "../../../utilits/validation/validation";

export type FormDataType = {
    messageBody: string
}
// type PropsType = {
//     sendMessage: (message: string) => void
// }


const AddMessageReduxForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const maxLength20 = maxValueValidator(20)
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='messageBody' component={Textarea} validate={[requiredField, maxLength20]}/>
            <button>Send</button>
        </form>
    );
};
export default reduxForm<FormDataType>({form: 'addMessage'})(AddMessageReduxForm)

