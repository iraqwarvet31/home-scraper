import React from 'react'

const Listings = ({ listings }) => {
  const apartmentList = listings.map((place, i) => (
    <li key={i}>
      <div>
        <span>{place.name}</span>
      </div>
      <div>
        <span>{place.address}</span>
      </div>
      <div>
        <span>{place.price}</span>
      </div>
      <div>
        <span>{place.size}</span>
      </div>
    </li>
  ))
  return (
    <ul>
      { apartmentList }
    </ul>
  )
}

export default Listings