import React from 'react';

type  StatusPropsType = {
    status: string | null
}

class EditableStatus extends React.Component<StatusPropsType> {
    state = {editMode: false}

    editModeOn() {
        this.setState({editMode: true})
    }

    editModeOff() {
        this.setState({editMode: false})
    }

    render() {
        return (

            <div>{this.props.status &&
            this.state.editMode
                ? <input onBlur={this.editModeOff.bind(this)} autoFocus={true} value={this.props.status}/>
                : <p onDoubleClick={this.editModeOn.bind(this)}>{this.props.status}</p>
            }</div>
        );
    }
}

export default EditableStatus;
