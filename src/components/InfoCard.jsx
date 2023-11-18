export const InfoCard = ({ img, title, text }) => {
  return (
    <div className='info__grid-text'>
      <img src={img} alt='icon-business' />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
