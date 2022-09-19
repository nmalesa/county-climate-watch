import birdIcon from '../assets/images/pigeon.svg'

const Header = () => {
  return (
    <div>
        <img className="logo-icon" src={birdIcon} alt="Bird silhouette icon" />
        <h1>County Climate Watch</h1>
    </div>
    
  )
};

export default Header;
