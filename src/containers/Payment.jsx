import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.scss';

function Payment({ history }) {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOtions = {
    clientId: 'AWDydDlucuat5S3QInF2l_hjN7DyJN4TYJVxytg8qDK1fViv84qd3XkiOtxZOuJFTx29feS-IOx9BbwX',
    intent: 'capture',
    currency: 'MXN'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resument del pedido:</h3>
          {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
          ))}
          <h4>{`Total: ${handleSumTotal()}`}</h4>
          <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
