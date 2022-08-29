import React from 'react';
import s from "../../my_posts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxValueValidator, requiredField} from "../../../../../utilits/validation/validation";
import Textarea from "../../../../CommonComponents/Textarea/Textarea";

export type PostFormData = {
    textForPost: string
}
const maxValue = maxValueValidator(20)
const AddPostForm: React.FC<InjectedFormProps<PostFormData>> = (props) => {
    return (
        <div className={s.addPostForm}>
            <form onSubmit={props.handleSubmit}>
                <Field name='textForPost' component={Textarea} placeholder={"New post...."}
                       validate={[requiredField, maxValue]}
                />
                <button>Add post</button>
            </form>
        </div>
    );
};

export default reduxForm<PostFormData>({form: 'addPostForm'})(AddPostForm);
