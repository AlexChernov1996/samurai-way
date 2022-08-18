import {PostFormData} from "../../Components/Profile/MyPosts/Post/AddPostForm/AddPostForm";

export const requiredField = (value: any) => {
    if (!value) return 'Field is required'
    return undefined
}
export const maxValueValidator = (maxValue: number) => (value: string) => {
    if (value.length > maxValue) return `Max length id ${maxValue} symbols`
    return undefined
}

