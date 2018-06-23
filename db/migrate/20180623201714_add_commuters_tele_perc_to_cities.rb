class AddCommutersTelePercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :commuters_tele_perc, :float
  end
end
