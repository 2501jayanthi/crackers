import Header from "../Header";
import "./index.css";

const Home = () => (
  <>
    <div className="bg-heading-section">
      <div class="col-md-8 mask heading-container">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/1875969040/display_1500/stock-vector-a-capital-letter-logo-business-company-design-1875969040.jpg"
          alt="website logo"
          className="website-logo"
        />
        <div className="heading-section">
          <h2 class="text-center heading">A1 CRACKERS</h2>
          <p class="lead text-center description ">
            Best Quality Fireworks Online @ Affordable prices in Malkajgiri
          </p>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
    <Header />

    <div className="home-container">
      <img
        src="https://i.pinimg.com/736x/cf/c7/4c/cfc74c969742f6d74cf0569b433875a2.jpg"
        alt="Happy-Diwali"
        className="happy-diwali-img"
      />
      <div className="home-heading-section">
        <h1 className="about-us-heading">About Us</h1>
        <p className="about-us-description">
          A1 Crackers is a Traditional crackers shop Platform. Here we will
          provide you only interesting content, which you will like very much.
          We're dedicated to providing you the best of crackers shop, with a
          focus on dependability and Crackers, Sparklers, Wala Crackers, Bombs,
          Crackling Shots. We're working to turn our passion for crackers shop
          into a booming online website. We hope you enjoy our crackers shop as
          much as we enjoy offering them to you.
        </p>
      </div>
    </div>
  </>
);

export default Home;
