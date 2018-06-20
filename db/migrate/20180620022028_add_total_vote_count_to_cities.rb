class AddTotalVoteCountToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :total_vote_count, :integer
  end
end
