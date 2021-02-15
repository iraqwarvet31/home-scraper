import React from "react";
import M from "materialize-css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      state: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.props.getListings(this.state);
    this.setState({ city: "", state: "" });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s1">
              <input
                name="city"
                type="text"
                value={this.state.city}
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s1">
              <input
                name="state"
                type="text"
                value={this.state.state}
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="city">State</label>
            </div>
          </div>
          {/* <input
            name="city"
            type="text"
            value={this.state.city}
            placeholder="Enter city"
            onChange={this.handleChange}
          />
          <input
            name="state"
            type="text"
            value={this.state.state}
            placeholder="Enter state"
            onChange={this.handleChange}
          /> */}
          <button className="waves-effect waves-light red btn" type="submit">
            Find!
            <i className="material-icons right">cached</i>
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
