import React from 'react';
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
var createReactClass = require('create-react-class');
var Hello = createReactClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});


var Counter=createReactClass({

  incrementCount: function(){
    this.setState({
      count: this.state.count+1
    });
  },
  getInitialState: function(){
    return{
      count: 0
    }
  },
  render: function(){
    return(
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
})


var FilteredList=createReactClass({
  filterList: function(event){
    var updatedList=this.state.intialItems;
    updatedList=updatedList.filter(function(item){
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function() {
    return{
      intialItems: [
        "Apples","Broccoli","Chicken","Eggs","Fish","Hash Browns","Banana"
      ],
      items: []
    }
  },
  componentWillMount: function(){
    this.setState({items: this.state.intialItems})
  },
  render : function(){
    return(
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
    );
  }
});
var List=createReactClass({
  render: function(){
    return (
      <ul>
        {
          this.props.items.map(function(item){
            return <li key={item}> {item}</li>
          })
        }
      </ul>
    )
  }
});



const layoutComp=document.getElementById('layout');
ReactDOM.render(<Layout/>, layoutComp);
//ReactDOM.render(<Layout/>,document.getElementById('myDiv') )

//ReactDOM.render(<Hello name="World" />, document.body);

// ReactDOM.render(
//   <Counter/>,
//   document.getElementById('myDiv'));
