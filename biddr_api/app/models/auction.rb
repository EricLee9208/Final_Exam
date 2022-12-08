class Auction < ApplicationRecord

    has_many :bids, dependent: :destroy
    belongs_to :user
    validates :title, presence: {message: "Must input Title"}
    validates :description, presence: {message: "Must input description"}
    validates :price, numericality: {greater_than_or_equal_to: 0}
end
