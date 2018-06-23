class AddHomesOwnerOccupiedPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :homes_owner_occupied_perc, :float
  end
end
