class AddCommutersWalkersPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :commuters_walkers_perc, :float
  end
end
