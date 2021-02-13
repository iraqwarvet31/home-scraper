import React from 'react';
import Axios from 'axios';

import Form from './Form.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.getListings = this.getListings.bind(this);
  }

  getListings(city) {
    // axios.post()
    axios
  }

  render() {
    return (
      <div>
        <h1>Find My Home</h1>
        <Form getListings={this.getListings} />
      </div>
    )
  }
}
export default App