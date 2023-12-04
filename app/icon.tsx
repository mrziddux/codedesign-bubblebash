import React from 'react';

export function Logo({ className }: { className: string }) {
  return (
    <svg width="40" height="40" fill='none' viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className={className} >
      <path d="M9.76378 1C9.76378 0.447715 9.31607 0 8.76378 0H1C0.447715 0 0 0.447715 0 1V23.8819C0 24.4342 0.447714 24.8819 0.999998 24.8819H8.76378C9.31606 24.8819 9.76378 24.4342 9.76378 23.8819V1Z"/>
      <path d="M16.1181 15.1181C15.5658 15.1181 15.1181 15.5658 15.1181 16.1181V23.8819C15.1181 24.4342 15.5658 24.8819 16.1181 24.8819H23.8819C24.4342 24.8819 24.8819 24.4342 24.8819 23.8819V16.1181C24.8819 15.5658 24.4342 15.1181 23.8819 15.1181H16.1181Z"/>
      <path d="M16.1181 9.76378C15.5658 9.76378 15.1181 9.31606 15.1181 8.76378V0.999998C15.1181 0.447714 15.5658 0 16.1181 0H39C39.5523 0 40 0.447715 40 1V8.76378C40 9.31607 39.5523 9.76378 39 9.76378H16.1181Z"/>
      <path d="M31.2362 15.1181C30.6839 15.1181 30.2362 15.5658 30.2362 16.1181V39C30.2362 39.5523 30.6839 40 31.2362 40H39C39.5523 40 40 39.5523 40 39V16.1181C40 15.5658 39.5523 15.1181 39 15.1181H31.2362Z"/>
      <path d="M23.8819 40C24.4342 40 24.8819 39.5523 24.8819 39V31.2362C24.8819 30.6839 24.4342 30.2362 23.8819 30.2362H1C0.447715 30.2362 0 30.6839 0 31.2362V39C0 39.5523 0.447715 40 1 40H23.8819Z"/>
    </svg>
  )
}

export function BarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
  )
}

export function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

export function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24" strokeWidth={2} stroke="#2A2C3D" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
  )
}
export function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="28" height="28" viewBox="0 0 24 24" strokeWidth={2} stroke="#2A2C3D" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
    </svg>
  )
}
export function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="28" height="28" viewBox="0 0 24 24" strokeWidth={2} stroke="#2A2C3D" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
  )
}
export function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="28" height="28" viewBox="0 0 24 24" strokeWidth={2} stroke="#2A2C3D" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <line x1="8" y1="8" x2="8" y2="8.01" />
      <line x1="12" y1="16" x2="12" y2="11" />
      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
  )
}