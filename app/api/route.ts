import { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ message: `Hello from the API route ${Date.now()}!` });
}
