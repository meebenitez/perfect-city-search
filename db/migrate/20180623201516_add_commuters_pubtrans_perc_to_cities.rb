class AddCommutersPubtransPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :commuters_pubtrans_perc, :float
  end
end
