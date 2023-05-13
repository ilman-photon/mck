import Script from 'next/script';

export default function GoogleTagManager() {
    return (
        <>
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GTM-T7ZB56L"/>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ 
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-T7ZB56L', {
              page_path: window.location.pathname,
              }); `,
            }}
          />
        </>
    )
}