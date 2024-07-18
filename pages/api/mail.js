const RESEND_API_KEY = 're_Hcr1ycvk_6NyrmKFYuDkCfKRNvp5WPUzz';

export async function POST() {
  console.log('Preparing to send request to Resend API');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mr.alexandre.deroeck@gmail.com'],
      subject: 'hello world',
      html: '<strong>it works!</strong>',
    }),
  });

  console.log('Response status:', res.status);
  console.log('Response status text:', res.statusText);

  if (res.ok) {
    const data = await res.json();
    console.log('Response data:', data);
    return Response.json(data);
  } else {
    console.error('Error response:', res);
    throw new Error(`Request failed with status ${res.status} - ${res.statusText}`);
  }
}
