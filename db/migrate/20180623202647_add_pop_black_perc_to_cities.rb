class AddPopBlackPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :pop_black_perc, :float
  end
end
