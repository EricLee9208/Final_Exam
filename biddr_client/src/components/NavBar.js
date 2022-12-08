import {NavLink} from 'react-router-dom';
import { Session } from '../requests';
import coin from '../coin4.png'

const NavBar = ({currentUser, onSignOut}) => {


    const handleSignOut = () => {
        Session.destroy().then(()=> {
            onSignOut()
        })
    }

    return(
<nav class="navbar navbar-expand-lg bg-light navbar-dark">

    <div class="container-fluid">
      
        <a class="navbar-brand" href="/"><img src={coin} width="50" height="50"/> </a>

       
        <ul class="navbar-nav d-flex flex-row me-1">
            <li class="nav-item me-3 me-lg-0">
            <span class="nav-link text-black"><NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</NavLink></span>
            </li>

            <li class="nav-item me-3 me-lg-0">
            <span class="nav-link text-black"><NavLink to='/auctions' style={{ textDecoration: 'none', color: 'black' }}>Auction Index</NavLink></span>
            </li>
            {
                currentUser ? (
                    <>
              <li class="nav-item me-3 me-lg-0">
                <span class="nav-link text-black"><NavLink to='/auctions/new' style={{ textDecoration: 'none', color: 'black' }}>New Auction</NavLink></span>
              </li>
                    
            <li class="nav-item me-3 me-lg-0">
            <span class="nav-link text-black" style={{ textDecoration: 'none', color: 'black' }}>Welcome, { currentUser.first_name}</span>
            
            </li>
            <li class="nav-item me-3 me-lg-0">
            <button class="nav-link text-black btn btn-secondary" onClick={handleSignOut}> Sign Out</button>
            </li>
                    {/* <span>Welcome, { currentUser.first_name}</span>
                    <button onClick={handleSignOut}> Sign Out</button> */}
                   

              
                    </>
                ) : (
                    <>
                    <li class="nav-item me-3 me-lg-0">
                    <span class="nav-link text-black"><NavLink to='/sign_in' style={{ textDecoration: 'none', color: 'black' }}>Sign In</NavLink></span>
                    
                </li>  
                    <li class="nav-item me-3 me-lg-0">
                    <span class="nav-link text-black"><NavLink to='/sign_up' style={{ textDecoration: 'none', color: 'black' }}>Sign Up</NavLink></span>
                    
                </li> 
                </> 
                )
            }
            
            
        </ul>
    </div>

</nav>
        // <nav>
        //     <NavLink to='/'>Home</NavLink>
        //     |
        //     <NavLink to='/auctions'>Auction Index</NavLink>
        //     |
           
        //     |
        //     {
        //         currentUser ? (
        //             <>
        //             <NavLink to='/auctions/new'>New Auction</NavLink>
                    
        //             <span>Welcome, { currentUser.first_name}</span>
        //             <button onClick={handleSignOut}> Sign Out</button>
        //             </>
                    
        //         ) : (
        //             <NavLink to='/sign_in'>Sign In</NavLink>
        //         )
        //     }

        // </nav>
    )
}
export default NavBar