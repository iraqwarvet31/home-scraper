import React from 'react';

class Listing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    }
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(name) {
    console.log(name)
    this.setState(state => ({
      isActive: !state.isActive,
    }))
  }
  render() {
    const {name, address, price, size} = this.props.listing
    const {index} = this.props;

    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{address}</td>
        <td>{price}</td>
        <td>{size}</td>
        <td onClick={() => this.toggleFavorite(name)}>
          {
            this.state.isActive
            ? <i className="material-icons">favorite</i>
            : <i className="material-icons">favorite_border</i>
          }
        </td>
      </tr>
    )
  }
}

export default Listing;