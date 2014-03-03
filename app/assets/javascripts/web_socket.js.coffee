#jQuery ->
#  window.chatController = new Chat.Controller($('#__chat_container').data('url'), true);

window.Chat = {}

class Chat.User
  constructor: (@user_name) ->
  serialize: => { user_name: @user_name }

class Chat.Controller

  constructor: (url,useWebSockets) ->
    @dispatcher = new WebSocketRails(url,useWebSockets)
    console.log('connect')
    @dispatcher.on_open = @createGuestUser 
    @bindEvents()

  bindEvents: =>
    @dispatcher.bind 'new_message', @newMessage
    @dispatcher.bind 'player2_joined', @newPlayer
    # $('#send').on 'click', @sendMessage

  newMessage: (message) =>
    console.log('newMessage')
    #@appendMessage message

  newPlayer: (message) =>
    set_player(2,message.name)
    #@appendMessage message

  sendMessage: (event) =>
    console.log('sendMessage')
    event.preventDefault()
    message = "test send websocket"
    @dispatcher.trigger 'new_message', {user_name: @user.user_name, msg_body: message}

  appendMessage: (message) ->
    messageTemplate = @template(message)
    $('#__histories').prepend messageTemplate

  createGuestUser: =>
    console.log('createGuestUser')
    
    @user = new Chat.User($('#__current_user').data('user') + "")
    @dispatcher.trigger 'new_user', @user.serialize()

  template: (message) ->
    html =
      """
      <li>
        <img class="gravatar" src="https://secure.gravatar.com/avatar/012b99e0db096f19a89c1ca1252b569c" alt="#{message.user_name}"></img>
        <a href="/users/2">#{message.user_name}</a>
        <span class="content">#{message.msg_body}</span>
        <span class="timestamp">#{message.received}</span>
      </li>
      """
    $(html)
