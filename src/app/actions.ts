"use server";
import { createClient } from "@/utils/server/supabase";

interface HandleAddContactProps {
  email: string;
  fullName?: string;
  message?: string;
  agreeToMarketing: boolean;
}

export const handleAddContact = async ({
  email,
  fullName,
  message,
  agreeToMarketing,
}: HandleAddContactProps) => {
  const supabase = createClient();
  const { error } = await (await supabase)
    .from("email_contact")
    .insert([{ email, fullName, message, agreeToMarketing }]);

  if (error) {
    console.log(error, "error");
    throw new Error("Unsucessful");
  }
};
