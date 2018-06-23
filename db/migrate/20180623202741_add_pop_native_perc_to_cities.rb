class AddPopNativePercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :pop_native_perc, :float
  end
end
