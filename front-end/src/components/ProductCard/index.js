import "./index.css";

const ProductCard = (props) => {
  const { productData } = props;
  const { name, category, id, price } = productData;
  return (
    <li className="product-item">
      <div className="product-item-container">
        <h4>{id}</h4>
        <h1>{name}</h1>
        <input type="number" />
        <p>{price}</p>
        <h4>{category}</h4>
        <p>Total</p>
      </div>
    </li>
  );
};

export default ProductCard;
