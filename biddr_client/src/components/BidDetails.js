import React from 'react'


const BidDetails = ({price, created_at, author, deleteBid}) => {
return(
    <div class="container">
        
        <div class="row">
            <div class="col-sm">
                
                <p>${price} on {new Date(created_at).toLocaleDateString()}</p>
            </div>
            <div class="col-sm">

            </div>
        </div>
    </div>

)

}

export default BidDetails