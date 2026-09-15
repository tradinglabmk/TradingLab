// Contact information storage
export interface ContactInfo {
  id: string;
  fullName: string;
  email: string;
  message: string;
  timestamp: string;
}

// Client-side function to save contact via API
export const saveContact = async (contactData: Omit<ContactInfo, 'id' | 'timestamp'>): Promise<void> => {
  try {
    console.log('Saving contact data:', contactData);
    const response = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to save contact');
    }

    const result = await response.json();
    console.log('Contact saved successfully:', result);
  } catch (error) {
    console.error('Error saving contact:', error);
    throw error;
  }
};

// Client-side function to get all contacts via API
export const getContacts = async (): Promise<ContactInfo[]> => {
  try {
    const response = await fetch('/api/contacts');
    
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }

    const data = await response.json();
    return data.contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

// Client-side function to get contact by ID
export const getContactById = async (id: string): Promise<ContactInfo | undefined> => {
  try {
    const contacts = await getContacts();
    return contacts.find(contact => contact.id === id);
  } catch (error) {
    console.error('Error fetching contact by ID:', error);
    throw error;
  }
};

// Export contacts for debugging purposes
export const exportContacts = async (): Promise<void> => {
  try {
    const contacts = await getContacts();
    console.table(contacts);
    console.log(`Total contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error exporting contacts:', error);
  }
};