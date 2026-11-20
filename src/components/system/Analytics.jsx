
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Analytics() {
    const location = useLocation();

    // Inicializar los servicios una sola vez
    useEffect(() => {
        // ==========================
        // Google Analytics 4
        // ==========================

        if (!window.__gaInitialized) {
            window.__gaInitialized = true;

            window.dataLayer = window.dataLayer || [];

            window.gtag = function () {
                window.dataLayer.push(arguments);
            };

            window.gtag("js", new Date());

            window.gtag("config", "G-0JSY0XBMCR", {
                send_page_view: false
            });

            const gaScript = document.createElement("script");
            gaScript.async = true;
            gaScript.src =
                "https://www.googletagmanager.com/gtag/js?id=G-0JSY0XBMCR";

            document.head.appendChild(gaScript);
        }

        // ==========================
        // Microsoft Clarity
        // ==========================

        if (!window.__clarityInitialized) {
            window.__clarityInitialized = true;

            (function (c, l, a, r, i, t, y) {
                c[a] = c[a] || function () {
                    (c[a].q = c[a].q || []).push(arguments);
                };

                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;

                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);

            })(window, document, "clarity", "script", "xr7cdkbw48");
        }
    }, []);

    // ==========================
    // Registrar cada página visitada
    // ==========================

    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag("event", "page_view", {
                page_title: document.title,
                page_location: window.location.href,
                page_path: location.pathname + location.search
            });
        }
    }, [location.pathname, location.search]);

    return null;
}

export default Analytics;
