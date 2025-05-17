export async function POST({ request }) {
  const data = await request.json();
  console.log(data);

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
