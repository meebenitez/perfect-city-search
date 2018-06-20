class AddIndVoteCountToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :ind_vote_count, :integer
  end
end
