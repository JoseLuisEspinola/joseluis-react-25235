import './ProductDetailModal.css';

export default function ProductDetailModal({ product, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} style={{ width: '300px' }} />
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Estado:</strong> {product.active ? 'Activo' : 'Inactivo'}</p>
        <p><strong>Descripción:</strong> {product.description || 'Sin descripción'}</p>
      </div>
    </div>
  );
}
