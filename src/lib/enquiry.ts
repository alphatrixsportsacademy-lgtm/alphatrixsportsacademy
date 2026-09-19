export interface EnquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  ageOfChild?: string;
  city?: string;
  school?: string;
  interestedIn: string;
  message?: string;
  consent: boolean;
}

const ENQUIRY_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzzM9zuMAobAqzBYttHkyWtLUQwnLcsbsSE0AAfX2EWN5P9PdhRoNPKiaO2BqpKmUJ5rg/exec";

export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<{ ok: true }> {
  try {
    await fetch(ENQUIRY_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return { ok: true };
  } catch (error) {
    console.error("Enquiry submission failed:", error);
    throw new Error("Enquiry could not be submitted. Please try again.");
  }
}