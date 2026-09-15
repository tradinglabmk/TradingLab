import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/server/supabase';

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

    // Create Supabase client
    const supabase = await createClient();

    // Create new contact
    const newContact = {
      full_name: fullName.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    };
    
    console.log('✨ Saving contact to Supabase:', newContact);
    
    // Insert into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([newContact])
      .select()
      .single();

    if (error) {
      console.error('💥 Supabase error:', error);
      return NextResponse.json(
        { error: `Failed to save contact: ${error.message}` },
        { status: 500 }
      );
    }
    
    console.log('✅ Successfully saved to Supabase!', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact saved successfully',
        contactId: data.id
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
    const supabase = await createClient();
    
    const { data: contacts, error } = await supabase
      .from('contacts')
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('💥 Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch contacts' },
        { status: 500 }
      );
    }

    // Transform to match the expected format
    const transformedContacts = contacts.map(contact => ({
      id: contact.id,
      fullName: contact.full_name,
      email: contact.email,
      message: contact.message,
      timestamp: contact.timestamp
    }));

    return NextResponse.json({ contacts: transformedContacts });
  } catch (error) {
    console.error('Error reading contacts:', error);
    return NextResponse.json(
      { error: 'Failed to read contacts' },
      { status: 500 }
    );
  }
}
