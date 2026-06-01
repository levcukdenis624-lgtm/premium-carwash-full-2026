import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AquaWash Premium - Підписка на автомийку',
  description: 'Преміальна мийка авто з щоденним доступом',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
