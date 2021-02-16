import React from "react";

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
      <div className="row form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field">
              <input
                name="city"
                type="text"
                value={this.state.city}
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field">
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
