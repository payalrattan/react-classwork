import {PRODUCT_LIST} from "@/Data/product";
export default function productElectronics() {
     return (
    <div>
      {PRODUCT_LIST.map((product, i) => {
        return (
          <div key={i}>
            <h4>Name of the product:{product.name}</h4>
            <p>Category:{product. category}</p>
           <p>Is it available: {product.inStock ? "inStock" : "outOfStock"}</p>

          </div>
        );
      })}
    </div>
  );
}