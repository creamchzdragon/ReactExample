import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //constructor- initializes state variables
  constructor(props){//more on props to come later
    super(props);
    this.state={//this is how you init state varaibles
      size:1,//create a size varaible to determine the size of our text
      temp:this.props.temp//Another Variable, this one uses the props passed into this object when it was created.
    }
  }
  componentDidMount(){
    fetch("/Hello/Tyler")//retrieves information from this url
    .then((res)=>{return res.text()})//transforms it to text, well be using json so that .text() becomes .json()
    .then(text=>this.setState({temp:text}))//set temp to the new text
    .then(console.log(this.state.temp));
    
    
    //stub method, this gets call after the component is finished we will use this for RESTful calls
  }
  //increate size of state variable by x
  increase=(x)=>{
    this.setState({// a setState method is inherited by all React Components and is used to change state variables
      size:this.state.size+x//set the state varaible much like the original dictionary/JSON but you can call itself with this.state.size
    });						//setState is special because it refreshed the page when it is called.
  }
  //decrease size state variable by x
  decrease=(x)=>{
    this.setState({
      size:this.state.size-x
    });
  }
  //render function, this is the HTMl that this component will generate.
  render() {
    //regular javascript code can be used here for preprocessing of variables for use in the HTML
    var myStyle={fontSize:this.state.size+'px'};//set style dictionary for use later, use of state variable 
    var l=["apples","oranges","bananas","grapes","the other fruits"];//set list for use later
    var exclamations="";
    for(var i=0;i<this.state.size;i+=10){//a normal for loop
      exclamations+="!";
    }
    
    return (
      <div className="App">
        <p>{this.state.temp}</p>
        <font>{this.state.size/*using variable within html*/}</font>
        <div className="buttons">
          {this.state.size>0?<input type="button" id="increase" onClick={()=>this.decrease(this.state.size)} value="0"/>:null /*Example of Condition statement within html*/}
          {this.state.size>0?<input type="button" id="increase" onClick={()=>this.decrease(1)} value="-"/>:null}
          <input type="button" id="decrease" onClick={()=>this.increase(1)/*assigning a function within html; onClick is a function that runs when this element is clicked or tapped on*/} value="+"/>
          <input type="button" id="decrease" onClick={()=>this.increase(5)} value="++"/>
          
        </div>
        <p style={myStyle}/*the style dictionary has been used here to set the size of this element to the state variable size*/>Hello World{exclamations/*we used the variable we create earlier to be an annoying as possible*/}</p>
        {l.map(function(fruit,i){/*here is how we do a for loop within our code to generate more html based on some variable*/ 
           return <p key={i}>{i}:{fruit}</p>
          }

          )

          }
      </div>
    );
  }
}

export default App;
