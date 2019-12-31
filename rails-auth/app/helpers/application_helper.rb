module ApplicationHelper
  def say_hi
    p "HELLO!!!!!!!!!!!"
  end

  # Tell me if someone is logged in
  def logged_in?
    !!current_user
  end

  # Tell me who is logged in
  def current_user
    @_current ||= User.find_by(id: session[:user_id])
  end

  def authorize!
    # Basic basic basic! Are you logged in? Would you like to?
    redirect_to login_path if !logged_in?
  end

  def authorize_viewing_self!
    # p current_user
    # p params[:id]
    # p current_user.id
    flash[:message] = "Nice try bucko, but that ain't you"
    redirect_to profile if current_user.id.to_s != params[:id]
  end

  def flash_message
    @_msg ||= flash[:message]
  end
end
