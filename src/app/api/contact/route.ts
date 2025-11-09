import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema, sanitizeHtml } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variáveis de ambiente EMAIL_USER ou EMAIL_PASS não configuradas');
      return NextResponse.json(
        { error: 'Serviço de email não configurado' },
        { status: 500 }
      );
    }

    const body = await request.json();

    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    const sanitizedName = sanitizeHtml(name);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedMessage = sanitizeHtml(message);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'joojmoutinho45@gmail.com',
      replyTo: email,
      subject: `Contato de ${sanitizedName}`,
      html: `
        <h3>Nova mensagem do site</h3>
        <p><strong>Nome:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
