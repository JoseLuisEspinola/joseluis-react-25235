import { useState } from 'react';

function ProductModal({ product, onClose, onSave }) {
  const [form, setForm] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Editar producto</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
          <input name="price" value={form.price} onChange={handleChange} type="number" placeholder="Precio" />
          <input name="stock" value={form.stock} onChange={handleChange} type="number" placeholder="Stock" />
          <input name="image" value={form.image} onChange={handleChange} placeholder="URL de imagen" />
          <label>
            <input name="active" type="checkbox" checked={form.active} onChange={handleChange} />
            Activo
          </label>
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
