class StaffsController < ApplicationController

  def index
    response.headers["X-Total-Count"] = Staff.all.size
    render json: Staff.all
    # data trả về phải là mảng
  end

  def show
    response.headers["X-Total-Count"] = Staff.all.size
    render json: Staff.all
  end

  def create

  end
end
