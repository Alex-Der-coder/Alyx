import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message?: string;
  error?: string;
  data?: any;
};

const RESEND_API_KEY = 're_Hcr1ycvk_6NyrmKFYuDkCfKRNvp5WPUzz';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { subject, text } = req.body;

  if (!subject || !text) {
    return res.status(400).json({ error: 'Subject and text are required' });
  }

  try {
    console.log('Preparing to send request to Resend API');

    const apiRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Alexandre De Roeck <onboarding@resend.dev>',
        to: ['mr.alexandre.deroeck@gmail.com'],
        subject: subject,
        html: `<strong>${text}</strong>`,
      }),
    });

    console.log('Response status:', apiRes.status);
    console.log('Response status text:', apiRes.statusText);

    if (apiRes.ok) {
      const data = await apiRes.json();
      console.log('Response data:', data);
      return res.status(200).json({ message: 'Email sent successfully', data });
    } else {
      console.error('Error response:', apiRes);
      const errorText = await apiRes.text();
      return res.status(apiRes.status).json({ error: `Request failed with status ${apiRes.status} - ${apiRes.statusText}: ${errorText}` });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
