import { revalidateTag } from "next/cache";

export default function GET() {
    console.log('revalidating');
    revalidateTag("cms");
}