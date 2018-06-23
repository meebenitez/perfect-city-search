class AddPopMixedRacePercToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :pop_mixed_race_perc, :float
  end
end
