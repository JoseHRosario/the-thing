import { notFound } from "next/navigation";

export default function Product({ params }: { params: { productId: string } }) {
    if (parseInt(params.productId) > 3) {
        notFound();
    }
    return (
     
        <div>
            <h1>Product Detail</h1>
            <p>Product {params.productId}</p>
        </div>
    );
}