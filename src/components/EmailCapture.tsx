"use client";

import { useState } from "react";

interface EmailCaptureProps {
  dark?: boolean;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ dark = false }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Entre une adresse email valide.");
      return;
    }
    setError("");
    await fetch("https://formspree.io/f/xgoqarpo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    // TODO: connecter à Mailchimp / ConvertKit / Brevo etc.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center gap-2 text-center ${dark ? "text-white" : "text-foreground"}`}
      >
        <div className="text-2xl">🎉</div>
        <p className="font-semibold text-lg">Tu es sur la liste !</p>
        <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-500"}`}>
          On te prévient en premier dès que Atlas est disponible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="flex flex-col w-full max-w-md mx-auto"
    >
      <div className="flex flex-1 gap-1">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ton@email.com"
          aria-label="Adresse email"
          className={`flex-1 rounded-xl px-4 py-3 text-sm outline-none border focus:ring-2 focus:ring-primary transition
                        ${
                          dark
                            ? "bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 shadow-sm"
                        }`}
        />
        <button
          type="submit"
          className="whitespace-nowrap rounded-xl bg-primary hover:bg-primary-accent active:bg-primary-accent text-white font-semibold px-6 py-3 text-sm transition-colors cursor-pointer"
        >
          Rejoindre la liste
        </button>
      </div>
      {error && (
        <span className="text-red-400 text-xs pl-1 mt-2 text-left block">
          {error}
        </span>
      )}
    </form>
  );
};

export default EmailCapture;
