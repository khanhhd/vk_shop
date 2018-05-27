class Staffs::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    staff = Staff.find_by(email: params[:session][:username])
    if staff && staff.valid_password?(params[:session][:password])
      staff.generate_token && sign_in(staff)
    end
    render json: {status: 200, token: staff.authentication_token}
  end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
