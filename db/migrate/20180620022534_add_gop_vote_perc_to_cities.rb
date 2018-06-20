class AddGopVotePercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :gop_vote_perc, :float
  end
end
