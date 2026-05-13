"use client";

import { FormEvent, useMemo, useState } from "react";

const licenseEmail = "adam@adamsampson.com";

export function ActivationRequestMailer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [activationRequest, setActivationRequest] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = "Shotmap Studio License Request";
    const body = [
      "Shotmap Studio License Request",
      "",
      `Name: ${name || ""}`,
      `Email: ${email || ""}`,
      `Stripe order / receipt ID: ${orderId || ""}`,
      "",
      "Activation request:",
      activationRequest || ""
    ].join("\n");

    return `mailto:${licenseEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [activationRequest, email, name, orderId]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0a0a0d]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-300/60"
            placeholder="Your name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Email used for purchase
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0a0a0d]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-300/60"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Stripe order, receipt, or payment email reference
        <input
          value={orderId}
          onChange={(event) => setOrderId(event.target.value)}
          className="rounded-xl border border-white/10 bg-[#0a0a0d]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-300/60"
          placeholder="Receipt number or payment email reference"
          required
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        Activation request copied from the app
        <textarea
          value={activationRequest}
          onChange={(event) => setActivationRequest(event.target.value)}
          className="min-h-44 rounded-xl border border-white/10 bg-[#0a0a0d]/70 px-4 py-3 font-mono text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-300/60"
          placeholder="Paste the full activation request here"
          required
        />
      </label>

      <button
        type="submit"
        className="w-fit rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400"
      >
        Email License Request
      </button>
      <p className="text-xs leading-6 text-slate-500">
        Temporary manual flow: this opens your email app with the request details filled in. Full automatic submission can be added after the Stripe flow is finalized.
      </p>
    </form>
  );
}
