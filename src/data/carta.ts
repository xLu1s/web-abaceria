export type CartaGrupo = {
  id: string;
  silabas: string;
  titulo: string;
  script?: string;
  intro: string;
  items: { nombre: string; texto: string }[];
};

/**
 * No hay carta ni precios publicados.
 * Los grupos siguen el concepto que el local ha comunicado (bio y posts).
 * No son platos con nombre propio ni precios.
 */
export const carta: CartaGrupo[] = [
  {
    id: 'desayunos',
    silabas: 'DES·A·YU·NO',
    titulo: 'Desayunos',
    intro:
      'Todos los días, de 8:00 a 12:00. La carta de mañana no está publicada: esto es el hueco del servicio, no la lista del obrador.',
    items: [
      {
        nombre: 'Café e infusiones',
        texto: 'Para empezar el día. El detalle de la oferta [por confirmar].',
      },
      {
        nombre: 'Tostadas',
        texto: 'Los panes y los acompañamientos [por confirmar].',
      },
      {
        nombre: 'Dulce',
        texto: 'Bollería o dulce de obrador, si lo hay en la carta de desayunos [por confirmar].',
      },
    ],
  },
  {
    id: 'chacina',
    silabas: 'CHA·CI·NA',
    titulo: 'Chacina',
    script: 'para compartir',
    intro:
      'El mural del local dice «Chacina». En Instagram lo resumen así: el mejor embutido es el que se comparte.',
    items: [
      {
        nombre: 'Embutido para compartir',
        texto: 'Tabla de chacina para el centro de la mesa. Piezas y origen [por confirmar].',
      },
      {
        nombre: 'Chacina de la casa',
        texto: 'Lo que cuelga en el mural. La selección del día se dice en el local.',
      },
    ],
  },
  {
    id: 'conservas',
    silabas: 'CON·SER·VA',
    titulo: 'Conservas, tapas y gildas',
    intro:
      'La bio lo deja en cuatro palabras: conservas, tapas, vinos y vermut.',
    items: [
      {
        nombre: 'Gildas',
        texto: 'Palillo, aceituna y anchoa, aliñadas en la mesa. Variantes [por confirmar].',
      },
      {
        nombre: 'Tostas y tapas',
        texto: 'Tapa corta para picar. La lista cerrada no se ha publicado.',
      },
      {
        nombre: 'Conservas',
        texto: 'Latas de la despensa, al modo de un ultramarinos. Referencias [por confirmar].',
      },
    ],
  },
  {
    id: 'vermut',
    silabas: 'VER·MUT',
    titulo: 'Vinos y vermut',
    intro: 'Para acompañar la tapa. La bodega concreta no está publicada.',
    items: [
      {
        nombre: 'Vermut',
        texto: 'El vermut de la casa. Marca y si es de grifo [por confirmar].',
      },
      {
        nombre: 'Vinos',
        texto: 'Copas y botellas de la despensa. La carta de vinos [por confirmar].',
      },
      {
        nombre: 'Cerveza de grifo',
        texto: 'Hay cerveza de grifo en el local. Variedades [por confirmar].',
      },
    ],
  },
];
