import React, {useState , useEffect} from 'react';
import './App.css';

function App() {
  return (
    <div className="container"> 
      <h1> Hello world </h1>
      <Function initNumber={2}></Function>
      <ClassComp initNumber={2}></ClassComp>
    </div>
    
  );
}
var funcStyle='color:blue';
var funId = 0;
function Function(props){
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState((new Date()).toString());
  // var date = dateState[0];
  // var setDate = dateState[1];

  var [date , setDate] = useState((new Date()).toString());
  document.title =date;

  useEffect(function(){
    console.log()
    console.log('%cfunc => useEffect ' + (funId),funcStyle);
    
  })

  

  console.log('numberState',numberState);
  console.log('%cfunc => render ' + (++funId),funcStyle);
  return(
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input type = "button" value = "random" onClick={
          function(){
            setNumber(Math.random())
          }
        }></input>
       <input type = "button" value = "date" onClick={
          function(){
            setDate((new Date()).toString())
          }
         }></input>
    </div>
  );
  
}
var classStyle = 'color:red';
class ClassComp extends React.Component{
  state = {
    number : this.props.initNumber,
    date:(new Date()).toString()
  }

  
  componentDidMount(){
    console.log('%cclass => componentDidMount',classStyle);
  }
  render(){
    console.log('%cclass => render',classStyle);
    return(
      <div className = "container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type = "button" value = "random" onClick={
          function(){
            this.setState({
              number:Math.random()
            })
          }.bind(this)
        }></input>
        <input type = "button" value = "date" onClick={
          function(){
            this.setState({
              date:(new Date()).toString()
            })
          }.bind(this)
        }></input>
      </div>

    )
  }
}

export default App;
