import React, { Component } from 'react';

class ActionButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isGoing: true,
            guestName:'Hồ Thị Phương TÀI',
            course:'react.js',
            message:'Your message here'
        };
    };
    handleInputChange=(event)=>{
        const target=event.target;
        const value=target.type==='checkbox'?target.checked: target.value;
        const name=target.name;

        this.setState({
            [name]:value
        });

    }
    handleSubmit=(event)=>{
        alert('Tham gia:'
          + this.state.isGoing + ',ho ten:'
          + this.state.guestName + ','
          + this.state.course + 'và'
          + this.state.message
        );
        event.preventDefault();
    };

render(){
return (
<form onSubmit={this.handleSubmit}>
    <label>
        Tham gia:
        <input 
        name="isGoing"
        type="checkbox"
        checked={this.state.isGoing}
        onChange={this.handleInputChange}/>
    </label>
    <br />

    <label>
    Ghi rõ họ tên:
    <input 
    name="guestName"
    type="text"
    value={this.state.guestName}
    onChange={this.handleInputChange}/>
</label>
<br/>

<label>
    chọn khóa học:
    <select
    name="Course"
    type="text"
    value={this.state.Course}
    onChange={this.handleInputChange}
    >

    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <optiion value="javascript">JAVASCRIPT</optiion>
    <option value="react.js">REACT.JS</option>
    </select>
</label>
<br/>

<label>
    Message:
    <textarea 
    name="message"
    type="text"
    value={this.state.message}
    onChange={this.handleInputChange}/>
</label>
<br/>
<input type="submit" value="Submit" />
</form>
        )
    }
};

export default ActionButton;