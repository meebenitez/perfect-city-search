class AddPopWhitePercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :pop_white_perc, :float
  end
end
