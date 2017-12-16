class Api::ProductsController < ApplicationController
  before_action :set_bio, only: [:show, :update, :destroy]

  # GET /api/products
  def index
    @bio = Bio.all

    render json: @bio
  end

  # GET /api/products/1
  def show
    render json: @bio
  end

  # POST /api/products
  def create
    @bio = Bio.new(product_params)

    if @bio.save
      render json: @bio, status: :created
    else
      render json: @bio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/products/1
  def update
    if @bio.update(product_params)
      render json: @bio
    else
      render json: @bio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/products/1
  def destroy
    @bio.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bio
      @bio = bio.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def bio_params
      params.require(:bio).permit(:name, :description, :price, :department)
    end
end
