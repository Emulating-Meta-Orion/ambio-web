
import { NextRequest, NextResponse } from 'next/server';
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx5LlYuyGytWhMKUA5zuuKS3N0zZN4RzeHd-7Ljs6tv9DPYavdsRpk4FUKoySv6wJWvZA/exec';

export async function GET() {
  try {
    const response = await fetch(WEB_APP_URL);
    const data = await response.json();
    
    if (data.status === 'success') {
      return NextResponse.json(data.data, { status: 200 });
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error fetching waitlist data:', error);
    return NextResponse.json({ message: 'Error reading data' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    
    if (!formData.name || !formData.email || !formData.userType) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (data.status === 'success') {
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error saving waitlist data:', error);
    return NextResponse.json({ message: 'Error saving data' }, { status: 500 });
  }
}

