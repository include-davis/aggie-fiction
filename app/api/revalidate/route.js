import { revalidateTag } from "next/cache";

export function GET() {
    console.log('revalidating');
    revalidateTag("cms");
}