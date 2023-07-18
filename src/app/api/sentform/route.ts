import { NextResponse } from 'next/server';
import { google } from 'googleapis';

type SheetDataType = {
  name: string;
  phone: string;
  message: string;
};

export async function POST(req: Request, res: Response) {
  const body: SheetDataType = await req.json();

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_APP_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_APP_GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          '\n'
        ),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_APP_GOOGLE_SPREADSHEET_ID,
      range: 'A1:C1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[body.name, body.phone, body.message]],
      },
    });
    return NextResponse.json(body);
  } catch (err: any) {
    console.log(err);
    return new Error(err.message ?? 'Something went wrong');
  }
}
