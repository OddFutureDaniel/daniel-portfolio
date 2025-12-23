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
        <Cal
            namespace="30min"
            calLink="thirdline/30min"
            // booking page is on app.cal.eu
            calOrigin="https://app.cal.eu"
            style={{ width: "100%", height: "500px", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "dark" }}
        />
    );
}

