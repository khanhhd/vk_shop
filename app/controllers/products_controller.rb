class ProductsController < ApplicationController
  before_action :find_product, only: [:show, :edit, :update, :destroy]

  def index
    response.headers["X-Total-Count"] = Product.all.size
    render json: Product.all
  end


  def show
    render json: @product
  end

  def edit

  end

  def update

  end


  def destroy

  end

  private
  def find_product
    @product = Product.find_by id: params[:id]
  end
end
