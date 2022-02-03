import React, { Component } from "react";
import Plan from "./Plan";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


//? Axios Instance
const ai = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
})
class App extends Component {
  state = {
    items: [],
    text: "",
  };

  showPlan = () => {
    ai.get('/list/')
      .then((response) => {
        // console.log(response.data)
        this.setState({ items: response.data })
      })
  }

  addPlan = (data) => {
    if (this.state.text !== "") {
      ai.post('/create/', data)
        .then((response) => {
          this.setState({ text: '' })
          this.showPlan()
        })
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleAdd = e => {
    let data = { item: this.state.text }
    this.addPlan(data)
  }
  
  handleDelete = id => {
    // console.log("Deleted", id);
    ai.delete(`/delete/${id}`)
      .then((response) => {
        this.showPlan()
      })
  }

  componentDidMount() {
    this.showPlan();
  }

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center"> Today's Plan </h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write Plan Here"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-warning px-5 font-weight-bold"
                    onClick={this.handleAdd}
                  >Add</button>
                </div>
              </div>
              <div className="container">
                <ul className="list-unstyled row m-5">
                  {this.state.items.map((value, i) => {
                    return (
                      <Plan key={i} id={value.id} value={value.item} sendData={this.handleDelete} />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
