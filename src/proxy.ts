import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || '';
  
  let defaultLocale: 'en' | 'es' | 'pt-BR' | 'pt-PT' = 'en';
  if (country === 'BR') defaultLocale = 'pt-BR';
  else if (country === 'PT') defaultLocale = 'pt-PT';
  else if (['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'UY', 'VE'].includes(country)) defaultLocale = 'es';

  // Handle explicit /pt route from language selector
  const pathname = request.nextUrl.pathname;
  if (pathname === '/pt' || pathname.startsWith('/pt/')) {
    const newPath = pathname.replace(/^\/pt/, country === 'PT' ? '/pt-PT' : '/pt-BR');
    request.nextUrl.pathname = newPath;
    return NextResponse.redirect(request.nextUrl);
  }

  const handleI18nRouting = createMiddleware({
    locales: ['en', 'es', 'pt-BR', 'pt-PT'],
    defaultLocale,
    localeDetection: true,
    localePrefix: 'always' // Forces /en, /es, /pt-BR which avoids overlaps
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
