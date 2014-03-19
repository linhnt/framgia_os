# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140303090950) do

  create_table "auto_orders", force: true do |t|
    t.integer  "user_id"
    t.integer  "m_food_id"
    t.integer  "m_food_option_id"
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "history_clicks", force: true do |t|
    t.integer  "product_click_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "m_food_options", force: true do |t|
    t.integer  "m_food_id"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "m_foods", force: true do |t|
    t.string   "name"
    t.string   "url"
    t.integer  "price"
    t.boolean  "visibility", default: true
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "matrixgames", force: true do |t|
    t.integer  "user1_id"
    t.integer  "user2_id"
    t.boolean  "visibility",  default: true
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user1_score"
    t.integer  "user2_score"
    t.boolean  "done",        default: false
  end

  create_table "orders", force: true do |t|
    t.integer  "m_food_id"
    t.integer  "m_food_option_id"
    t.integer  "quantity"
    t.integer  "user_id"
    t.integer  "turn_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "state",            default: "init"
  end

  create_table "product_auctions", force: true do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer  "m_food_id"
    t.boolean  "auction",    default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "product_autions", force: true do |t|
    t.integer  "m_food_id"
    t.datetime "start_time"
    t.datetime "end_time"
    t.boolean  "auction",    default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "product_clicks", force: true do |t|
    t.integer  "product_id"
    t.integer  "price"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "winer_id"
  end

  create_table "reverse_auctions", force: true do |t|
    t.integer  "price"
    t.integer  "user_id"
    t.integer  "product_auction_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "turns", force: true do |t|
    t.string   "des"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "name"
    t.string   "facebook_id"
    t.integer  "amount",                 default: 0
    t.boolean  "is_admin",               default: false
    t.string   "facebook_link"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["facebook_id"], name: "index_users_on_facebook_id", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
