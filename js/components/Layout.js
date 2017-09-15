import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class Layout extends React.Component{


constructor(){
  super();
  this.state={title: "Welcome"};
}
changeTitle(title){
  this.setState({title});
}
  render(){

//const title="Welcome here !";
setTimeout(() => {
  this.setState({surname : "John"});
},1000)
    return(
      <div>
      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
          <h1> Hi My name is {this.name}</h1>
          <h1>MY surname is {this.state.surname}</h1>
          <Footer/>
      </div>

    );
  }
}
