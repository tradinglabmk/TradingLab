import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

interface ContactInfo {
  id: string;
  fullName: string;
  email: string;
  message: string;
  timestamp: string;
}

const CONTACTS_FILE_PATH = path.join(process.cwd(), 'data', 'contacts.json');

// Ensure the data directory exists
const ensureDataDirectory = async (): Promise<void> => {
  const dataDir = path.dirname(CONTACTS_FILE_PATH);
  console.log('🗂️  Checking data directory:', dataDir);
  
  try {
    await fs.access(dataDir);
    console.log('✅ Data directory already exists');
  } catch {
    console.log('📁 Creating data directory...');
    await fs.mkdir(dataDir, { recursive: true });
    console.log('✅ Data directory created successfully');
  }
};

// Read contacts from file
const readContactsFromFile = async (): Promise<ContactInfo[]> => {
  try {
    await ensureDataDirectory();
    const fileContent = await fs.readFile(CONTACTS_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    // File doesn't exist or is empty, return empty array
    return [];
  }
};

// Write contacts to file
const writeContactsToFile = async (contacts: ContactInfo[]): Promise<void> => {
  await ensureDataDirectory();
  await fs.writeFile(CONTACTS_FILE_PATH, JSON.stringify(contacts, null, 2), 'utf-8');
};

// Generate a simple unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, message } = await request.json();
    console.log('📝 Received data:', { fullName, email, message });

    // Validate input
    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      console.log('❌ Validation failed - missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('📁 File path will be:', CONTACTS_FILE_PATH);
    console.log('📁 Current working directory:', process.cwd());

    // Read existing contacts
    const existingContacts = await readContactsFromFile();
    console.log('📖 Existing contacts count:', existingContacts.length);
    
    // Create new contact
    const newContact: ContactInfo = {
      id: generateId(),
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim(),
      message: message.trim()
    };
    
    console.log('✨ Created new contact:', newContact);
    
    // Add to existing contacts
    existingContacts.push(newContact);
    
    // Write back to file
    console.log('💾 About to write to file...');
    await writeContactsToFile(existingContacts);
    console.log('✅ Successfully wrote to file!');
    
    console.log('New contact saved to file:', newContact);
    console.log('File location:', CONTACTS_FILE_PATH);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact saved successfully',
        contactId: newContact.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('💥 Error saving contact:', error);
    return NextResponse.json(
      { error: 'Failed to save contact' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contacts = await readContactsFromFile();
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error reading contacts:', error);
    return NextResponse.json(
      { error: 'Failed to read contacts' },
      { status: 500 }
    );
  }
}