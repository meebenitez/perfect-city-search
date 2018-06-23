class AddVetsPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :vets_perc, :float
  end
end
