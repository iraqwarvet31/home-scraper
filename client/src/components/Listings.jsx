import React from "react";

import Listing from './Listing.jsx'

const Listings = ({ listings }) => {
  const apartmentList = listings.map((listing, i) => (
    <Listing key={i} index={i} listing={listing}/>
  ));
  return (
    <div className="table-container responsive-table">
      <table className="highlight centered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
            <th>Size</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {apartmentList}
        </tbody>
      </table>
    </div>
  );
};

export default Listings;
