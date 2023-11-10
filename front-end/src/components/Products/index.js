import { Component } from "react";

import { Audio } from "react-loader-spinner";
import ProductCard from "../ProductCard";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Products extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    const apiUrl = `http://localhost:5000/products`;
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.products.map((product) => ({
        id: product.products_id,
        name: product.name,
        category: product.category,
        price: product.price,
      }));
      this.setState({
        productsList: updatedData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  renderProductsListView = () => {
    const { productsList } = this.state;
    return (
      <div className="all-products-container">
        <ul className="products-list">
          {productsList.map((product) => (
            <ProductCard productData={product} key={product.products_id} />
          ))}
        </ul>
      </div>
    );
  };

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );

  renderAllProducts = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="all-products-section">{this.renderAllProducts()}</div>
    );
  }
}

export default Products;
