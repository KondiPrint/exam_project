import { getById } from '@/app/lib/wonders/data';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req, route) => {
  try {
    const id = route.params.id;
    console.log(`#1 Wonders [id]: Fetching wonder with id: ${id}`); // Log the id being fetched

    const wonder = getById(id);
    console.log('#2 Wonders [id]: Wonder fetched:', wonder); // Log the fetched wonder

    if (!wonder) {
      console.error(`#3 Wonders [id]: Wonder not found for id: ${id}`); // Log when the wonder is not found
      return NextResponse.json({ message: 'ERROR', wonder }, { status: 404 }); // bad request
    }

    return NextResponse.json({ message: 'OK', wonder }, { status: 200 }); // success result
  } catch (err) {
    console.error('#4 Wonders [id]: Error fetching wonder:', err); // Log any error
    return NextResponse.json({ message: 'ERROR', err }, { status: 500 }); // internal server error
  }
};
