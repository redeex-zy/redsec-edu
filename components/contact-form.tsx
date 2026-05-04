"use client";

import { type FormEvent, useId, useState } from "react";

import { serviceOptions } from "@/content/site";
import { Button } from "@/components/ui/button";
import type { InquiryFieldErrors } from "@/lib/contact-inquiry";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const formId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<InquiryFieldErrors>({});
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFieldErrors({});
    setStatus({
      type: "idle",
      message: "",
    });

    const payload = {
      name: String(formData.get("name") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | {
            message?: string;
            fieldErrors?: InquiryFieldErrors;
          }
        | null;

      if (!response.ok) {
        setFieldErrors(result?.fieldErrors ?? {});
        setStatus({
          type: "error",
          message:
            result?.message ||
            "The inquiry could not be sent right now. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          result?.message ||
          "Thank you. Your inquiry was sent successfully. RedSec Edu will review it and reply soon.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "A network problem prevented the inquiry from being sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function getFieldClassName(field: keyof InquiryFieldErrors) {
    return cn(
      "form-field",
      fieldErrors[field] &&
        "border-red-400/60 text-white focus:border-red-300/70 focus:ring-red-400/25",
    );
  }

  return (
    <form
      className="panel rounded-[32px] p-6 sm:p-8"
      aria-describedby={`${formId}-privacy ${formId}-status`}
      aria-busy={isSubmitting}
      onSubmit={handleSubmit}
    >
      <div className="mb-8 border-b border-white/8 pb-6">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
          Inquiry form
        </p>
        <h2 className="mt-3 font-display text-2xl tracking-tight text-white sm:text-3xl">
          Share enough context to define a safe first scope.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Use this form for initial scoping only. Share public URLs, general
          platform context, and the service you want to discuss.
        </p>
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden opacity-0">
        <label htmlFor={`${formId}-website`}>
          Leave this field empty
        </label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor={`${formId}-name`} className="space-y-2">
          <span className="text-sm font-medium text-slate-100">Name</span>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={
              fieldErrors.name ? `${formId}-name-error` : undefined
            }
            className={getFieldClassName("name")}
            placeholder="Your full name"
          />
          {fieldErrors.name ? (
            <span id={`${formId}-name-error`} className="text-sm text-red-200">
              {fieldErrors.name}
            </span>
          ) : null}
        </label>

        <label htmlFor={`${formId}-organization`} className="space-y-2">
          <span className="text-sm font-medium text-slate-100">
            Organization
          </span>
          <input
            id={`${formId}-organization`}
            name="organization"
            type="text"
            required
            autoComplete="organization"
            aria-invalid={Boolean(fieldErrors.organization)}
            aria-describedby={
              fieldErrors.organization
                ? `${formId}-organization-error`
                : undefined
            }
            className={getFieldClassName("organization")}
            placeholder="School or education organization"
          />
          {fieldErrors.organization ? (
            <span
              id={`${formId}-organization-error`}
              className="text-sm text-red-200"
            >
              {fieldErrors.organization}
            </span>
          ) : null}
        </label>

        <label htmlFor={`${formId}-email`} className="space-y-2">
          <span className="text-sm font-medium text-slate-100">Email</span>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={
              fieldErrors.email ? `${formId}-email-error` : undefined
            }
            className={getFieldClassName("email")}
            placeholder="name@organization.com"
          />
          {fieldErrors.email ? (
            <span id={`${formId}-email-error`} className="text-sm text-red-200">
              {fieldErrors.email}
            </span>
          ) : null}
        </label>

        <label htmlFor={`${formId}-phone`} className="space-y-2">
          <span className="text-sm font-medium text-slate-100">
            Phone <span className="text-slate-500">(optional)</span>
          </span>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={
              fieldErrors.phone ? `${formId}-phone-error` : undefined
            }
            className={getFieldClassName("phone")}
            placeholder="+212 ..."
          />
          {fieldErrors.phone ? (
            <span id={`${formId}-phone-error`} className="text-sm text-red-200">
              {fieldErrors.phone}
            </span>
          ) : null}
        </label>

        <label htmlFor={`${formId}-service`} className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-slate-100">
            Service interested in
          </span>
          <select
            id={`${formId}-service`}
            name="service"
            required
            aria-invalid={Boolean(fieldErrors.service)}
            aria-describedby={
              fieldErrors.service ? `${formId}-service-error` : undefined
            }
            className={getFieldClassName("service")}
            defaultValue=""
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {fieldErrors.service ? (
            <span
              id={`${formId}-service-error`}
              className="text-sm text-red-200"
            >
              {fieldErrors.service}
            </span>
          ) : null}
        </label>

        <label htmlFor={`${formId}-message`} className="space-y-2 sm:col-span-2">
          <span className="text-sm font-medium text-slate-100">Message</span>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={6}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={
              fieldErrors.message ? `${formId}-message-error` : undefined
            }
            className={cn(getFieldClassName("message"), "resize-y")}
            placeholder="Share your school or platform context, public URLs in scope, and the security concerns you want reviewed."
          />
          {fieldErrors.message ? (
            <span
              id={`${formId}-message-error`}
              className="text-sm text-red-200"
            >
              {fieldErrors.message}
            </span>
          ) : null}
        </label>
      </div>

      <div
        id={`${formId}-privacy`}
        className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] p-4"
      >
        <p className="text-sm leading-7 text-slate-300">
          Do not send passwords, private student records, or other sensitive
          data through the first inquiry.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" showArrow disabled={isSubmitting}>
          {isSubmitting ? "Sending Inquiry..." : "Send Inquiry"}
        </Button>
        <p className="text-sm leading-6 text-slate-500">
          Prepared for secure submission handling.
        </p>
      </div>

      <div
        id={`${formId}-status`}
        aria-live="polite"
        className="mt-5 min-h-6"
      >
        {status.type !== "idle" ? (
          <p
            className={cn(
              "text-sm leading-7",
              status.type === "success" ? "text-cyan-200" : "text-red-200",
            )}
            role={status.type === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
