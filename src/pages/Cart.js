import React, { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';
import axios from 'axios';
// import { Twilio } from 'twilio';


const Cart = () => {

    useDocTitle('Cart');

    const { cartItems } = useContext(cartContext);

    const cartQuantity = cartItems.length;

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.originalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return (item.originalPrice - item.finalPrice) * item.quantity;
    });

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount);


    const handleCheckout = async () => {
        // const userPhoneNumber = '+923125496244';
        // const myPhoneNumber = '+14065055570';
        // const twilioAccountSid = 'AC750e32a7fc2ddb75240c771549578b6c';
        // const twilioAuthToken = '5b16ccc618f58640ee33339f62022c9c';
    
        // const client = new Twilio(twilioAccountSid, twilioAuthToken);
    
        // try {
        //   // Send order confirmation SMS to the user
        //   await client.messages.create({
        //     body: 'Your order has been placed. Thank you!',
        //     from: myPhoneNumber,
        //     to: userPhoneNumber
        //   });
    
        //   // Send notification SMS to myself
        //   await client.messages.create({
        //     body: 'New order received!',
        //     from: myPhoneNumber,
        //     to: myPhoneNumber
        //   });
    
        //   // Process the order on the server
        //   //const response = await axios.post('/api/orders', {/* order data */});
    
        //   // Handle the response and display appropriate feedback to the user
        // //   console.log('Order placed successfully:', response.data);
        // } catch (error) {
        //   // Handle any errors that occur during the process
        //   console.error('Error placing order:', error);
        // }
      };

    // const handleButtonClick = () => {
    //     const TWILIO_ACCOUNT_SID = 'AC750e32a7fc2ddb75240c771549578b6c';
    //     const TWILIO_AUTH_TOKEN = '5b16ccc618f58640ee33339f62022c9c';
    
    //     const requestBody = {
    //       Body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    //       From: '+14065055570',
    //       To: '+923125496244'
    //     };
    
    //     axios.post(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, requestBody, {
    //       auth: {
    //         username: TWILIO_ACCOUNT_SID,
    //         password: TWILIO_AUTH_TOKEN
    //       }
    //     })
    //     .then(response => {
    //       console.log('Message sent successfully:', response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error sending message:', error);
    //     });
    //   };
    return (
        <>
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<BsCartX />}
                                msg="Your Cart is Empty"
                                link="/all-products"
                                btnText="Start Shopping"
                            />
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    {
                                        cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            Order Summary &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Original Price</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Discount</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Delivery</span>
                                                <b>Free</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Total Price</small></b>
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        <button type="button" onClick={handleCheckout} className="btn checkout_btn">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;