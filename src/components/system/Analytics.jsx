import { useEffect } from "react";

function Analytics() {

    useEffect(() => {

        // ===== Google Analytics 4 =====

        const gaScript = document.createElement("script");

        gaScript.async = true;

        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-FT0V7TKDMG";

        document.head.appendChild(gaScript);

        const gaConfig = document.createElement("script");

        gaConfig.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FT0V7TKDMG');
        `;

        document.head.appendChild(gaConfig);

        // ===== Microsoft Clarity =====

        const clarityScript = document.createElement("script");

        clarityScript.type = "text/javascript";

        clarityScript.innerHTML = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xr7cdkbw48");
        `;

        document.head.appendChild(clarityScript);

    }, []);

    return null;

}

export default Analytics;