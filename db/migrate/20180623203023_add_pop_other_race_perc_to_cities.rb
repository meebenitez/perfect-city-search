class AddPopOtherRacePercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :pop_other_race_perc, :float
  end
end
