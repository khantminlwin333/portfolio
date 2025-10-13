import { Button } from "../ui/button";
import { Send } from "lucide-react";

export const Contact = () => {
  const email = "khantminlwin333@gmail.com";

  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="max-w-sm w-full">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-center text-muted-foreground mb-6">
          Click below to send me an email
        </p>

        <a href={`mailto:${email}`}>
          <Button className="w-full gap-2 justify-center">
            <Send className="h-4 w-4" />
            Send Email
          </Button>
        </a>
      </div>
    </div>
  );
};


export const contactHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - Contact</title>
  <style>
    body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f9f9f9; margin: 0; }
    .contact-container { text-align: center; max-width: 300px; width: 100%; }
    .contact-container h1 { font-size: 2rem; margin-bottom: 1rem; }
    .contact-container p { color: #6b7280; margin-bottom: 1.5rem; }
    .send-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.75rem 1rem; background: #3b82f6; color: #fff; border-radius: 0.375rem; text-decoration: none; font-weight: 500; transition: background 0.2s; }
    .send-btn:hover { background: #2563eb; }
    .send-icon { width: 16px; height: 16px; fill: currentColor; }
  </style>
</head>
<body>
  <div class="contact-container">
    <h1>Get In Touch</h1>
    <p>Click below to send me an email</p>
    <a href="mailto:khantminlwin333@gmail.com" class="send-btn">
      <!-- Inline Send icon -->
      <svg class="send-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M4 8.25L20 12 4 15.75 4 12 0 12 4 12z"/>
      </svg>
      Send Email
    </a>
  </div>
</body>
</html>

`;
