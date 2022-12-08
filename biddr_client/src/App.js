import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import AuctionIndexPage from "./components/AuctionIndexPage";
import AuctionShowPage from "./components/AuctionShowPage";
import WelcomePage from "./components/WelcomePage"
import {User} from "./requests"
import NavBar from "./components/NavBar";
import NewAcutionPage from "./components/NewAcutionPage";
import SignInPage from "./components/SignInPage";
import NewBidForm from "./components/NewBidForm";
import AuthRoutes from "./components/AuthRoutes";
import SignUpPage from "./components/SignUpPage";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: null
    }
    }
    componentDidMount(){
    
      this.getCurrentUser()
      
    }
    
    getCurrentUser = () => {
      return User.current().then(user=>{
        if (user?.id) {
          this.setState(state=> {
            //console.log(user);
            return {user: user}
            
          })
        }
      })
    }
    
    onSignOut = () => {
      this.setState( { user: null})
    }
  render(){
  return (
   
    <>

   <NavBar currentUser={this.state.user} onSignOut={this.onSignOut} />
   <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route exact path='/auctions' element={<AuctionIndexPage/>}/>
      <Route element={<AuthRoutes isAuthenticated={!!this.state.user} />}>
        <Route exact path="/auctions/new" element={<NewAcutionPage />} />
      </Route>
      {/* <Route exact path="/auctions/bids" element={<NewBidForm />} /> */}
      <Route exact path='/sign_in' element={<SignInPage onSignIn={this.getCurrentUser}/>} />
      <Route exact path='/sign_up' element={<SignUpPage onSignUp={this.getCurrentUser}/>} />
      <Route path='/auctions/:id' element={<AuctionShowPage/>}/>

      
      
    </Routes>
  
  </>
  );
}
}
export default App;
