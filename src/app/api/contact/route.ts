import axios from "axios";

export async function POST(request: Request) {
  const data = await request.json();

  if (data) return Response.json({ error: "Empty data haha" }, { status: 500 });
  if (data.message.length < 1) Response.json({ error: "Insert a longer message" }, { status: 500 });
  if (data.email.length < 1) Response.json({ error: "Insert a valid email" }, { status: 500 });
  if (data.message.length > 1000) return Response.json({ error: "Message is too long" }, { status: 500 });
  if (data.email.length > 500) return Response.json({ error: "Email is too long" }, { status: 500 });

  await axios
    .post(process.env.WEBHOOK_URL as string, {
      embeds: [
        {
          color: 3108090,
          title: data.email,
          author: {
            name: request.headers.get("x-forwarded-for") ?? "unknown!?",
          },
          description: data.message,
        },
      ],
    })
    .then(resp => {
      if (resp.data.err) return Response.json({ error: "Discord API error, try again~" }, { status: 500 });
      return Response.json({ result: "Success" });
    })
    .catch(() => {
      return Response.json({ error: "Discord API error, try again~" }, { status: 500 });
    });

  return Response.json({ error: "Something went wrong, try again~" }, { status: 500 });
}
