import React from 'react';
import axios from 'axios';

import Form from './Form.jsx'
import Listings from './Listings.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.timeIncrementMs = 50;
    this.showSpinnerIfReturnGreaterThanMs = 200;
    this.state = {
      listings: [],
      isLoading: true,
      msElapsed: 0,
    }
    this.getListings = this.getListings.bind(this);
  }

  // componentWillUnmount() {
  //   clearInterval(this.incrementer);
  // }

  getListings(location) {
    this.incrementer = setInterval(() =>
        this.setState({
            msElapsed: this.state.msElapsed + this.timeIncrementMs
        })
    , this.timeIncrementMs);
    axios.post('/apartmentFinder/listings', location)
    .then((response) => {
      this.setState({ listings: response.data, isLoading: false })
    })
  }

  render() {
    const { listings, isLoading, msElapsed } = this.state
    return (
      <div>
        <h1>Scrape My Home</h1>
        <Form getListings={this.getListings} />
        {
          // listings.length !== 0
          // ? <Listings listings={listings} />
          // : null
          isLoading && msElapsed > this.showSpinnerIfReturnGreaterThanMs
          ? <div className="progress">
              <div className="indeterminate"></div>
            </div>
          : isLoading && msElapsed
          ? null
          : msElapsed
          ? <Listings listings={listings} />
          : null
        }
      </div>
      // <div>
      //   <h1>Scrape My Home</h1>
      //   <Form getListings={this.getListings} />
      //   <Listings listings={listings} />
      // </div>
    )
  }
}
export default App


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
