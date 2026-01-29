import type { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Card({ children, className = '', style }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm p-4 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
