import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
import Timesheet from "./TimeSheet";
import WorkList from "./WorkList";
//import TimeList from "./TimeList";

class SideBar extends React.Component{
  constructor(props){
     super(props);
    this.login = () => {
      console.log("enter time sheet");
    };
  }

  state = {
    descarray:[],
    timearray:[],
  };


     adddesc = (proinfo) => {
  	 this.setState(prevState => ({
    	descarray: [...prevState.descarray, proinfo],
    }));
  };

    /*addtime = (timeinfo) => {
    this.setState(prevState => ({
      timearray: [...prevState.timearray, timeinfo],
   }));
 };*/


  render(){
    return(
        <section className = "App-header">
      <div className = "Side-bar">

        <label className = "Time">
          <button  onClick={this.login}>TimeSheet</button>
        </label>

        <label>
          <ul>project</ul>
        </label>

        <label>
          <ul>Account</ul>
        </label>

         <label>
          <ul>Logout</ul>
        </label>
        <Timesheet onSubmit={this.adddesc}/>
        <WorkList descarray={this.state.descarray}/>

       

        
</div>
</section>






    );
  }

} 
     

     ReactDOM.render(
      <SideBar/>,
      document.getElementById('root')
    
    );
  

  





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































  

 