class CreateHhs < ActiveRecord::Migration
  def change
    create_table :hhs do |t|

      t.timestamps null: false
    end
  end
end
