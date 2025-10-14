import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://68d5b9bae29051d1c0af67db.mockapi.io/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error al cargar producto:", err));
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Estado:</strong> {product.status}</p>
      <p><strong>Descripción:</strong> {product.description || "Sin descripción"}</p>
    </div>
  );
}
