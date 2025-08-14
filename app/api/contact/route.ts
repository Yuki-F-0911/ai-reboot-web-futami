import { NextRequest, NextResponse } from 'next/server';

// メール送信先
const RECIPIENT_EMAIL = 'info@ai-reboot.io';

interface ContactFormData {
  contactType: 'individual' | 'corporate';
  // 共通項目
  email: string;
  subject: string;
  message: string;
  // 個人用項目
  name?: string;
  phone?: string;
  // 法人用項目
  companyName?: string;
  department?: string;
  position?: string;
  employeeCount?: string;
  contactPerson?: string;
  companyPhone?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // バリデーション
    if (!data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // 個人/法人別の必須項目チェック
    if (data.contactType === 'individual' && !data.name) {
      return NextResponse.json(
        { error: 'お名前は必須です' },
        { status: 400 }
      );
    }

    if (data.contactType === 'corporate') {
      if (!data.companyName || !data.contactPerson) {
        return NextResponse.json(
          { error: '会社名とご担当者名は必須です' },
          { status: 400 }
        );
      }
    }

    // メール本文を構築
    let emailBody = `AIリブートWebサイトからのお問い合わせ\n\n`;
    emailBody += `【お問い合わせ種別】${data.contactType === 'individual' ? '個人' : '法人'}\n\n`;

    if (data.contactType === 'individual') {
      emailBody += `【お名前】${data.name}\n`;
      if (data.phone) emailBody += `【電話番号】${data.phone}\n`;
    } else {
      emailBody += `【会社名】${data.companyName}\n`;
      if (data.department) emailBody += `【部署名】${data.department}\n`;
      emailBody += `【ご担当者名】${data.contactPerson}\n`;
      if (data.position) emailBody += `【役職】${data.position}\n`;
      if (data.employeeCount) emailBody += `【従業員数】${data.employeeCount}\n`;
      if (data.companyPhone) emailBody += `【電話番号】${data.companyPhone}\n`;
    }

    emailBody += `【メールアドレス】${data.email}\n`;
    emailBody += `【件名】${data.subject}\n\n`;
    emailBody += `【お問い合わせ内容】\n${data.message}\n`;

    // ここで実際のメール送信処理を行います
    // 例: SendGrid, AWS SES, Nodemailerなどを使用
    // 現在は仮の実装として成功レスポンスを返します
    
    // 開発環境ではコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('========== お問い合わせ受信 ==========');
      console.log(`送信先: ${RECIPIENT_EMAIL}`);
      console.log(emailBody);
      console.log('=====================================');
    }

    // TODO: 実際のメール送信実装
    // 例: SendGridを使用する場合
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: RECIPIENT_EMAIL,
      from: 'noreply@ai-reboot.io', // 送信元メールアドレス
      replyTo: data.email, // 返信先を問い合わせ者のメールアドレスに
      subject: `[Webサイトお問い合わせ] ${data.subject}`,
      text: emailBody,
    };
    
    await sgMail.send(msg);
    */

    // 成功レスポンス
    return NextResponse.json(
      { 
        success: true,
        message: 'お問い合わせを受け付けました' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}