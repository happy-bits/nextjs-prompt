import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
/*

'Route Handlers' gör att du kan skapa egna 'request handlers' som GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS

'Route Handlers' kan bara användas inuti 'app'-mappen. De definieras i en route.js fil (eller route.ts)

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