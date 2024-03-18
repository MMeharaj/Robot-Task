import { useParams } from 'react-router-dom';
import "../assetsandstyles/style.css";
const UserDetails = (props) => {
  const { firstName, email } = useParams(); 
  console.log("firstName", firstName)
  
  return (
    <div className='robo-friend'>
        <div className='robo'>
          <img src={`https://robohash.org/${firstName}`} alt={`Robot `} />
          <h2>{`${firstName}`}</h2>
          <p>{`${email}`}</p>
        </div>
      
    </div>
  );
};

export default UserDetails;