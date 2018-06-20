class AddGopVoteCountToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :gop_vote_count, :integer
  end
end
