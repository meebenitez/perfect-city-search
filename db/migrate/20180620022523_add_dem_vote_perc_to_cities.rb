class AddDemVotePercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :dem_vote_perc, :float
  end
end
