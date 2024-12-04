(async () => {
  const response = await fetch("http://localhost:8787/vanilla-stream");
  if (!response.body) throw new Error("No response body");
  const reader = response.body.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    const text = new TextDecoder().decode(value);
    console.log(text); // Will log "1", "2", "3" with 1 second delays
  }
})();
