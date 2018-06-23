class AddCommutersCarpoolersPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :commuters_carpoolers_perc, :float
  end
end
