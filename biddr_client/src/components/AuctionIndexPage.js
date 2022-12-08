import { Component } from "react"
import {Auction} from '../requests'
import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


export const withRouter = WrappedComponent => props => {
    const navigate = useNavigate()
    //etc... other react-router-dom hooks
    return (
        <WrappedComponent 
        {...props}
        navigate={navigate}
        />
    )
}

function AuctionIndexPage()  {


    
    const [auctions, setAuctions] = useState([])

   useEffect(() => {
    Auction.index()
    .then(auctionData => {
        setAuctions(auctionData)
    })
   }, [])
   
   const deleteAuction = (id) => {
    // this.setState({
    //     products: this.state.products.filter(p => p.id != id)
    // })
    Auction.destroy(id)
    .then(()=> {
        Auction.index()
            .then(productData => {
                setAuctions(productData)
            })
        }) 
   }
        return(
            <React.Fragment>
                <h1 style={{backgroundColor: '#f5efd0', textAlign: 'center'}}>AUCTIONS</h1>
            <ul style={{ listStyleType: "none" }}>
            {
                auctions.map((p, i)=>{
                    return(
                        <div style={{ margin: '10px' }}>
                        <li key={i}> <Link to={`/auctions/${p.id}`} style={{ textDecoration: 'none' }}>{p.title}</Link> </li>      
                        <p><small> posted on {new Date(p.created_at).toLocaleDateString()}</small></p>
                        </div>
                )
                    
                })
            
            }
            

              </ul>
              
              </React.Fragment>
               
           
           
        )
    }


export default withRouter(AuctionIndexPage)