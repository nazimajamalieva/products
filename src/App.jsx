import "./App.css";
import Products from "./components/Products/Products";

function App() {
  const productsList = [
    {
      id: 1,
      name: "Iphone 15",
      price: 70000,
      color: "pink",
      image:
        "https://www.apple.com/newsroom/images/2023/09/apple-offers-more-ways-to-order-the-new-lineups/article/Apple-iPhone-15-lineup-pink_inline.jpg.large_2x.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 100000,
      color: "black",
      image:
        "https://th.bing.com/th/id/OIP.Yz-yhR8sUrAVKCr3EBW0bQHaEK?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Poco X4",
      price: 80000,
      color: "light blue",
      image:
        "https://th.bing.com/th/id/OIP.D8N_hezPHaoyCvzVeLXoaQHaFj?rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      name: "Redmi Note 10",
      price: 30000,
      color: "white",
      image:
        "https://cdn.ksyru0-fusion.fds.api.mi-img.com/b2c-mishop-pms-ru/pms_1615796473.14419046.png",
    },
    {
      id: 5,
      name: "Huawei 30",
      price: 50000,
      color: "violet",
      image:
        "https://waitwhatweb.sgp1.digitaloceanspaces.com/trendtech/wp-content/uploads/2019/11/Mate30-Pro-1.jpeg",
    },
  ];
  const styles = {
    textAlign: "center",
  };

  return (
    <>
      <h1 style={styles}>list of products</h1>
      <hr />
      <div className="wrapper">
        {productsList.map((product) => (
          <Products
            productName={product.name}
            price={product.price}
            color={product.color}
            img={product.image}
            key={product.id}
          />
        ))}
      </div>
      ;
    </>
  );
}

export default App;
