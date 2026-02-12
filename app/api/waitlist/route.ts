import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    try {
        const { count, error } = await supabase
            .from('waitlist')
            .select('*', { count: 'exact', head: true });

        if (error) throw error;
        return NextResponse.json({ count: count || 0 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        const { error } = await supabase
            .from('waitlist')
            .insert([{ email }]);

        if (error) {
            if (error.code === '23505') { // Unique violation
                return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
            }
            throw error;
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
