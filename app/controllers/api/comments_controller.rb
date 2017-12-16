class Api::CommentsController < ApplicationController
  before_action :set_comments, only: [:show, :update, :destroy]
  before_action :set_post

  def index
    render json: @posts.comments.all
  end

  def show
    render json: @comments
  end

  def create
    @comment = @posts.comments.new(comment_params)
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessible_entity
    end 
  end 

  def update
    if @comment.update(comment_params)
      render json: @comment
    else 
      render json: @comment.errors, status: :unprocessible_entity

  end

  def destroy
    @comment.destroy
  end

  private

  def set_post 
    @posts = Post.find(params[:post_id])
  end 


  def set_comments
    @comments = Comment.find(params[:id])
  end 

  def comment_params
    params.require(:comment).permit(:message)
  end 

end
