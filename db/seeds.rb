M::Food.destroy_all
M::FoodOption.destroy_all
f = M::Food.create(name: "Cà phê", price: 14000, url: "http://kienthucgiadinh.com.vn/data/article/mainimages/original/article_50698.jpg")
f.m_food_options << M::FoodOption.create(name: "Nâu ít sữa")
f.m_food_options << M::FoodOption.create(name: "Nâu nhiều sữa")
f.m_food_options << M::FoodOption.create(name: "Đen không đường")
f.m_food_options << M::FoodOption.create(name: "Đen đường")
f = M::Food.create(name: "Sữa chua", price: 17000, url: "http://web.tin.vn/CKFinderJava/userfiles/images/sua-chua-mit-01.jpg")
f.m_food_options << M::FoodOption.create(name: "Có mít")
f.m_food_options << M::FoodOption.create(name: "Không mít")
