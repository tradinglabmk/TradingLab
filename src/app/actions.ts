"use server";
import { createClient } from "@/utils/server/supabase";

interface HandleAddContactProps {
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  message?: string;
  agreeToMarketing: boolean;
}

export const handleAddContact = async ({
  email,
  firstName,
  lastName,
  phoneNumber,
  message,
  agreeToMarketing,
}: HandleAddContactProps) => {
  const supabase = createClient();
  const { error } = await (await supabase)
    .from("email_contact")
    .insert([
      { email, firstName, lastName, phoneNumber, message, agreeToMarketing },
    ]);

  if (error) {
    console.log(error, "error");
    throw new Error("Unsucessful");
  }
};
