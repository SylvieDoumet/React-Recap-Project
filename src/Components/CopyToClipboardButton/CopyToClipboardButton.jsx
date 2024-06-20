import { useState, useEffect } from "react";
function CopyToClipboardButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      {copied && <div style={{ color: "green" }}>Copied to clipboard!</div>}
    </>
  );
}

export default CopyToClipboardButton;
