class UsersController < ApplicationController
  before_action :authorize!, except: :new
  # before_action :authorize_viewing_self!, only: [:show, :edit, :update]

  def new
    @user = User.new
  end

  def create
    user = User.new(params.require(:user).permit(:username, :password))
    if user.valid?
      user.save
      redirect_to users_path
      session[:user_id] = user.id
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = current_user
    render :show
  end

  def edit
  end
end
