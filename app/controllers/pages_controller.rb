class PagesController < ApplicationController
  def index
  end

  def create_pic
    a = Image.new
    a.meme_data_filename = SecureRandom.urlsafe_base64 + '.png'
    a.meme_data_mimetype = 'image/png'
    a.meme_data_uri = params[:picture]
    a.save
    @src = "http://ae-meme.herokuapp.com" + a.meme.url
    # @src = a.meme.url
    render :create_pic
  end


end