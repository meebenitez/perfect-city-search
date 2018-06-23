class AddPopPacificPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :pop_pacific_perc, :float
  end
end
