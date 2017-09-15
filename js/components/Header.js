import React from "react";

export default class Header extends React.Component{

handleChange(e){
const title=e.target.value;
this.props.changeTitle(title);
}
  render(){
    //this.props.changeTitle("new Title");
    return (
      <div>
      <header>Header {this.props.title}</header>
      <input onChange={this.handleChange.bind(this)} ></input>
</div>
    )
  }
}
