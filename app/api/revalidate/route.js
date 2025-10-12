export const runtime = "nodejs";

import { revalidateTag } from "next/cache";

export async function GET() {
  console.log('revalidate');
  revalidateTag("cms");
  return Response.json({ revalidated: true });
};
