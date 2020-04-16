import React from "react";
import { render } from "react-dom";
import "./style.css";

class App extends React.Component {
  renderTable = () => {
    const data = [];
    const n = 5;
    for (var i = 1; i < 11; i++) {
      data.push(n + " X " + i + " = " + n * i);
    }
    const table = data.map(t => (
      <tr key={t}>
        <td>{t}</td>
      </tr>
    ));
    return table;
  };
  render() {
    const number = 5;
    return (
      <div align="center">
        <h1>React Multiplication Table of number 5</h1>
        <table>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
