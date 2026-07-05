export default function Icon({ name, className = "", filled = false, ...props }) {
  const common = {
    arrow_forward: (
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    arrow_right_alt: (
      <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    arrow_back: (
      <path d="M11 5 4 12l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    cloud: (
      <path d="M8 19a4 4 0 1 1 0-8 4.5 4.5 0 0 1 8.5 1.5A3.5 3.5 0 0 1 18 19Z" fill="currentColor" />
    ),
    security: (
      <path d="M12 3l6 2v5c0 4.3-2.8 7.8-6 9-3.2-1.2-6-4.7-6-9V5l6-2Z" fill="currentColor" />
    ),
    support_agent: (
      <path d="M7 8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a3 3 0 0 1-2 2.8V12a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-.2A3 3 0 0 1 7 9V8Zm0 6v2a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-2" fill="currentColor" />
    ),
    dns: (
      <path d="M4 7h16M7 7v10m10-10v10M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    ),
    verified: (
      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    check_circle: (
      <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    mail: (
      <path d="M4 6h16v12H4zM4 6l8 7 8-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    location_on: (
      <path d="M12 21s6-5.8 6-11a6 6 0 0 0-12 0c0 5.2 6 11 6 11Z" fill="currentColor" />
    ),
    menu: (
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    ),
    close: (
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    ),
    shield_locked: (
      <path d="M12 3 5 6v6c0 4.2 2.6 7.8 7 9 4.4-1.2 7-4.8 7-9V6l-7-3Z" fill="currentColor" />
    ),
    rocket_launch: (
      <path d="M13 4c4 1 7 4 8 8-2 0-4 1-5 3l-3-2-3 3c-1-1-2-2-3-3 4-1 7-4 8-8Z" fill="currentColor" />
    ),
    format_quote: (
      <path d="M7 8h3v4H7zm7 0h3v4h-3z" fill="currentColor" />
    ),
    account_balance: (
      <path d="M4 8h16v2H4zm2 2v6h2v-6zm4 0v6h2v-6zm4 0v6h2v-6zm4 0v6h2v-6zM4 18h16" fill="currentColor" />
    ),
    health_and_safety: (
      <path d="M12 3 6 5v5c0 4 2.8 7.6 6 9 3.2-1.4 6-5 6-9V5l-6-2Zm-1 4h2v3h3v2h-3v3h-2v-3H8v-2h3V7Z" fill="currentColor" />
    ),
    storefront: (
      <path d="M4 8h16l-1 10H5L4 8Zm2-2h12V6H6v0Z" fill="currentColor" />
    ),
    factory: (
      <path d="M4 19h16v2H4zm2-2h2v-4H6zm4 0h2v-4h-2zm4 0h2v-4h-2zm4 0h2v-4h-2zM5 9l4-3 4 3 4-3 2 2v2H5v-2Z" fill="currentColor" />
    ),
    monitor_heart: (
      <path d="M5 5h14v10H5zm2 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    ),
  };

  const icon = common[name];
  if (!icon) {
    return <span className={className} aria-hidden="true">•</span>;
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {icon}
    </svg>
  );
}
