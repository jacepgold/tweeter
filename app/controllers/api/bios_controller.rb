class Api::BiosController < ApplicationController
  before_action :set_bio, only: [:show, :update, :destroy]

  def index
    render json: current_user.bio
  end

  def show
    render json: @bio
  end

  def create
    @bio = Bio.new(product_params)

    if @bio.save
      render json: @bio, status: :created
    else
      render json: @bio.errors, status: :unprocessable_entity
    end
  end

  def update
    if @bio.update(product_params)
      render json: @bio
    else
      render json: @bio.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @bio.destroy
  end

  private
    def set_bio
      @bio = bio.find(params[:id])
    end

    def bio_params
      params.require(:bio).permit(:image, :description)
    end
end
