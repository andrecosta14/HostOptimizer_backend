const welcomePage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HostOptimizer</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          background-color: #f4f4f9;
          color: #333;
          margin: 0;
          padding: 0;
        }
        header {
          background-color: #267dc2;
          color: white;
          padding: 1rem 0;
          text-align: center;
        }
        header h1 {
          margin: 0;
        }
        main {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
        }
        a {
          text-decoration: none;
          color: #267dc2;
        }
        a:hover {
          text-decoration: underline;
        }
        .section-title {
          margin-top: 20px;
          padding-top: 10px;
          border-top: 2px solid #ddd;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>HostOptimizer</h1>
      </header>
      <main>
        <p>Explore the available routes below:</p>
        <p>Consider the base route: hostoptimizer.onrender.com</p>

        <section>
          <h2 class="section-title">User Routes</h2>
          <ul>
            <li><a href="/api/v1/users">GET /users</a> ...</li>
            <li><a href="/api/v1/users/:id">GET /users/:id</a> ...</li>
            <li><a href="/api/v1/users">POST /users</a> ...</li>
            <li><a href="/api/v1/users/:id">PUT /users/:id</a> ...</li>
            <li><a href="/api/v1/users/:id">DELETE /users/:id</a> ...</li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Configuracao Routes</h2>
          <ul>
            <li><a href="/api/v1/configuracao">GET /configuracao</a> ...</li>
            <li><a href="/api/v1/configuracao/:id">GET /configuracao/:id</a> ...</li>
            <li><a href="/api/v1/configuracao">POST /configuracao</a> ...</li>
            <li><a href="/api/v1/configuracao/:id">PUT /configuracao/:id</a> ...</li>
            <li><a href="/api/v1/configuracao/:id">DELETE /configuracao/:id</a> ...</li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Avaliacao Routes</h2>
          <ul>
            <li><a href="/api/v1/avaliacao">GET /avaliacao</a> ...</li>
            <li><a href="/api/v1/avaliacao/:id">GET /avaliacao/:id</a> ...</li>
            <li><a href="/api/v1/avaliacao">POST /avaliacao</a> ...</li>
            <li><a href="/api/v1/avaliacao/:id">PUT /avaliacao/:id</a> ...</li>
            <li><a href="/api/v1/avaliacao/:id">DELETE /avaliacao/:id</a> ...</li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Authentication Routes</h2>
          <ul>
            <li><a href="/api/v1/login">POST /login</a> ...</li>
            <li><a href="/api/v1/user">GET /user</a> ...</li>
          </ul>
        </section>
      </main>
    </body>
    </html>
  `.replaceAll('\n','');

module.exports = { welcomePage };