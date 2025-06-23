import { PRODUCT_LIST } from "@/Data/product";
export default function productFootwear() {
    const footWear = PRODUCT_LIST.filter(
        (product) => product.category === "Footwear"
    );
    return (
        <div>
            <div>
                <h1>Footwear</h1>

                {footWear.map((item) => (
                    <div key={item.id}><br></br>
                        {item.name} {"-"}
                        {item.inStock ? "In Stock" : "Out of Stock"}
                    </div>
                ))}

            </div>


        </div>
    );
}