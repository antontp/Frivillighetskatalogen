import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import clientPromise from "@/lib/mongodb";

export default async function Home() {

    const isConnected = async () => {
		await clientPromise
		.then(true)
		.catch(e => console.error(e));
	}
	console.log(isConnected);

    const customers = await getCustomers();
    console.log(customers);

	return (
		<main>
			<h1>Frivillighetskatalogen</h1>
			<LeaderBoard leaders={customers}/>
		</main>
	)
}

export async function getCustomers() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_analytics");

        const customers = await db
            .collection("customers")
            .find({})
            .limit(10)
            .toArray();

        return JSON.parse(JSON.stringify(customers));
    } catch (e) {
        console.error(e);
    }
}
