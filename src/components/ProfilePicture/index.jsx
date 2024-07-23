import defaultImg from '../../assets/img/host.svg'

//line break between name and last name
function linebreak(text) {
  return text.replace(' ', '\n')
}

//displays default profile picture on error
function ProfilePicture({ picture, name }) {
  const imgErrorHandler = (e) => {
    e.target.src = defaultImg
  }

  return (
    <div className="profile">
      <p>{linebreak(name)}</p>
      <img src={picture} alt={name} onError={(e) => imgErrorHandler(e)} />
    </div>
  )
}

export default ProfilePicture