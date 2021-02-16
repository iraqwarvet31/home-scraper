import React from 'react';
import axios from 'axios';

import Form from './Form.jsx'
import Listings from './Listings.jsx'

var arr = [
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  },
  {
    name: 'larry',
    address: '333 esx st',
    price: '$53.00',
    size: '3 bedrooms'
  }
]
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listings: arr,
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
    const { listings } = this.state
    return (
      <div>
        <h1>Scrape My Home</h1>
        <Form getListings={this.getListings} />
        {
          listings.length !== 0
          ? <Listings listings={listings} />
          : null
        }

      </div>
    )
  }
}
export default App


