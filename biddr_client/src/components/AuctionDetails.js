import React from 'react'

const ProductDetails = ({title,description,price,created_at,author,end_date}) =>{
 
    return(
        <div class="container" >
            <div class="row" style={{marginBottom: "2vh"}}>
                <div class="col-sm">
                    <h3> {title} </h3>
                    
                </div>
                <div class="col-sm">
                    
                </div>
            </div>
            

            <div class="row">
                <div class="col-sm">
                   
                    <p> Description: {description} </p>
                </div>
                <div class="col-sm">
                    <p> Price: ${price} </p>
                    <p> End At: {end_date}</p>
                    <p> Reserve Price Not Met</p>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetails