// this roue have 3 request
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// GET (read) the request
export const GET = async (request:any, {params}:any) => {
    try {
        await connectToDB()
        const prompt = await Prompt.findById(params.id).populate('creator')
        if( !prompt ) return new Response("Prompt not found", {status: 404})
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 

// PATCH (update) the request
export const PATCH = async (request:any, {params}:any) => {
    const { prompt, tag} = await request.json();
    try{
        await connectToDB()
        const existingPrompt = await Prompt.findById(params.id)
        if(!existingPrompt) return new Response("Prompt not found", {status: 404})
         existingPrompt.prompt = prompt
         existingPrompt.tag = tag

         await existingPrompt.save()

         return new Response(JSON.stringify(existingPrompt), {status: 200})
    }
    catch(error){
        return new Response("Failed to update prompts", { status: 500 })
    }
}

// DETLETE (delete) the request
export const DELETE = async (request:any, { params }:any) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};