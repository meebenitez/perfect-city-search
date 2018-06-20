class AddIndVotePercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :ind_vote_perc, :float
  end
end
