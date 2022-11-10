const Card = ({ name, image }) => {
  const img = image ? image.original : image
  return (
    <div className='card my-4'>
      <img src={img} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
      </div>
    </div>
  )
}

export default Card
