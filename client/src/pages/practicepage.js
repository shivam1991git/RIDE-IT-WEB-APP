// const express = require("express");
// const router = express.Router();
// const Booking = require("../models/bookingModel");
// const Car = require("../models/carModel");
// const { v4: uuidv4 } = require('uuid');
// const stripe = require('stripe')('sk_test_51P8N2XSCDEPHW6eGT9TYFopF2wnTe8ZX1KGTI7rzQgN2ISWDpKemjGDPPk5PueNTEgaGe1IsXJ9YIAaKgayoNGm200X91axpHR');

// router.post("/bookcar", async (req, res) => {
//     const { token } = req.body;
//     try {
//         // Create a PaymentMethod using the token
//         // const paymentMethod = await stripe.paymentMethods.create({
//         //     type: 'card',
//         //     card: {
//         //         token: token.id
//         //     }
//         // });

//         // Create a Customer and attach the PaymentMethod to it
//         const customer = await stripe.customers.create({
//             email: token.email,
//             source : token.id
//             // payment_method: paymentMethod.id
//         });

//         // Create a PaymentIntent to confirm the payment, with a return URL


//         // const paymentIntent = await stripe.paymentIntents.create({
//             const payment = await stripe.charges.create({
//             amount: req.body.totalAmount * 100,
//             currency: 'inr',
//             customer: customer.id,
//             // confirm: true,
//             // description: 'Car booking payment',
//             // payment_method: paymentMethod.id,
//             receipt_email: token.email,
//             metadata: {
//                 transactionId: uuidv4()
//             },
//             return_url: 'https://stripe.com/payment/success'
//         });

//         if (paymentIntent.status == 'succeeded') {
//             // Payment successful, proceed with booking
//             const newBooking = new Booking(req.body);
//             await newBooking.save();
//             const car = await Car.findOne({ _id: req.body.car });
//             car.bookedTimeSlot.push(req.body.bookedTimeSlot);
//             await car.save();
//             res.send('Your booking is Successful!');
//         } else {
//             // Payment failed
//             return res.status(400).json({ error: 'Payment failed' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while processing your request' });
//     }
// });

// router.get("/getAllbookings", async(req, res)=>{
//     try {
//         const bookings = await Booking.find().populate('car')
//         res.send(bookings)
//     } catch (error) {
//         return res.status(400).json(error);
//     }

// });


// module.exports = router;
