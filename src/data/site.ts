export const site = {
  name: 'La Abacería de San Lorenzo',
  claim: 'Lo de siempre, como nos gusta ahora',
  tagline: 'Conservas · tapas · vinos · vermut',
  phoneDisplay: '746 05 11 55',
  phoneTel: '+34746051155',
  street: 'C. Sant Llorenç, 39',
  streetEs: 'Calle San Lorenzo, 39',
  postalCode: '03801',
  locality: 'Alcoi',
  localityEs: 'Alcoy',
  region: 'Alicante',
  country: 'ES',
  lat: 38.6972566,
  lng: -0.4749425,
  mapsUrl:
    'https://www.google.com/maps/place/La+Abacer%C3%ADa+de+San+Lorenzo/@38.6972566,-0.4749425,17z',
  instagram: 'https://www.instagram.com/laabaceriadesanlorenzo/',
  instagramHandle: '@laabaceriadesanlorenzo',
  opened: '23 de octubre de 2026',
  raeUrl: 'https://dle.rae.es/abacer%C3%ADa',
} as const;

export const phoneHref = `tel:${site.phoneTel}`;

/** Horario de la bio de Instagram (31/10/2026). El cierre del jueves no está publicado. */
export const hours = [
  {
    id: 'desayunos',
    label: 'Desayunos',
    when: 'Lunes a domingo',
    time: '8:00–12:00',
  },
  {
    id: 'comidas',
    label: 'Comidas y cenas',
    when: 'Viernes a domingo',
    time: '13:00–00:00',
  },
  {
    id: 'jueves',
    label: 'Jueves',
    when: 'Cenas',
    time: 'Desde las 18:00',
    note: 'Cierre [por confirmar]',
  },
] as const;

export const hoursNotice =
  'Horario de la bio de Instagram. No coincide del todo con Google Maps, donde el domingo aparece solo hasta las 12:00 y el sábado de 8:00 a 00:00. El miércoles, jueves y viernes no se veían en la ficha. Horario oficial [por confirmar].';
