class Api::V1::AuthController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      payload = {id: user.id}

      token = JWT.encode(payload, 'secret', 'HS256')
      render json: { id: user.id, username: user.username, token: token}
    else
      render json: { error: 'invalid username or password' }
    end
  end

  def show
    token = request.headers['Authorization'].split(' ')[1]
    decoded_token = JWT.decode token, 'secret', true, { algorithm: 'HS256' }
    user_id = decoded_token[0]['id']
    user = User.find(user_id)

    if user
      render json: { id: user.id, username: user.username, token: token}
    else
      render json: { error: 'invalid token' }
    end

  end
end
























































  # def create
    # user = User.find_by(username: params[:username])
    # if user && user.authenticate(params[:password])
      # token = JWT.encode({user_id: user.id}, 'secret', 'HS256')
      # render json: { id: user.id, username: user.username, token: token}
    # else
      # render json: { error: 'Not Authorized'}, status: 401
    # end
  # end

  # def show
    # token = request.headers[:Authorization]
    # decoded_token = JWT.decode token, 'secret', true, { algorithm: 'HS256' }
    # user_id = decoded_token.first['user_id']
    # user = User.find(user_id)
    # if user
      # render json: { id: user.id, username: user.username, token: token }
    # else
      # render json: { error: 'Not Authorized'}, status: 401
    # end
  # end
