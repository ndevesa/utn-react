import { useEffect, useState, useContext } from "react";
import { LuPlusCircle } from "react-icons/lu";
import { BsSortNumericDownAlt, BsSortNumericUp } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Cart from "../components/cart/Cart";
import { CartContext } from "../components/cart/CartContext";
import Resume from "../pages/Resume";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(null);
  const [originalProducts, setOriginalProducts] = useState(null);
  const [sorted, setSorted] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setOriginalProducts(products);
      })
      .catch((error) => console.error(error));
  }, []);

  /* Ordenar productos */
  const SortProductsASC = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
    setSorted(true);
  };
  const SortProductsDESC = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
    setSorted(false);
  };

  /* Filtrar por precio con el slider */
  const FilterByPrice = (value) => {
    setPriceRange(value);
    if (value[1] === 1000) {
      setProducts(originalProducts);
    } else {
      const filteredProducts = originalProducts.filter(
        (product) => product.price >= value[0] && product.price <= value[1]
      );
      setProducts(filteredProducts);
    }
  };

  /* Buscar productos */
  const SearchProducts = () => {
    if (searchTerm === "") {
      setProducts(originalProducts);
    } else {
      const filteredProducts = originalProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);

      /* Si la busqueda es nula se muestra el msj en la consola. */
      if (filteredProducts.length === 0) {
        console.log("No se encontraron productos.");
      }
    }
  };

  /* Agregar productos al carrito */
  const AddToCart = (item) => {
    const updatedCart = [...cart, item];
    console.log("Carrito actualizado:", updatedCart);

    setCart(updatedCart);

    addToCart(item);

    <Cart itemCount={cart} />;
    <Resume itemList={updatedCart} />;
  };

  return (
    <div className="container">
      <div className="row border-bottom my-5">
        <div className="col">
          <h1 className="display-6 text-center text-md-start">Our Products</h1>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col">
          <div className="filterNav d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center">
            <div className="sort d-flex gap-2">
              <small>Sort</small>
              <div>
                {sorted ? (
                  <BsSortNumericUp
                    size="25"
                    title="Order ASC"
                    onClick={SortProductsDESC}
                  />
                ) : (
                  <BsSortNumericDownAlt
                    size="25"
                    title="Order DESC"
                    onClick={SortProductsASC}
                  />
                )}
              </div>
            </div>

            <div className="filterByPrice">
              <small>Filter by price</small>
              <div className="d-flex">
                <input
                  type="range"
                  value={priceRange[1]}
                  onChange={(e) =>
                    FilterByPrice([priceRange[0], parseInt(e.target.value)])
                  }
                  min={100}
                  max={1000}
                  step="100"
                />
                <small className="fw-bold">{"$" + priceRange[1]}</small>
              </div>
            </div>

            <div className="searchProducts">
              <div className="input-group">
                <input
                  className="form-control py-2 mr-1 pr-5"
                  type="search"
                  value={searchTerm}
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="input-group-append">
                  <button type="button" onClick={SearchProducts}>
                    <CiSearch size={25} />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pb-5 mb-4">
        {products &&
          products.map((item) => (
            <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
              <div className="product card border-0">
                <div className="card-body p-4">
                  <div className="productImage">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="100"
                      className="img-fluid d-block mx-auto mb-3"
                    />
                  </div>
                  <h6>{item.title}</h6>
                  <h4 className="fw-bold my-4">{"$" + item.price}</h4>
                  <button
                    className="btn-secondary"
                    onClick={() => AddToCart(item)}
                  >
                    Add to cart
                    <LuPlusCircle size="15" className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
