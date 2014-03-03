class Matrixgame < ActiveRecord::Base
  scope :visible, ->{where(visibility: true)}
end
