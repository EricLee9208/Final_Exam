class BidsController < ApplicationController
    before_action :find_auction

    def create
        @bid = Bid.new(bid_params)
        @bid.auction = @auction
        @bid.user = current_user 
        if @bid.save
            redirect_to @auction
        end
    end

    private
    def find_auction
        @auction = Auction.find params[:auction_id]
      end

      def bid_params
        params.require(:bid).permit(:price)
     end
end
