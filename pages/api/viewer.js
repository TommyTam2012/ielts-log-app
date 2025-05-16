export default async function handler(req, res) {
  const response = await fetch('https://firm-imp-16671.upstash.io/keys/log:*', {
    headers: {
      Authorization: 'Bearer AUEfAAIjcDFkMTBkNTFmYmIzM2I0ZGQwYTUzODk5NDI2YmZkNTMwZHAxMA',
    },
  });

  const keysData = await response.json();

  const logs = (keysData.result || []).map((key) => {
    const [_, email, ts] = key.split(':');
    const timestamp = new Date(Number(ts)).toISOString();
    return { email, timestamp };
  });

  res.status(200).json({ logs });
}

