const COOKIE_NAME = 'golden_invest_auth';
const COOKIE_VALUE = 'ok';
const PASSWORD = 'golden';

function getCookie(request, name) {
  const cookie = request.headers.get('Cookie') || '';
  return cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`))
    ?.slice(name.length + 1);
}

function html(message = '') {
  const warning = message
    ? `<p class="error">${message}</p>`
    : '';

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Golden Glaze Investor Portal</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #090806;
      color: #f7efe0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    main {
      width: min(420px, calc(100vw - 32px));
      padding: 32px;
      border: 1px solid rgba(247, 239, 224, 0.14);
      border-radius: 18px;
      background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025));
      box-shadow: 0 24px 80px rgba(0,0,0,0.42);
    }
    h1 { margin: 0 0 8px; font-size: 24px; letter-spacing: -0.02em; }
    p { margin: 0 0 22px; color: rgba(247, 239, 224, 0.68); line-height: 1.45; }
    label { display: block; margin-bottom: 8px; font-size: 13px; color: rgba(247, 239, 224, 0.72); }
    input {
      width: 100%;
      padding: 13px 14px;
      border-radius: 12px;
      border: 1px solid rgba(247, 239, 224, 0.18);
      background: rgba(255,255,255,0.06);
      color: #f7efe0;
      font: inherit;
      outline: none;
    }
    input:focus { border-color: #d5a329; box-shadow: 0 0 0 3px rgba(213, 163, 41, 0.18); }
    button {
      width: 100%;
      margin-top: 14px;
      padding: 13px 16px;
      border: 0;
      border-radius: 12px;
      background: #d5a329;
      color: #161104;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
    }
    .error { color: #ff9b8f; margin-bottom: 16px; }
  </style>
</head>
<body>
  <main>
    <h1>Golden Glaze Investor Portal</h1>
    <p>Enter the access password to continue.</p>
    ${warning}
    <form method="post" action="/access">
      <label for="password">Password</label>
      <input id="password" name="password" type="password" autocomplete="current-password" autofocus />
      <button type="submit">Enter</button>
    </form>
  </main>
</body>
</html>`;
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (url.pathname === '/access' && request.method === 'POST') {
    const form = await request.formData();
    const password = String(form.get('password') || '');

    if (password === PASSWORD) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: '/',
          'Set-Cookie': `${COOKIE_NAME}=${COOKIE_VALUE}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`,
        },
      });
    }

    return new Response(html('wrong password'), {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  if (getCookie(request, COOKIE_NAME) === COOKIE_VALUE) {
    return next();
  }

  return new Response(html(), {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
