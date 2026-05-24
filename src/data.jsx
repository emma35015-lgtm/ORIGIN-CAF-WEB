// Shared product data + helpers
// Real sizes: 250g, 400g, 1kg. Available in Grano (whole bean / foil) or Molido (ground / matte gray).

window.PRODUCTS = [
  {
    id: 'descubrir',
    name: 'Para Descubrir',
    size: '250g',
    price: 130,
    intensity: 'Suave',
    intensityLevel: 3,
    notes: ['Chocolate', 'Almendra', 'Cítrico suave'],
    tag: 'NUEVO AQUÍ',
    eyebrow: '01 · La probadita',
    blurb: 'Bolsa chica para empezar el rito. Rinde unos días — suficiente para enamorarte. O para regalar y quedar bien.',
    rinde: '~16 tazas',
    color: '#D88B70',
    bagImg: 'assets/bag-1kg.png',
  },
  {
    id: 'diaria',
    name: 'Tu Taza Diaria',
    size: '400g',
    price: 240,
    intensity: 'Medio',
    intensityLevel: 3,
    notes: ['Cacao', 'Nuez tostada', 'Miel'],
    tag: 'MÁS VENDIDA',
    eyebrow: '02 · El default',
    blurb: 'La cantidad justa para quien no perdona su café cada mañana. Una bolsa, dos semanas, cero excusas.',
    rinde: '~26 tazas',
    color: '#D88B70',
    bagImg: 'assets/bag-400g.png',
  },
  {
    id: 'amantes',
    name: 'Para Amantes',
    size: '1kg',
    price: 415,
    intensity: 'Intenso',
    intensityLevel: 3,
    notes: ['Cacao oscuro', 'Especias', 'Panela'],
    tag: 'SIN MIEDO',
    eyebrow: '03 · El kilo',
    blurb: 'Para quienes lo toman a diario o lo comparten en casa, oficina o cafetería. El kilo de los devotos.',
    rinde: '~66 tazas',
    color: '#D88B70',
    bagImg: 'assets/bag-250g.png',
  },
];

// Presentación: grano (whole bean / silver foil) or molido (ground / gray)
window.PRESENT_OPTIONS = [
  { id: 'grano', label: 'Grano entero', sub: 'Tú lo muelas en casa' },
  { id: 'molido', label: 'Molido', sub: 'Listo para preparar' },
];

window.formatMXN = (n) => `$${n.toLocaleString('es-MX')} MXN`;
