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
                            images:["https://private-user-images.githubusercontent.com/112076541/374492467-0452bb79-4c0c-4b4f-9fbf-9d8e3cc6c7b5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgzNzkzMDQsIm5iZiI6MTcyODM3OTAwNCwicGF0aCI6Ii8xMTIwNzY1NDEvMzc0NDkyNDY3LTA0NTJiYjc5LTRjMGMtNGI0Zi05ZmJmLTlkOGUzY2M2YzdiNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMDA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTAwOFQwOTE2NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04ZjkxNTQ4ZWNmYjQxYzczOWU0NGYxNTljN2M3MDhkNmI5YjNjNDViZmFmN2M2ZDIzYTUzZjc2M2JmOWI3ZGE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XQS_4Iq3tBerpv9H5PnQ55KMUKcFaASonoI1Qd1Gm18"]
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