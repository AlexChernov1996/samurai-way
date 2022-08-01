import React, {ChangeEvent, useState} from 'react';

type  StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const EditableStatus = (props: StatusPropsType) => {
    let [state, setState] = useState({editMode: false, textForStatus: props.status})

    function editModeOn() {
        setState({...state, editMode: true})
    }

    function editModeOff() {
        setState({...state, editMode: false})
        props.updateStatus(state.textForStatus!)
    }

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setState({...state, textForStatus: e.currentTarget.value})
    }

    return (
        <div>{
            state.editMode
                ? <input onChange={onChangeHandler}
                         onBlur={editModeOff}
                         autoFocus={true}
                         value={state.textForStatus!}/>
                : <p onDoubleClick={editModeOn}>{props.status || 'Add status'}</p>
        }</div>
    );
}

export default EditableStatus;
