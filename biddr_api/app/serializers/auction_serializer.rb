class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :end_date, :created_at, :updated_at, :author_full_name
  def author_full_name
    object.user&.full_name
  end

  belongs_to :user, key: :seller

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :full_name
    
  end

  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at, :author_full_name

    def author_full_name
      object.user&.full_name
    end
  end
end
