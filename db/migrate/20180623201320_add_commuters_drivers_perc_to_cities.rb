class AddCommutersDriversPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :commuters_drivers_perc, :float
  end
end
