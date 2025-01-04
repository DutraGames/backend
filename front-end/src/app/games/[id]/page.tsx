import Header from "@/components/Header";

export default async function Game({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <h2 className="text-3xl font-bold mt-10 mb-4 text-lime-500">{id}</h2>
      </main>
    </>
  );
}