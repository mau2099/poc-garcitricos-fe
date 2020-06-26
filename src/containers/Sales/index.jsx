import React from 'react';
import { GlobalStateContext } from '../../context/GlobalStateContext';
import './styles.scss';
import '../../utils/googleApi';
import { KEYS } from '../../../googleKeys';
import { keys } from '@material-ui/core/styles/createBreakpoints';

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

  const initClient = () => {
    console.log('loggin in');
    //provide the authentication credentials you set up in the Google developer console
    gapi.client
      .init({
        apiKey: KEYS.web.apiKey,
        clientId: KEYS.web.client_id,
        scope: KEYS.web.scopes,
        discoveryDocs: [
          'https://sheets.googleapis.com/$discovery/rest?version=v4',
        ],
      })
      .then(() => {
        console.log('concluye init()');
        gapi.auth2.getAuthInstance().isSignedIn.listen(() => {
          //updateSignInStatus
          console.log(
            'here we know the user has logged in and update the state',
            gapi.auth2.getAuthInstance().isSignedIn.get(),
          );
        }); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
        // updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
  };
  function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn();
    console.log('google cloud console sign in');
  }

  function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
    console.log('google cloud console sign out');
  }
  React.useEffect(() => {
    gapi.load('client:auth2', initClient);
  }, []);

  React.useEffect(() => {
    setForm({ ...form, total: (form.price * form.quantity).toFixed(2) });
    // console.log(stateRecords);
  }, [form.price, form.quantity, stateRecords]);

  React.useEffect(() => {
    if (stateRecords.length === 0) return;
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: KEYS.sheets.sheetId,
      // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
      range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
      // How the input data should be interpreted.
      valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
    };

    const valueRangeBody = {
      majorDimension: 'ROWS', //log each entry as a new row (vs column)
      values: [Object.values(...stateRecords)], //convert the object's values to an array
    };

    console.log('params and form insert', {
      params,
      valueRangeBody,
      stateRecords,
    });

    const request = gapi?.client?.sheets?.spreadsheets?.values?.append(
      params,
      valueRangeBody,
    );
    request?.then(
      (response) => {
        // TODO: Insert desired response behaviour on submission
        console.log('sheet insert success! ->', response.result);
      },
      (reason) => {
        console.error(`error:${reason.result.error.message}`);
      },
    );
  }, [stateRecords]);

  return (
    <section className='sales__container'>
      <h2 className='title'>Registrar Venta</h2>

      <button type='button' id='signin-button' onClick={handleSignInClick}>
        Sign in
      </button>
      <button type='button' id='signout-button' onClick={handleSignOutClick}>
        Sign out
      </button>
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
                <span className='price'>
                  $ {parseFloat(record.price).toFixed(2)}
                </span>
                <span className='quantity'>{record.quantity}</span>
                <span className='total'>
                  $ {parseFloat(record.total).toFixed(2)}
                </span>
              </div>
            );
          })}
      </article>
    </section>
  );
};
export default Sales;
