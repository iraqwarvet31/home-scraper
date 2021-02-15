import React from 'react';
import axios from 'axios';

import Form from './Form.jsx'
import Listings from './Listings.jsx'

// var arr = [
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   },
//   {
//     name: 'larry',
//     address: '333 esx st',
//     price: '$53.00',
//     size: '3 bedrooms'
//   }
// ]
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
      this.setState({ listings: response.data })
    })
  }

  render() {
    return (
      <div>
        <h1>Srape My Home</h1>
        <Form getListings={this.getListings} />
        <Listings listings={this.state.listings} />
      </div>
    )
  }
}
export default App

