import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtext: "",
      output: ""
    };
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  colorize = e => {
    const data = {
      data: this.state.inputtext
    };
    axios
      .post("http://localhost:3000/colorizer/generate", data)
      .then(res => {
        this.setState({ output: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <br></br>
        <label htmlFor="inputtext">Input Text</label>
        <br></br>
        <textarea
          value={this.state.inputtext}
          onChange={e => {
            this.updateInput(e);
          }}
          rows="20"
          cols="50"
          id="inputtext"
          name="inputtext"
        ></textarea>
        <br></br>
        <button
          onClick={e => {
            this.colorize(e);
          }}
        >
          Colorize
        </button>
        <br></br>
        <label htmlFor="outputtext">Ouput</label>
        <br></br>
        <div
          id="outputtext"
          dangerouslySetInnerHTML={{ __html: this.state.output }}
        ></div>
      </div>
    );
  }
}

export default App;
