import React from 'react';
import axios from 'axios';

import Form from './Form.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listings: [],
    }
    this.getListings = this.getListings.bind(this);
  }

  getListings(location) {
    console.log('ran')
    axios.post('/api/apartments', location)
    .then((response) => {
      console.log(response)
    })
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