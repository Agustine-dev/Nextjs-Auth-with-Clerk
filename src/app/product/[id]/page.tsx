import { connectDB } from "@/config/db"

export default async function ProductInfo(
    {
        params
    }: {
        params: {
            id: string;
        };
    }
) {

    await connectDB();
    return (
        <div>
            <p>This is a sample product with id {params.id}</p>
            <p>Coming soon!</p>
        </div>
    )
}