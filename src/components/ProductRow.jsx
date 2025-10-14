/* import './ProductRow.css'; // si luego decidís separar estilos

function ProductRow({ product, onEdit, onDelete }) {
  return (
    <div className="product-row">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price}</div>
      <div className="product-stock">{product.stock}</div>
      <div className="product-stock">{product.active ? 'Activo' : 'Inactivo'}</div>

      <div className="product-actions">
        <button className="edit-btn" onClick={() => onEdit(product)}>Modificar</button>
        <button className="delete-btn" onClick={() => onDelete(product.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default ProductRow;
 */

import './ProductRow.css'; // si luego decidís separar estilos

function ProductRow({ product, onEdit, onDelete, user }) {
  const esAdmin = user?.role === 'admin';

  return (
    <div className="product-row">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price}</div>
      <div className="product-stock">{product.stock}</div>
      <div className="product-stock">{product.active ? 'Activo' : 'Inactivo'}</div>

      <div className="product-actions">
        <button
          className="edit-btn"
          onClick={() => esAdmin && onEdit(product)}
          disabled={!esAdmin}
          style={{
            opacity: esAdmin ? 1 : 0.5,
            cursor: esAdmin ? 'pointer' : 'not-allowed',
          }}
        >
          Modificar
        </button>

        <button
          className="delete-btn"
          onClick={() => esAdmin && onDelete(product.id)}
          disabled={!esAdmin}
          style={{
            opacity: esAdmin ? 1 : 0.5,
            cursor: esAdmin ? 'pointer' : 'not-allowed',
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProductRow;
