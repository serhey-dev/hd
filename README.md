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
- .htaccess www. redirect
- Читати далі

## Changelog:
### v1.6
- Updated city

### v1.5
- Updated last name
- Updated logo, favicon, images
- Added some new sizes of platform-specific icons

### v1.4
- Updated prices (Services)
- Added new certifications (About)

### v1.3
- Changed "Записатись" to "Запис" (tag "Head")
- Updated background color of mobile menu icon (white -> green light)
- Updated prices (Services)

## Deploy instruction (CPanel)
1. Make sure you are using right credentials 
2. Run `yarn build`
3. Compress content of `build` directory -> `Archive.zip` (open `build` directory -> select all files -> right click -> "compress" them)
4. Login to CPanel (Go to Hostiq -> "Мої послуги" -> "Віртуальний хостинг")
5. Go to files manager
6. Go to `public_html` directory and upload archive to the root
7. Eject it to the root of `public_html` directory (Right click -> "Eject"). It will update all existing files. If there are some files that aren't used in the codebase - delete them.
8. Make sure all images have correct permissions - `0666` (I do this manually).
9. Rename `404.html` to `404.shtml` if needed
10. Make sure content of the `.htaccess` file content is (https://hostiq.ua/wiki/ukr/301-redirect/):
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

## SSL certificate
https://hostiq.ua/wiki/installation-ssl-certificate-cpanel/

#### Private key is stored on the Google Drive.

### If the content was changed - it's recommended to go to Google Search Console and request re-indexing of changed pages.