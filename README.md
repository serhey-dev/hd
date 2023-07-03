This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO:
- (UI) Android date/time input right padding
- (UX) iPhone date/time picker min/max
- (UX) isAndroid / isIPhone remove (rework date/time inputs)
- (UX) iPhone map marker
- Lighthouse - performance (images)
- Snippet markup
- Better favicon
- .htaccess www. redirect
- 06/03/2023 - change subscription plan (Головна > Панель клієнта > Деталі послуги > Змінити розрахунковий період)
- New certification
- Читати далі

## Changelog:
### v1.3
- Changed "Записатись" to "Запис" (tag "Head")
- Updated background color of mobile menu icon (white -> green light)
- Updated prices (Services)

## Deploy instruction (CPanel)
1. Make sure you are using right credentials 
2. Run `yarn build`
3. Compress content of `build` directory -> `Archive.zip`
4. Login to CPanel
5. Go to files manager
6. Upload archive
7. Eject it to the root of `public_html` directory
8. Make sure all images have correct permissions - `0644`
9. Rename `404.html` to `404.shtml`
10. Make sure content of `.htaccess` file content is:
```
RewriteOptions inherit

RewriteEngine on

RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]

```