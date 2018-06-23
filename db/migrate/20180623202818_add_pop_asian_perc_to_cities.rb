class AddPopAsianPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :pop_asian_perc, :float
  end
end
