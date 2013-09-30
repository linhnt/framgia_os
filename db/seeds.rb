M::Food.destroy_all
M::FoodOption.destroy_all
Turn.destroy_all
f = M::Food.create(name: "Cà phê（コーヒー）", price: 14000, url: "http://kienthucgiadinh.com.vn/data/article/mainimages/original/article_50698.jpg")
f.m_food_options << M::FoodOption.create(name: "Nâu ít sữa（ミルク少量）")
f.m_food_options << M::FoodOption.create(name: "Nâu nhiều sữa（ミルク多量")
f.m_food_options << M::FoodOption.create(name: "Đen không đường（ミルク無し、砂糖なし）")
f.m_food_options << M::FoodOption.create(name: "Đen đường（ミルク無し、砂糖有り）")
f = M::Food.create(name: "Sữa chua（ヨーグルト）", price: 17000, url: "http://web.tin.vn/CKFinderJava/userfiles/images/sua-chua-mit-01.jpg")
f.m_food_options << M::FoodOption.create(name: "Có mít　（ミット有り）")
f.m_food_options << M::FoodOption.create(name: "Không mít（ミットなし）")
Turn.create(des: "First turn")
