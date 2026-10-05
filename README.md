# pblinux.rojas.place

Tarjeta de presentación digital de Pablo Bautista, enlazada desde una tarjeta NFC.

Sitio estático (HTML + CSS, sin build) desplegado en Cloudflare Workers.

## Estructura

| Archivo | Qué es |
| --- | --- |
| `index.html` | Página principal: perfil, contacto, experiencia, educación y comunidad |
| `talks.html` | Listado de charlas (Google Slides), servido en `/talks` |
| `404.html` | Página para URLs que no existen (`not_found_handling` en `wrangler.toml`) |
| `contact.vcf` | Contacto (vCard 3.0, con foto embebida) del botón *Save contact* |
| `_headers` | Sirve `contact.vcf` como `text/vcard` para que el teléfono lo abra como contacto |
| `css/main.css` | Estilos y colores (tokens en `:root`) |
| `print/` | QR del sitio para Wallet e impresión (no se despliega) |

## Actualizar datos

Los datos están duplicados: si cambias cargo, correo o enlaces, actualiza **`index.html` y `contact.vcf`**.
`contact.vcf` usa saltos de línea `CRLF`; edítalo con un editor que los respete.

## Desarrollo local

```sh
python3 -m http.server 8080
```

En local, `/talks` da 404 (abre `talks.html`); en Cloudflare funciona.

## Deploy

Cada push a `main` despliega con `npx wrangler deploy` (Worker `me`, dominio `pblinux.rojas.place`).

Basado en [LittleLink](https://github.com/sethcottle/littlelink) (MIT, ver `LICENSE.md`); los iconos de LinkedIn y GitHub vienen de ahí.
