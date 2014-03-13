class Matrixgame < ActiveRecord::Base
  scope :visible, ->{where(visibility: true)}
  scope :default_sort, ->{order "created_at DESC"}
end
