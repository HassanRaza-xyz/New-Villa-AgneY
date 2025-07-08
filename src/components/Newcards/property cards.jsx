function PropertyCard(props) {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
      <div className="card">
        <img src={props.image} className="card-img" alt="Property Pic" />
        <p className="luxury">{props.type}</p>
        <div className="card-body">
          <h4 className="card-title">{props.address}</h4>
          <p className="card-text">
            Bedrooms: <b>{props.bedrooms}</b> &nbsp; Bathrooms: <b>{props.bathrooms}</b><br /><br />
            Area: <b>{props.area}</b> &nbsp; Floor: <b>{props.floor}</b><br /><br />
            Parking: <b>{props.parking}</b>
          </p>
          <p className="text-muted">Schedule a Visit</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
