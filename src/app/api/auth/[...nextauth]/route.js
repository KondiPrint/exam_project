import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('./src/app/lib/accounts/users.json');

function readUsersFile() {
  if (!fs.existsSync(filePath)) {
    return { users: [] };
  }
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading users file:', error);
    return { users: [] };
  }
}

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials;
        const data = readUsersFile();

        const user = data.users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          return { id: user.username, name: user.username, email: `${user.username}@example.com` };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
