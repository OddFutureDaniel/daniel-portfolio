"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Calendar() {
    useEffect(() => {
      (async function () {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", {
          theme: "dark",
          hideEventTypeDetails: false,
          layout: "month_view",
          cssVarsPerTheme: {
            light: { "cal-brand": "#a61313" },
            dark: { "cal-brand": "#4283a6" },
          },
        });
      })();
    }, []);
  
    return (
      <section aria-labelledby="book-call-title">
        <h2 id="book-call-title" className="sr-only">
          Book a call
        </h2>
  
        <p className="sr-only" id="book-call-desc">
          Use the calendar below to pick a time and book a 30 minute call.
        </p>
  
        <div aria-describedby="book-call-desc">
          <Cal
            namespace="30min"
            calLink="thirdline/30min"
            calOrigin="https://app.cal.com"
            style={{ width: "100%", height: "500px", overflow: "auto" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>
      </section>
    );
  }
