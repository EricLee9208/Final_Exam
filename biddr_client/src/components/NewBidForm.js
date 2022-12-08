import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Bid, User } from "../requests";
import { Auction } from "../requests";
import {useNavigate} from 'react-router-dom'
import AuctionShowPage from "./AuctionShowPage";


const NewBidForm = () => {
    const id = useParams()
    const [price, setPrice] = useState({})
 const navigate = useNavigate()
 const [auction, setAuction] = useState({})
console.log(id.id);





    const handleSubmit = (event) => {
        event.preventDefault();
        User.current().then(user=>{
            // console.log(user);
            if(user == null){
            navigate('/sign_in')
        } else{
            // console.log('handleSubmit Ran');
            
           Bid.create(id.id,{
            price: price,
            created_at: new Date(),
            
           })
           .then(()=>{
            window.location.reload(false)
           })
        }
        }) 
        // console.log("price", price);
    }
    return(
    
        <form onSubmit={handleSubmit}>
       
        <div class="row">
            <div class="col">
            <input class="form-control" type="number" name="price" id="" onChange={event => setPrice(event.target.value)}/>
            </div>
    
       
            <div class="col">
            <input type="submit" value="Enter Bid" class="btn btn-secondary"/>
            </div>    
       
        </div>
    </form>
    
    )
}
export default NewBidForm