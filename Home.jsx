import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-3 fw-bold">Welcome to ChefFoods</h1>
          <p className="lead">Delicious meals delivered to your doorstep!</p>
          <a href="#" className="btn btn-warning btn-lg">Order Now</a>
        </div>
      </div>

      {/* Featured Menu Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Special Dishes</h2>
        <div className="row">
          {[
            {
              img: "https://thumbs.dreamstime.com/b/slice-mushroom-pizza-stringy-cheese-close-up-slice-mushroom-pizza-melted-cheese-showing-stringy-cheese-339575733.jpg",
              title: "Cheesy Pizza",
              text: "A delicious blend of cheese and toppings on a crispy crust.",
            },
            {
              img: "https://thumbs.dreamstime.com/b/juicy-burger-bacon-cheese-fresh-vegetables-sesame-bun-dark-background-345656740.jpg",
              title: "Juicy Burger",
              text: "A classic beef burger with fresh lettuce and sauce.",
            },
            {
              img: "https://chefjackovens.com/wp-content/uploads/2021/11/My-Post-26-1024x536.jpg",
              title: "Creamy Pasta",
              text: "Rich and creamy pasta with fresh herbs and cheese.",
            },
            {
              img: "https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=612x612&w=0&k=20&c=HvuYT3RiWj5YsvP2_pJrSWIcZUXhnTKqjKhdN3j_SgY=",
              title: "South Indian",
              text: "A symphony of spices, crispy dosas, and soul-warming sambar—South India on a plate.",
            },
            {
              img: "https://img.freepik.com/premium-photo/top-view-tray-with-delicious-food_23-2148723446.jpg?semt=ais_hybrid",
              title: "North Indian",
              text: "Rich gravies, tandoori delights, and a burst of bold flavors—North India's finest feasts!",
            },
            {
              img: "https://i2.wp.com/bakerbettie.com/wp-content/uploads/2019/04/layer-cake-4-700x980.jpg",
              title: "Cakes",
              text: "Layers of love, frosted with happiness—every bite is a celebration!",
            },
            {
              img: "https://media.istockphoto.com/id/115808902/photo/tortilla-wraps.jpg?s=612x612&w=0&k=20&c=sLi0PoQIW-DxAkAq90KYAN58_hWJEv2hj4yHv7anMGg=",
              title: "Salads and Wraps",
              text: "Fresh, crisp, and packed with flavor—salads and wraps that nourish and delight!",
            },
            {
              img: "https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60=",
              title: "Chinese",
              text: "A perfect balance of flavors—savor the bold, spicy, and umami-rich taste of authentic Chinese cuisine!",
            },
            {
              img: "https://thumbs.dreamstime.com/b/delicious-display-assorted-desserts-sweet-treats-featuring-colorful-macaroons-ice-cream-sundae-chocolate-milkshake-349201006.jpg",
              title: "Milkshake and deserts",
              text: "Sweet indulgence in every sip and bite—creamy milkshakes and heavenly desserts to satisfy your cravings!",
            },
          ].map((item, index) => (
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <div className="card h-100 shadow-sm">
                <img 
                  src={item.img} 
                  className="card-img-top" 
                  alt={item.title} 
                  style={{ height: "250px", objectFit: "cover" }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text flex-grow-1">{item.text}</p>
                  <a href="#" className="btn btn-primary mt-auto">Order Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-white bg-dark py-3 mt-5">
        <p>© 2025 ChefFoods. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

