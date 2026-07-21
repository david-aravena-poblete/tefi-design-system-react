export function Sun() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" />

      <rect x="11" y="1.5" width="2" height="4" rx="1" />
      <rect x="11" y="18.5" width="2" height="4" rx="1" />

      <rect x="18.5" y="11" width="4" height="2" rx="1" />
      <rect x="1.5" y="11" width="4" height="2" rx="1" />

      <rect x="16.9" y="4.2" width="2" height="4" rx="1" transform="rotate(45 17.9 6.2)" />

      <rect x="4.2" y="16.9" width="2" height="4" rx="1" transform="rotate(45 5.2 18.9)" />

      <rect x="16.9" y="15.8" width="2" height="4" rx="1" transform="rotate(-45 17.9 17.8)" />

      <rect x="4.2" y="3.1" width="2" height="4" rx="1" transform="rotate(-45 5.2 5.1)" />
    </svg>
  );
}
