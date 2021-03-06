Rails.application.routes.draw do

	resources :change_logs
	get 'users/show'

	get 'rooms/result'

	root 'pages#index'
	get 'pages/index'
	get 'pages/user_index'
	get 'pages/user-page/:user_id', to: 'pages#user_page', as: 'user_page'

	get 'communityes/search', to: 'communities#search', as:'community_search'
	get 'communities/:community_id/rooms/:room_id/card_create', to: 'bingo_cards#create', as:'community_room_bingo_cards'
	get 'communities/:community_id/rooms/:room_id/result', to: 'rooms#result', as:'community_room_result'
	get 'communities/:community_id/rooms/:room_id/bingo_cards/:bingo_card_id/result', to: 'bingo_cards#result', as:'community_room_bingo_card_result'
	get 'rooms/new', to: 'rooms#direct_new', as: 'rooms_direct_new'
	post 'rooms/create', to: 'rooms#direct_create', as: 'rooms_direct_create'


	resources :communities do
		resources :rooms do
			resources :bingo_cards, :only => [:show]
		end
	end


	devise_for :users, controllers:{
		registrations: 'users/registrations'
	}
	devise_scope :user do
		post '/users/direct/:source/:community_id/:room_id', to: 'devise/registrations#create', as:'user_registrations_direct_game'
		get '/users/direct/:source/sign_up/:community_id/:room_id/:isGuest', to: 'users/registrations#new', as:'new_user_registrations_direct_game'
		post '/users/direct/:source/sign_in/:community_id/:room_id', to: 'devise/sessions#create', as:'user_session_direct_game'
		get '/users/direct/:source/sign_in/:community_id/:room_id/', to: 'users/sessions#new', as:'new_user_session_direct_game'

		get '/users/direct/:source', to: 'users/registrations#new', as:'new_user_registrations_from_top'
	end
	resources :users, :only => [:show]

	get 'communities/:id/join', to: 'communities#join', as:'join_community'
	get 'communities/:id/leave', to: 'communities#leave', as:'leave_community'
	get 'communities/:id/member_list', to: 'communities#member_list', as:'community_member_list'
	get 'communities/:community_id/rooms/:room_id/pre-join', to: 'rooms#pre_join', as:'pre_join_room'
	get 'communities/:community_id/rooms/:room_id/join', to: 'rooms#join', as:'join_room'
	get 'communities/:community_id/rooms/:room_id/join_auto', to: 'rooms#join_auto', as:'join_room_auto'

	#TOOLS
	# get 'TOOLS/number-generator/:room_id', to: 'rooms#tool_number_generator', as:'tool_number-generator'
	get 'TOOLS/qr-code/:community_id/:room_id', to: 'rooms#tool_qr_code', as:'tool_qr_code'
	get 'TOOLS/bingo-users/:room_id', to: 'rooms#tool_bingo_users', as:'tool_bingo_users'
	get 'TOOLS/notices/:room_id', to: 'rooms#tool_notices', as:'tool_notices'
	get 'TOOLS/bingo-card/:card_id', to: 'bingo_cards#tool_bingo_card', as:'tool_bingo_card'
	get 'TOOLS/others-card/:user_id/:room_id/:card_id', to: 'bingo_cards#tool_others_card', as:'tool_others_card'

	get 'communities/:community_id/rooms/:room_id/number-generator', to:'rooms#tool_number_generator', as:'tool_number-generator'
	get 'communities/:community_id/rooms/:room_id/members', to:'rooms#tool_members', as:'tool_members'

	#API

	#room
	get 'API/get_number', to: 'rooms#get_number',as:'get_number'
	get 'API/get_number_rate', to: 'rooms#get_number_rate',as:'get_number_rate'
	get '/API/get_notices', to: 'rooms#get_notices',as:'get_notices'
	post 'API/add_number', to: 'rooms#add_number',as:'add_number'
	get 'API/check_condition', to: 'rooms#check_condition',as:'check_condition'
	post 'API/start_game', to: 'rooms#start_game',as:'start_game'
	post 'API/game_close', to: 'rooms#game_close',as:'game_close'
	get 'API/game_main/:community_id/:room_id', to: 'rooms#game_main', as: 'game_main'
	get 'API/member_list/:room_id', to: 'rooms#member_list', as: 'member_list'
	get 'API/use_item_tool/:room_id', to: 'rooms#use_item_tool', as: 'use_item_tool'
	get 'API/get_user_notices', to: 'rooms#get_user_notices'

	#bingo-card
	get 'API/check_number', to: 'bingo_cards#check_number',as:'check_number'
	get 'API/uncheck_number', to: 'bingo_cards#uncheck_number',as:'uncheck_number'
	get 'API/get_checked_number', to: 'bingo_cards#get_checked_number',as:'get_checked_number'
	get 'API/get_card_numbers', to: 'bingo_cards#get_card_numbers'
	post 'API/done_bingo', to: 'bingo_cards#done_bingo', as: 'done_bingo'
	get 'API/check_items', to: 'bingo_cards#check_items', as: 'check_items'
	get 'API/check_riichi', to: 'bingo_cards#check_riichi'
	get 'API/:community_id/:room_id/items', to: 'bingo_cards#items', as: 'items'
	get 'API/:community_id/:room_id/bingo_card', to: 'bingo_cards#bingo_card', as: 'bingo_cards'
	get 'API/:community_id/:room_id/get_items/:lines/:riichis/:holes', to: 'bingo_cards#get_items', as: 'get_items'
	get 'API/use_item', to: 'bingo_cards#use_item'
	post 'API/use_item', to: 'bingo_cards#use_item'
	get 'API/use_item_all', to: 'bingo_cards#use_item_all'
	get 'API/member_list_from_card/:room_id', to: 'bingo_cards#member_list'
	post 'API/auto_check', to: 'bingo_cards#auto_check'
	get 'API/get_settings', to: 'bingo_cards#get_settings'
	get 'API/check_first_join', to: 'bingo_cards#check_first_join'

	get 'API/check_rank', to: 'rooms#check_rank'
	get 'API/check_bingo_users', to: 'rooms#check_bingo_users'
	get 'API/joined_users', to: 'rooms#joined_users'

	#community
	get 'API/toggle_administrator', to:'communities#toggle_administrator'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end