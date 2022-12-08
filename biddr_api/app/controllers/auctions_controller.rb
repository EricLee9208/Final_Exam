class AuctionsController < ApplicationController
    before_action :find_auction, only: [:edit, :update, :show, :destroy]
 def new   
    @auction = Auction.new
end

def create
   
    @auction = Auction.new(auction_params)
    @auction.user = current_user
    if @auction.save
         
        #ProductMailer.new_product(@auction).deliver_now

        flash[:success] = "Question successfully created"
         redirect_to @auction
                #same thing as = product_path(@auction.id), but just shorter
    else
        flash[:error] = "Something went wrong"
        render 'new', status: 303
            #same as :new, firing new method
     end
end

def index
    @auctions = Auction.order(created_at: :desc)
end

def show
    @bids = @auction.bids.order(created_at: :desc)
    @bid = Bid.new
    # @reviews = @product.reviews.order(created_at: :desc)
end


private
def find_auction
    @auction = Auction.find params[:id]
end

    def auction_params
        params.require(:auction).permit(:title, :description, :price, :end_date)
    end
end
