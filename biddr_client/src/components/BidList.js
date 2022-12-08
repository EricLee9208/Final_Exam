
import React from 'react'
import BidDetails from "./BidDetails"

const BidList = ({bids, deleteBid}) => {
return(
    <React.Fragment> 
        { 
        bids ?
        bids.sort(
            (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          ).reverse().map((n,i) => {
            return <BidDetails
            key={i}
            price={n.price}
            created_at={n.created_at}
            author={n.author_full_name}
            deleteBid={()=> deleteBid(n.id)}
            />
        })
        :
        null
        }
     </React.Fragment>
)

}
export default BidList
