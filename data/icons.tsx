import type { ReactNode } from "react";

// Inline SVG icons referenced from data.ts through `iconKey`

// ================= INVESTMENT PROCESS ICONS =================
export const processIcons: Record<string, ReactNode> = {
  understand: (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 17.5C10 12.253 14.477 8 20 8H28C33.523 8 38 12.253 38 17.5C38 22.747 33.523 27 28 27H22L15 33V27.5C11.993 25.78 10 22.62 10 17.5Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="18" r="1.8" fill="currentColor" />
      <circle cx="24" cy="18" r="1.8" fill="currentColor" />
      <circle cx="29" cy="18" r="1.8" fill="currentColor" />
    </svg>
  ),
  plan: (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6H29L36 13V42H14V6Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M29 6V14H36" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M19 21H31M19 27H31M19 33H27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  implement: (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 7L27 10.5L32 9.5L34 14L39 16L37.5 21L41 24L37.5 27L39 32L34 34L32 39L27 37.5L24 41L21 37.5L16 39L14 34L9 32L10.5 27L7 24L10.5 21L9 16L14 14L16 9.5L21 10.5L24 7Z"
        fill="currentColor"
      />
      <circle cx="24" cy="24" r="6" fill="white" />
    </svg>
  ),
  monitor: (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 39V27H17V39H9Z" fill="currentColor" />
      <path d="M20 39V20H28V39H20Z" fill="currentColor" />
      <path d="M31 39V12H39V39H31Z" fill="currentColor" />
      <path d="M9 19L18 14L25 17L38 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 8H38V13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  grow: (
    <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="3" />
      <path d="M24 9V18M39 24H30M24 39V30M9 24H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 24L34 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 14H34V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ================= SERVICE ICONS =================
export const serviceIcons: Record<string, ReactNode> = {
  wealth: (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
      <path d="M8 38V27H16V38H8Z" fill="currentColor" />
      <path d="M20 38V19H28V38H20Z" fill="currentColor" />
      <path d="M32 38V10H40V38H32Z" fill="currentColor" />
      <path d="M8 21L17 16L24 19L40 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 9H40V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  retirement: (
    <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 5L39 11V22C39 31 33 38 24 43C15 38 9 31 9 22V11L24 5Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M24 8V40M11 20H37" stroke="currentColor" strokeWidth="3" />
    </svg>
  ),
  financial: (
    <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="13" r="6" stroke="currentColor" strokeWidth="3" />
      <circle cx="11" cy="20" r="5" stroke="currentColor" strokeWidth="3" />
      <circle cx="37" cy="20" r="5" stroke="currentColor" strokeWidth="3" />
      <path d="M13 38C13 30 17.5 26 24 26C30.5 26 35 30 35 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M3 36C3 30.5 6 27 11 27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M45 36C45 30.5 42 27 37 27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  advisory: (
    <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
      <path d="M8 39V25H17V39H8Z" fill="currentColor" />
      <path d="M20 39V18H29V39H20Z" fill="currentColor" />
      <path d="M32 39V10H41V39H32Z" fill="currentColor" />
      <path d="M8 19L17 14L25 17L40 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  risk: (
    <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
      <path d="M24 6V42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 15H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M17 15L10 29C9 31 11 33 14 33H20C23 33 25 31 24 29L17 15Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M31 15L24 29C23 31 25 33 28 33H34C37 33 39 31 38 29L31 15Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  ),
  tax: (
    <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
      <path d="M14 6H29L36 13V42H14V6Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M29 6V14H36" stroke="currentColor" strokeWidth="3" />
      <path d="M19 21H31M19 27H31M19 33H27" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  estate: (
    <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
      <circle cx="16" cy="17" r="5" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="17" r="5" stroke="currentColor" strokeWidth="3" />
      <path d="M7 36C7 29 11 25 16 25C21 25 25 29 25 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M23 36C23 29 27 25 32 25C37 25 41 29 41 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  business: (
    <svg width="31" height="31" viewBox="0 0 48 48" fill="none">
      <path d="M8 39V27H16V39H8Z" fill="currentColor" />
      <path d="M20 39V20H28V39H20Z" fill="currentColor" />
      <path d="M32 39V12H40V39H32Z" fill="currentColor" />
      <path d="M8 20L17 15L24 18L40 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
