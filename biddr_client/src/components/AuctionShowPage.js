import AuctionDetails from "./AuctionDetails"
import {Auction} from '../requests'
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import BidList from './BidList'
import NewBidForm from './NewBidForm'


export function withRouter(Children){
  return(props)=>{
    const match = { params: useParams() }
    return <Children {...props} match= {match} />
  }
}



const AuctionShowPage = (props)=> {
const [auction, setAuction] = useState({})

//console.log(props.match);
useEffect(() => {
  Auction.show(props.match.params.id)
  .then(fetchedAuction=>{
    setAuction(fetchedAuction)
 
  })

}, [])




  const deleteBid = (id) => {
    const {reviews, ...rest} = auction
    setAuction({
      reviews: reviews.filter(r => r.id !== id), ...rest
    })
  }
  return(
            <main>
                <AuctionDetails 
                title={auction.title}
                description={auction.description}
                price={auction.price}
                created_at={auction.created_at}
                end_date={auction.end_date}
                author={auction.author_full_name}
    
                />
               
  
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <br/>
      <NewBidForm/>
      <h4 style={{marginTop: '5vh'}}><u>Previous Bids</u></h4>
              
      </div>
      <div class="col-sm">

      </div>
    </div>
    
  </div>
  
            <BidList
            bids = {
              auction.bids
            }
            deleteBid={(id)=>deleteBid(id)}
            />
            </main>
    
        )


}

export default withRouter(AuctionShowPage)