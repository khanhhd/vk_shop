class OrdersController < ApplicationController
  before_action :find_order, only: [:show, :edit, :update, :delete]

  def index
    response.headers["X-Total-Count"] = Order.all.size
    render json: Order.all
    # data trả về phải là mảng
  end

  def show
    # response.headers["X-Total-Count"] = Order.all.size
    # render json: Staff.all
    render json: @order
  end

  def create
    order = Order.create order_params
    render json: {id: order.id}
    # index.js:2178 Warning: Missing translation for key: "Cannot read property 'id' of undefined"

  end

  def update
    @order.update_attributes order_params
    render json: @order
  end

  def edit
  end

  def delete
    @order.destroy
  end

  private
  def order_params
    params.require(:order).permit(:name, :fb_url, :order_time, :phone, :address,
      :size, :product_id, :original_price, :shipping_fee, :total_price, :shipping_code,
      :shipping_method, :order_status, :user_order_info, :note)
  end

  def find_order
    @order = Order.find params[:id]
  end
end
