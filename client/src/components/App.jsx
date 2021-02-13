import React from 'react';

import Form from './Form.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Find My Home</h1>
        <Form />
      </div>
    )
  }
}
export default App