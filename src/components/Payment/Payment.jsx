import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe('pk_test_51OEduzAnyigpIUQ3u0HTJbhwJPd1d5oZISrPpuwru9UHs5XtBOTXc9M6BJk6bMCjqLhp3C3ONhvngVpYsNvlNFYn00UMVLwFNV')
const Payment = () => {

    return (
        <div>
            <div>
                <h2 className="text-center font-bold text-5xl text-blue-400 mt-10">Payment</h2>
            </div>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;