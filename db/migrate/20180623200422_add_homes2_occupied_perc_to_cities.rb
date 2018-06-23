class AddHomes2OccupiedPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :homes2_occupied_perc, :float
  end
end
