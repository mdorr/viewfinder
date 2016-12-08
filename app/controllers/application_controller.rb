class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  before_filter :set_p3p

  def logged_in?
    return current_user ? true : false
  end

  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def log_in!(user)
    session[:session_token] = user.session_token
  end

  def log_out!
    current_user.reset_session_token if current_user
    session[:session_token] = nil
  end

  private
  # for IE, Facebook, and iframe sessions
  def set_p3p
    headers['P3P'] = 'CP="ALL DSP COR CURa ADMa DEVa OUR IND COM NAV"'
  end

end
