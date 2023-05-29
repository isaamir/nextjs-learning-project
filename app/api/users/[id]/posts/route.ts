import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request: any, { params }: any) => {
  // parama populated when pass dynamic parameters to url
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
