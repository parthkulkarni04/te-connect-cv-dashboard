import './globals.css';

export const metadata = {
  title: 'CV Dashboard',
  description: 'TE Connectivity Resumes Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}