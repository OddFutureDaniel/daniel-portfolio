"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="!fixed !bottom-4 !left-4 !right-4 !z-50 md:!left-6 md:!right-auto md:!max-w-md">
      <div className="!rounded-2xl !border !border-neutral-200 !bg-white !p-4 !shadow-xl">
        <p className="!text-sm !text-neutral-700">
          This site uses cookies for analytics and performance.  
          By continuing, you agree to their use.  
          <Link
            href="/privacy"
            className="!ml-1 !underline !underline-offset-2"
          >
            Privacy policy
          </Link>
        </p>

        <button
          onClick={acceptCookies}
          className="!mt-3 !inline-flex !rounded-full !bg-black !px-4 !py-2 !text-sm !font-medium !text-white hover:!bg-neutral-900"
        >
          Accept
        </button>
      </div>
    </div>
  );
}