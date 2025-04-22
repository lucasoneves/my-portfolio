import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nome, email, mensagem } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Lucas Neves <onboarding@resend.dev>",
      to: ["casluhc@gmail.com"],
      subject: `Nova mensagem do portfólio - ${nome}`,
      html: `
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${mensagem}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Erro ao enviar com Resend:", error);
    return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 });
  }
}
