# The Vendor Book / Income Tracker

Double-click `Start Income Tracker.bat` to run the app locally.

The source `index.html` is not meant to be opened directly from Chrome. The app is built with Vite, so it needs the local server started by the launcher.

Local app URL:

```text
http://127.0.0.1:5173
```

Development commands:

```bash
npm.cmd install
npm.cmd run dev -- --host 127.0.0.1 --port 5173
npm.cmd run build
```

SMTP email sending runs through a small local server. Start it in a separate terminal:

```powershell
npm.cmd run mail
```

Then open Settings -> Email in the app, enter the SMTP host, user, password/app password, and sender fields, then send a test email.

You can also double-click `Start Email Server.bat`. For Office365 with `smtp.office365.com` on port `587`, leave "Use SSL/TLS" off in Settings because Office365 upgrades the connection with STARTTLS.
