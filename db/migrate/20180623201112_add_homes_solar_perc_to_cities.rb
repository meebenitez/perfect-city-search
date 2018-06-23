class AddHomesSolarPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :homes_solar_perc, :float
  end
end
