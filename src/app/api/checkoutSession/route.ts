import { NextRequest } from "next/server";
import Stripe from 'stripe';

export interface BodyType {
    title: string;
    price: string;
    features: string[];
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-09-30.acacia',
});

export async function POST(req: NextRequest) {
    const body: BodyType = await req.json();
    const { title, price } = body;

    try {
        const session = await stripe.checkout.sessions.create({
            currency: "usd",
            ui_mode: "hosted",
            submit_type: "pay",
            line_items: [
                {
                    price_data: {
                        unit_amount: parseFloat(price) * 100,
                        currency: "usd",
                        product_data: {
                            name: `Robbie: ${title} Subscription`,
                            images:["https://utfs.io/f/GRmgPgqZ3UgQI7WKNbcS8gN9rqPlMJpstuUiA56wjxabCOdQ"]
                        },
                    },
                    quantity: 1,
                }
            ],
            mode: "payment",
            success_url: `${req.headers.get('origin')}/return?success=true`,
            cancel_url: `${req.headers.get('origin')}/return?success=false`,
            billing_address_collection: 'required',
            customer_creation: 'always',
            payment_intent_data: {
                metadata: {}
            },


        });
        return Response.json(session.url as string)
    } catch (err) {
        console.error(err)
        if (err instanceof Error) {
            return new Response(JSON.stringify({ message: err.message }));
        }
    }



}

export async function GET() {
    return new Response('Method Not Allowed', {
        status: 405,
        headers: { Allow: 'POST' },
    });
}