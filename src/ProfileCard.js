function ProfileCard({name, intro, image, handle}) {
  return <>
  <div className="card">
    <div className="card-image">
      <figure className="image is-1by1">
        <img src={image} alt={name} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media-content">
        <p className="title is-4">{name}</p>
        <p className="title is-6">{intro}</p>
        <p className="title is-6">{handle}</p>
      </div>
    </div>
      
  </div>
  
  </>
}

export default ProfileCard;
