import { Auction } from "../requests"
import background from '../auction3.jpeg'
const HomePage = () => {
    return(
       
       <div 
       style={{
        backgroundImage: `url(${background})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      >
        <h1>
           Going twice. Going once.
           <br></br>
           Sold to Biddr!
        </h1>
        
        </div>
   
    )
}
export default HomePage