class AddEducationPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :education_perc, :float
  end
end
