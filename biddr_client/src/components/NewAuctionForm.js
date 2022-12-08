
const NewAuctionForm = (props) => {
    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget)
        props.submitForm(
            {
                title: fd.get("title"),
                description: fd.get("description"),
                price: fd.get("price"),
                end_date: fd.get("end_date"),
                created_at: new Date(),
                
            }
        )
        event.currentTarget.reset()
    }
    return(
        <div style={{marginLeft:'10vw', textAlign:'center', width: '100vh'}}>
        <form onSubmit={getDataAndSubmit} style={{marginTop:"5vh"}}>
          <div class="row mb-3">
            <label htmlFor="title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input type="text" name="title" id="" class="form-control"/>
            </div>    
        </div>
        <div class="row mb-3">
            <label htmlFor="description" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
            <input type="text" name="description" id="" class="form-control"/>
            </div> 
        </div>
        <div class="row mb-3">
            <label htmlFor="price" class="col-sm-2 col-form-label">Price</label>
            <div class="col-sm-10">
            <input type="number" name="price" id="" class="form-control"/>
            </div>
        </div>
        <div class="row mb-3">
            <label htmlFor="end_date" class="col-sm-2 col-form-label">End Date</label>
            <div class="col-sm-10">
            <input type="date" name="end_date" id="" class="form-control"/>
            </div>
        </div>
        <div>
            <input type="submit" value="Create Auction" class="btn btn-secondary" style={{float:"right", width:'30vw'}}/>
        </div>

    </form>
    </div>
    )
}
export default NewAuctionForm