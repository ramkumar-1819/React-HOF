import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

class Display extends React.Component{    //class Component
  constructor(){
    super();
    this.state={ userData: [              
      { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
      { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
      { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
      { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
      { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
      ]}
  }
  render(){
    var element= this.state.userData.filter(val=>{return(val.user_type==="Designer")}) //contain array whose designation is designer
    var element1=this.state.userData.filter(val=>{return(val.name.startsWith("J"))})   //Contain array whose name starts with "J"
    var element2=this.state.userData.filter(val=>{return(val.age>28 && val.age<51)})   //contain array whose age is <51 and age>28
    
    return(       
      <div className="display">  

      <div className="main1">{
        this.state.userData.map(val=>{return(
          <div className="details">
          <div>Id:{val.id}</div>
          <div>Name:{val.name}</div>
          <div>Designation:{val.user_type}</div>
          </div>)
        })
      }
      </div>

      <div className="main2">{
        element.map(val=>{return(
          <div className="details">
          <div>Id:{val.id}</div>
          <div>Name:{val.name}</div>
          <div>Designation:{val.user_type}</div>
          </div>)
        })
      }
      </div>

      <div className="main3">{
        element1.map(val=>{return(
          <div className="details">
          <div>Id:{val.id}</div>
          <div>Name:{val.name}</div>
          <div>Designation:{val.user_type}</div>
          </div>)
        })
      }
      </div>

      <div className="main4">{
        element2.map(val=>{return(
          <div className="details">
          <div>Id:{val.id}</div>
          <div>Name:{val.name}</div>
          <div>Designation:{val.user_type}</div>
          </div>)
        })
      }
      </div>

      <div className="main4">{
        <div>
            <div>{this.state.userData.filter(val=>{return val.user_type==="Designer"}).reduce((tot,val)=>{return tot+val.years},0)}</div>
            </div>
      }
      </div>
      
      </div>
    )
  }
}
ReactDOM.render(<Display />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
