function logToServer(name, email, action) {
  fetch("/api/log", {
    method: "POST",
    body: JSON.stringify({ name, email, action }),
    headers: { "Content-Type": "application/json" }
  })
  .then(async res => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`❌ Server responded with ${res.status}: ${text}`);
    }
    return res.json();
  })
  .then(result => console.log("📦 Log stored:", result))
  .catch(err => console.error("❌ Failed to store log:", err));
}

