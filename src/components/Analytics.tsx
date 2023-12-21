import Script from "next/script";
import React from "react";

export default function Analytics() {
  const GTM_ID = "GTM-WPSRHP7J";
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WPSRHP7J"
          height="0"
          width="0"
          className="display:none;visibility:hidden"
        ></iframe>
      </noscript>

      <Script id="google-tag-management">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',"${GTM_ID}");

`}</Script>
    </>
  );
}
