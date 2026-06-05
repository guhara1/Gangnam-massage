const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.replace(/[^\d+]/g, "");

export function FloatingCallButton() {
  const href = contactPhone ? `tel:${contactPhone}` : "/contact";

  return (
    <a
      href={href}
      aria-label={contactPhone ? "전화 연결" : "예약 문의로 이동"}
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#ff7a00] text-black shadow-2xl shadow-[#ff7a00]/35 ring-2 ring-[#ffb15c]/60 md:hidden"
    >
      <span className="absolute h-full w-full animate-[callPulse_1.8s_ease-out_infinite] rounded-full bg-[#ff7a00]/35" />
      <svg
        aria-hidden="true"
        className="relative h-8 w-8 animate-[callShake_1.2s_ease-in-out_infinite]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92Z" />
      </svg>
    </a>
  );
}
