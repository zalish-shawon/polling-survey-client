import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosURL from "../../hooks/UseaxiosURL";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const userData = useLoaderData();
    console.log(userData);
    const elements = useElements();
    const axiosUrl = useAxiosURL();
    const {user} = useContext(AuthContext);
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const price = 10;

    const userNewRole = {
        role: 'pro-user',
    }

    useEffect(()=>{
        axiosUrl.post('/create-payment-intent', {price: price})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosUrl,price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null) {
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('[error]', error);
            setError(error.message);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
          }

          //confirm the payment
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
          })

          if(confirmError) {
            console.log('confirm error');
          } else {
            console.log('success', paymentIntent);
            if(paymentIntent.status === 'success') {
                
                Swal.fire(
                    'Welcome to pro-user account',
                    'Payment has been successfully done.',
                    'success'
                )
            }
          }


    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                
                <p className="text-red-500">{error}</p>
            }
        </div>
    );
};

export default CheckoutForm;