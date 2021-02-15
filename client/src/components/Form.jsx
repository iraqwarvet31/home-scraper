import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: '',
      state: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    this.props.getListings(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
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
          />
          <button type="submit">Find!</button>
        </form>
      </div>
    )
  }
}

export default Form