class AddPopLatinHispanicPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :pop_latin_hispanic_perc, :float
  end
end
