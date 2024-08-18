import { getWonders } from '@/app/lib/wonders/data';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const wonders = getWonders();

    return NextResponse.json({ message: 'OK', wonders }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }.err, { status: 500 });
  }
};
