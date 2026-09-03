# MencoLab Astro

Migración local-first del export de Webflow. El sitio no carga Webflow JS, jQuery ni AOS.

## Desarrollo

```bash
npm install
npm run dev
```

## CMS

El repositorio configurado es `carlosmencog/mencolab`. Decap CMS estará disponible en `/admin/`. Antes de producción todavía debe configurarse el `base_url` del proxy OAuth de GitHub.

## Hosting

Build command: `npm run build`. Output directory: `dist`. Hostinger puede desplegar el proyecto como aplicación Astro conectada a GitHub. Cloudflare puede seguir utilizándose opcionalmente como proxy DNS/WAF o únicamente para alojar el proxy OAuth de Decap. Las cabeceras y redirects base están en `public/_headers` y `public/_redirects`.
