import ProductForm from './ProductForm'; // Asegurate de importar el formulario
import './ProductModal.css';

function ProductModal({ product, onClose, onSave }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <ProductForm
          initialData={product}
          onCancel={onClose}
          onSubmit={onSave}
        />
      </div>
    </div>
  );
}

export default ProductModal;