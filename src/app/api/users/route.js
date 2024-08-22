import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./src/app/lib/accounts/users.json');

function ensureUsersFile() {
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ users: [] }, null, 2));
  }
}

function readUsersFile() {
  ensureUsersFile();
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    if (!fileData) {
      return { users: [] };
    }
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading users file:', error);
    return { users: [] };
  }
}

function writeUsersFile(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing users file:', error);
  }
}

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    const data = readUsersFile();

    if (data.users.some((user) => user.username === username)) {
      return new Response(JSON.stringify({ message: 'Username already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    data.users.push({ username, password });
    writeUsersFile(data);

    return new Response(JSON.stringify({ message: 'Account created successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export function OPTIONS() {
  return new Response(null, { status: 200 });
}

export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}
