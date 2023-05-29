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

// route.js  is a special file name, used to create backend routes.
// this route is  http://localhost:3000/api/users
// export async function GET(request){
//   // handle get request for /api/users
//   // retreve users from the database or any data sourcre
//   const users = [
//       {
//           id: 1, name: 'john',
//           id: 2, name: 'jone',
//           id: 3, name: 'bob',
//       }
//   ]
//   return new Response(JSON.stringify(users))
// }


// // All these methods are supported in Next.js
// export async function POST(request){
// }
// export async function PUT(request){
// }
// export async function PATCH(request){
// }
// export async function DELETE(request){
// }
// export async function HEAD(request){
// }
// export async function OPTIONS(request){
// }
