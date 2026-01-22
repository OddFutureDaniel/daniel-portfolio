"use client";

import Link from "next/link";
import { scrollToId } from "../ui/ScrollToID";

export default function Referral() {
  return (
    <section id="referral" className="border-t border-neutral-100">
      <div className="mx-auto max-w-4xl px-6">
        <div className="opacity-100 will-change-transform">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 md:p-12">
            {/* Background dot pattern */}
            <div
              className="
                absolute inset-0 opacity-[0.02]
                bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
                bg-size-[24px_24px]
              "
            />

            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1.5">
                  <svg
                    className="h-3.5 w-3.5 text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-600">
                    Referral Program
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  Know someone who needs a site?
                </h3>

                <p className="max-w-lg leading-relaxed text-neutral-500">
                  Refer a client to us and earn{" "}
                  <span className="font-medium text-neutral-900">10–15%</span>{" "}
                  of the project value. A simple thank-you for spreading the
                  word.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 md:items-end">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight md:text-5xl">
                    10–15
                  </span>
                  <span className="text-xl font-medium text-neutral-400 md:text-2xl">
                    %
                  </span>
                </div>

                <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Commission
                </span>

                <Link
                  href="/#calendar"
                  onClick={() => scrollToId("calendar", +100, { duration: 1 })}
                  className="group mt-2 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black"
                >
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}