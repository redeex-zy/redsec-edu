import { serviceOptions } from "@/content/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type InquiryFieldErrors = Partial<
  Record<"name" | "organization" | "email" | "phone" | "service" | "message", string>
>;

export type InquiryPayload = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

type InquiryValidationResult =
  | {
      success: true;
      data: InquiryPayload;
    }
  | {
      success: false;
      message: string;
      fieldErrors: InquiryFieldErrors;
      isSpam: boolean;
    };

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateInquiryPayload(
  payload: unknown,
): InquiryValidationResult {
  if (typeof payload !== "object" || payload === null) {
    return {
      success: false,
      message: "Please send a valid inquiry.",
      fieldErrors: {},
      isSpam: false,
    };
  }

  const record = payload as Record<string, unknown>;
  const data: InquiryPayload = {
    name: readString(record.name),
    organization: readString(record.organization),
    email: readString(record.email),
    phone: readString(record.phone),
    service: readString(record.service),
    message: readString(record.message),
    website: readString(record.website),
  };

  if (data.website) {
    return {
      success: false,
      message: "Thanks for your inquiry.",
      fieldErrors: {},
      isSpam: true,
    };
  }

  const fieldErrors: InquiryFieldErrors = {};

  if (data.name.length < 2 || data.name.length > 100) {
    fieldErrors.name = "Enter a full name between 2 and 100 characters.";
  }

  if (data.organization.length < 2 || data.organization.length > 120) {
    fieldErrors.organization =
      "Enter an organization name between 2 and 120 characters.";
  }

  if (!emailPattern.test(data.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (data.phone && data.phone.length > 40) {
    fieldErrors.phone = "Keep the phone number under 40 characters.";
  }

  if (!serviceOptions.includes(data.service)) {
    fieldErrors.service = "Select one of the listed services.";
  }

  if (data.message.length < 20 || data.message.length > 4000) {
    fieldErrors.message =
      "Enter a message between 20 and 4000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
      isSpam: false,
    };
  }

  return {
    success: true,
    data,
  };
}
