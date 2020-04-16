import React from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends React.Component {

  renderTable=()=>{
    
    const table=[10];
    const n=5;
      for(var i=1;i<11;i++)
      {
        table.push(n+" X "+i+" = "+n*i);
      }
    return(table)
  }
    render(){
    const number=5;
    return (
      <div>
        <h1>Multiplication Table of number 5</h1>
        <table>
          <tbody>            
            {this.renderTable()}
          </tbody>
        </table>
        
      </div>
    );
}
}
render(<App />, document.getElementById('root'));
