import React from 'react';
import { GlobalStateContext } from './../../context/GlobalStateContext';
import './styles.scss';

const Sales = () => {
  const [state, setState] = React.useContext(GlobalStateContext);

  const [form, setForm] = React.useState({
    product: '',
    productClass: '',
    price: '',
    quantity: '',
    total: 0,
  });

  const [stateRecords, setRecords] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...stateRecords, form]);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    setForm({ ...form, total: (form.price * form.quantity).toFixed(2) });
    // console.log(stateRecords);
  }, [form.price, form.quantity, stateRecords]);

  // React.useEffect(() => {}, [stateRecords]);

  return (
    <section className='sales__container'>
      <h2 className='title'>Registrar Venta</h2>
      <form className='sales__form' onSubmit={handleSubmit}>
        <input
          placeholder='Producto'
          name='product'
          type='text'
          value={form.product}
          required={true}
          onChange={handleChange}
        />
        <input
          placeholder='Clase'
          name='productClass'
          type='text'
          value={form.productClass}
          // required={true}
          onChange={handleChange}
        />
        <input
          placeholder='Precio'
          name='price'
          type='number'
          value={form.price}
          required={true}
          onChange={handleChange}
        />
        <input
          placeholder='Cantidad'
          name='quantity'
          type='number'
          value={form.quantity}
          required={true}
          onChange={handleChange}
        />
        <input
          placeholder='Total'
          name='total'
          type='number'
          value={form.total}
          readOnly={true}
          required={true}
        />
        <button type='submit' className='hidden' />
      </form>
      <article className='sales__records'>
        {stateRecords.length > 0 &&
          stateRecords.map((record, index) => {
            return (
              <div className='record' key={index}>
                <span className='text-primary'>{record.product}</span>
                <span className='text-secondary'>{record.productClass}</span>
                <span className='price'>$ {parseFloat(record.price).toFixed(2)}</span>
                <span className='quantity'>{record.quantity}</span>
                <span className='total'>$ {parseFloat(record.total).toFixed(2)}</span>
              </div>
            );
          })}
      </article>
    </section>
  );
};
export default Sales;
