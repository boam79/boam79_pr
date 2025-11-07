import { NextRequest, NextResponse } from 'next/server';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  type: string;
  message: string;
  createdAt: string;
}

// 간단한 인메모리 저장소 (실제 프로덕션에서는 데이터베이스 사용 권장)
let inquiries: Inquiry[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    const inquiry: Inquiry = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || '',
      type: type || '',
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    inquiries.push(inquiry);

    // 최대 100개까지만 저장 (메모리 관리)
    if (inquiries.length > 100) {
      inquiries = inquiries.slice(-100);
    }

    return NextResponse.json({ success: true, id: inquiry.id });
  } catch (error) {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const password = searchParams.get('password');

    // 간단한 비밀번호 인증 (실제 프로덕션에서는 더 안전한 인증 사용)
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: '인증이 필요합니다.' },
        { status: 401 }
      );
    }

    // 최신순으로 정렬
    const sortedInquiries = [...inquiries].reverse();

    return NextResponse.json({ inquiries: sortedInquiries });
  } catch (error) {
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}


