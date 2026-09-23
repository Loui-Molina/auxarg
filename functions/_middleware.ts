/// <reference types="@cloudflare/workers-types" />

// Known vulnerability scanners and malicious automated tools
const BLOCKED_USER_AGENTS = [
  'sqlmap',
  'nikto',
  'acunetix',
  'masscan',
  'zgrab',
  'nmap',
  'dirbuster',
  'gobuster',
  'wpscan',
  'hydra',
  'medusa',
  'burpsuite',
  'openvas',
  'havij',
  'shodan',
  'censys',
  'zoomeye',
  'nuclei',
  'netsparker',
];

// Suspicious file extensions and path probes
const BLOCKED_PATH_PATTERNS = [
  // Sensitive files & environment configs
  /\.(env|git|svn|htaccess|htpasswd|aws|yml|yaml|sql|bak|backup|config|old|orig|swp)$/i,
  // Server-side script exploits (site is SSG)
  /\.(php|asp|aspx|jsp|cgi|pl|py|sh|bash)$/i,
  // Common CMS & vulnerability target paths
  /^\/(wp-admin|wp-login|wp-includes|wp-content|xmlrpc\.php)/i,
  /^\/(phpmyadmin|pma|adminer|solr|actuator|swagger|v2\/_catalog)/i,
  /^\/(cgi-bin|etc\/passwd|\.well-known\/.*eval|proc\/self)/i,
  // Path traversal attempts
  /(\.\.|\%2e\%2e|\%00)/i,
];

// Allowed HTTP methods for static landing page
const ALLOWED_METHODS = new Set(['GET', 'HEAD']);

export const onRequest: PagesFunction = async (context) => {
  const { request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();

  // 1. Block disallowed HTTP methods
  if (!ALLOWED_METHODS.has(request.method.toUpperCase())) {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        Allow: 'GET, HEAD',
      },
    });
  }

  // 2. Block known malicious User-Agents
  for (const tool of BLOCKED_USER_AGENTS) {
    if (userAgent.includes(tool)) {
      return new Response('Forbidden: Automated scanning tools are not permitted.', {
        status: 403,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      });
    }
  }

  // 3. Block path traversal and exploit probe patterns
  for (const pattern of BLOCKED_PATH_PATTERNS) {
    if (pattern.test(pathname) || pattern.test(url.search)) {
      return new Response('Forbidden: Access denied to requested resource.', {
        status: 403,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      });
    }
  }

  // 4. Cloudflare Threat Score / Bot Reputation check (if enabled in Cloudflare)
  const cf = request.cf;
  if (cf && typeof cf.threatScore === 'number' && cf.threatScore > 30) {
    return new Response('Forbidden: High threat score detected.', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }

  // 5. Proceed to next handler / static asset
  const response = await context.next();

  // 6. Security Header Enforcement on all dynamic responses
  const headers = new Headers(response.headers);
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};
