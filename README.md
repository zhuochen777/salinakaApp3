## when deploy frontend on Netlify

1. in public folder, create a _redirects file with content: /* /index.html 200 to prevent 404 not found when page redirecting

2. Build command: CI= npm run build (npm run build will trigger error)

3. Base directory: frontend

4. after deployment, add netlify site name to firebase authorized domains(firebase-> project-> authorization-> settings-> authorized domains-> add netlify domain)