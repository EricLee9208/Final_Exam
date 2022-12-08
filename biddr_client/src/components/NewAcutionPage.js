import {Component} from 'react'
import { Auction } from '../requests'
import NewAuctionForm from './NewAuctionForm'
import {useNavigate} from 'react-router-dom' // this will allow us to redirect to the question that just got created.

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


class NewAuctionPage extends Component{
    constructor(props){
        super(props)
        this.state={
            errors: []
            
        }
    }

    createNewAuction(params){
        // console.log(`Params: ${params.title} ${params.description}`);
        Auction.create(params)
        .then((auction) => {
            console.log(`auction: ${auction}`);
            if (auction.errors){
                this.setState({
                    errors: auction.errors
                })
            } else {
                console.log(this.props);
                this.props.navigate(`/auctions/${auction.id}`)
            
            }
        })
        
    }


    render(){
        return(
            <div>
                <NewAuctionForm errors={this.state.errors} submitForm={(params) => this.createNewAuction(params)}/>
            </div>
        )
    }
}

export default withRouter(NewAuctionPage)


