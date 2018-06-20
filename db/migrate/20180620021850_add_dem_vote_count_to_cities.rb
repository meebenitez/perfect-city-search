class AddDemVoteCountToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :dem_vote_count, :integer
  end
end
