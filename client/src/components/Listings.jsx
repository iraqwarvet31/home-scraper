import React from "react";

const Listings = ({ listings }) => {
  const apartmentList = listings.map((listing, i) => (
    <tr key={i}>
      <td>{listing.name}</td>
      <td>{listing.address}</td>
      <td>{listing.price}</td>
      <td>{listing.size}</td>
      <td><i className="material-icons">favorite_border</i></td>
    </tr>
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
// const Listings = ({ listings }) => {
//   const apartmentList = listings.map((place, i) => (
//     <li key={i} className="collection-item listItem" >
//       <div>
//         <span>{place.name}</span>
//       </div>
//       <div>
//         <span>{place.address}</span>
//       </div>
//       <div>
//         <span>{place.price}</span>
//       </div>
//       <div>
//         <span>{place.size}</span>
//       </div>
//     </li>
//   ))
//   return (
//     <div className="list">
//       <ul className="collection with-header">
//       <li className="collection-header">Apartments</li>
//         { apartmentList }
//       </ul>
//     </div>
//   )
// }

export default Listings;
