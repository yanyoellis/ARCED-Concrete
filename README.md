# ARCED Concrete Services Website

Premium, responsive React website and concrete cost calculator for ARCED Construction Group LTD.

The project now includes:

- Main concrete services landing page (`/`)
- Interactive project cost calculator (`/calculator`)
- Privacy Policy (`/privacy-policy`)
- Terms of Use (`/terms-of-use`)

## Run locally

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

## Before launch

- Connect `handleSubmit` in `src/App.jsx` to the chosen email service or CRM endpoint.
- Replace sample testimonial copy with approved customer reviews when available.

## Image assets

The site uses the supplied ARCED logo with its background removed and four purpose-made architectural images. They were created with the built-in image generation/editing workflow using these concise production prompts:

- Preserve the supplied ARCED logo exactly; replace only its white background with a removable flat chroma key, then output a transparent PNG.
- Premium Winnipeg concrete driveway at a contemporary home, with precise control joints and professional grading.
- Refined backyard concrete patio with a clean broom finish and crisp edges.
- Premium stamped concrete walkway and front landing with restrained ashlar texture.
- Newly finished residential garage slab with a smooth machine finish and control joints.
