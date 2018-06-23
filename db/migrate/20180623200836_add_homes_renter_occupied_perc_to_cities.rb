class AddHomesRenterOccupiedPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :homes_renter_occupied_perc, :float
  end
end
