Rails.application.routes.draw do
  devise_for :staffs, controllers: { sessions: "staffs/sessions"}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
