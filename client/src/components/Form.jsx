import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getListings(this.state)
  }

  render() {
    return (
      <div>
        <input
          value={this.state.city}
          placeholder="Enter city"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Find!</button>
      </div>
    )
  }
}

export default Form