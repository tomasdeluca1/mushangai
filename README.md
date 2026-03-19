# muShanghai 2026

Landing de sponsorship para el viaje de Tomás Deluca a muShanghai 2026, construida con Next.js y conectada a Resend para recibir consultas desde el formulario de contacto.

## Desarrollo

1. Instalá dependencias:

```bash
npm install
```

2. Copiá el archivo de ejemplo y completá tus variables:

```bash
cp .env.example .env.local
```

Variables requeridas:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

3. Levantá el proyecto:

```bash
npm run dev
```

## Producción

```bash
npm run build
npm run start
```

## Nota sobre Resend

`CONTACT_FROM_EMAIL` debe ser una dirección válida para tu cuenta de Resend. `onboarding@resend.dev` sirve para pruebas iniciales, pero para producción conviene usar un dominio verificado.
