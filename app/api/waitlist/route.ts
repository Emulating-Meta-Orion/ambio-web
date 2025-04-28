
// import { google } from 'googleapis';
// import { NextApiRequest, NextApiResponse } from 'next';
// import path from 'path';
// import { promises as fs } from 'fs';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   try {
//     const formData = req.body;

//     // Load service account credentials
//     const auth = new google.auth.GoogleAuth({
//       keyFile: path.join(process.cwd(), 'portfolio-message-db-3312b5c5cbb1.json'), 
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });

//     const sheets = google.sheets({ version: 'v4', auth });

//     const spreadsheetId = '1YP1a16dEKTwIXgfpSaTaHjeDTeY7TqVQZ5T8poYVQKc'; 
//     const range = 'Sheet1!A2'; 

//     // Append the form data
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption: 'USER_ENTERED',
//       requestBody: {
//         values: [
//           [formData.name, formData.email, formData.message],
//         ],
//       },
//     });

//     return res.status(200).json({ message: 'Success' });
//   } catch (error) {
//     console.error('Error writing to Google Sheet:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }


import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(process.cwd(), 'lib/portfolio-message-db-3312b5c5cbb1.json'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = '1YP1a16dEKTwIXgfpSaTaHjeDTeY7TqVQZ5T8poYVQKc';
    const range = 'Sheet1!A2';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [formData.name, formData.email, formData.userType, formData.message, new Date().toLocaleString()],
        ],
      },
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

