import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
/*
OO:

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

Route Handlers are only available inside the app directory.

Route Handlers are defined in a route.js|ts file inside the app directory:

The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS

https://nextjs.org/docs/app/building-your-application/routing/router-handlers
*/
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 