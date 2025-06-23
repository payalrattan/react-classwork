import { PRODUCT_LIST } from "@/Data/product";
export default function productElectronics() {
    const electronics = PRODUCT_LIST.filter(
        (product) => product.category === "Electronics"
    );
    return (
        <div>
            <div>
                <h1>Electronics</h1>

                {electronics.map((item) => (
                    <div key={item.id}><br></br>
                        {item.name} {"-"}
                        {item.inStock ? "In Stock" : "Out of Stock"}
                    </div>
                ))}

            </div>


        </div>
    );
}