// Application (apply page) data storage
export interface ApplicationInfo {
  fullName: string;
  email: string;
  ageGroup: string;
  location: string;
  contactMethod: string;
  additionalContact?: string;
  service: string;
  mentorshipData?: Record<string, unknown>;
  groupCoachingData?: Record<string, unknown>;
  tradingSignalsData?: Record<string, unknown>;
}

// Client-side function to save an application via the API
export const saveApplication = async (data: ApplicationInfo): Promise<void> => {
  const response = await fetch("/api/applications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to save application");
  }
};
