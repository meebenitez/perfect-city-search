class AddHomes2VacantPercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :homes2_vacant_perc, :float
  end
end
