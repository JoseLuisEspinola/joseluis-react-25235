import { useState } from 'react';

function ProductForm({ initialData, onCancel, onSubmit }) {
  const [form, setForm] = useState({
    name: initialData?.name || '',
    price: initialData?.price || '',
    stock: initialData?.stock || '',
    image: initialData?.image || '',
    active: initialData?.active ?? true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productoFinal = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };
    if (initialData?.id) productoFinal.id = initialData.id;
    onSubmit(productoFinal);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="price" value={form.price} onChange={handleChange} type="number" placeholder="Precio" required />
      <input name="stock" value={form.stock} onChange={handleChange} type="number" placeholder="Stock" required />
      <input name="image" value={form.image} onChange={handleChange} placeholder="URL de imagen" required />
      <label>
        <input name="active" type="checkbox" checked={form.active} onChange={handleChange} />
        Activo
      </label>
      <div className="form-actions">
        <button type="submit">Guardar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  );
}

export default ProductForm;
