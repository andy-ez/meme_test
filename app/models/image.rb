class Image < ApplicationRecord
  mount_uploader :meme, MemeUploader
end