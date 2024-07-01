const Card = ({ company }) => {

    const url = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3p032_GtbaC6MzJ7tQQYoWEkCeORnogDPg&s`;
    
  return (
      <div className="col-md-9 mb-4">
            <div className="card">
              <img src={url} alt={company.name} className="card-img-top" 
                style={{ width: "100px" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{company.name}</h5>
                    <p className="card-text">{company.location}</p>
                </div>
            </div>
    </div>
  )
}

export default Card;