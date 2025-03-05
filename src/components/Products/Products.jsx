import "./products.css";

function Products({ productName, price, color, img }) {
  return (
    <div className="product-card" style={{ borderColor: color }}>
      <img src="{img}" alt="{productName}" className="product-img" />
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">{price}</p>
      <p className="product-color">{color}</p>
    </div>
  );
}

export default Products;
