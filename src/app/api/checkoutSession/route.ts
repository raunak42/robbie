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
                            images: ["https://github-production-user-asset-6210df.s3.amazonaws.com/112076541/374121176-eda7364e-1f38-4f7b-8835-81de73f70679.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241007%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241007T095627Z&X-Amz-Expires=300&X-Amz-Signature=52aa47a7e26963d0f2c346a920e1ebd7d50d86aeb295f03000263688acc9dff2&X-Amz-SignedHeaders=host"],
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