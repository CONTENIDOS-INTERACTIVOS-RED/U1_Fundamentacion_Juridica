export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      // {
      //   nombreRuta: 'inicio',
      //   icono: 'fas fa-home',
      //   titulo: 'Volver al inici',
      // },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 1.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '1.',
        titulo: 'Definición del Derecho',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto del Derecho',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Finalidades del Derecho',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Características del Derecho y el problema de su definición',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '2.',
        titulo: 'Fuentes del Derecho',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La Jurisprudencia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La doctrina',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Principios generales del derecho',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Las fuentes del Derecho en Colombia',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '3.',
        titulo: 'Clasificación del Derecho',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Derecho Público',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Derecho Privado',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'Unidad 1.',
        numero: '4.',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Atienza, M. (2013). <em>Curso de argumentación jurídica</em>: (1 ed.). Editorial Trotta, S.A.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61319',
    },
    {
      referencia:
        'Carrasco Perera, Á. & González Carrasco, M. D. C. (2018). <em>Introducción al Derecho y fundamentos de Derecho privado</em>: (2 ed.). Difusora Larousse - Editorial Tecnos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123141',
    },
    {
      referencia:
        'Carretero Sanchez, S. (2015). <em>Nueva introducción a la teoría del derecho</em>: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/60943',
    },
    {
      referencia:
        'González Jácome, J. (2009). <em>El problema de las fuentes del derecho</em>: una perspectiva desde la argumentación jurídica</em>: (1 ed.). Red Vniversitas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/32739',
    },
    {
      referencia:
        'Hernandez Quintero, H. A. Gómez Peña, G. E. & María Cristina Solano de Ojeda. (2016). <em>Lecciones de introducción al derecho</em>: (1 ed.). Universidad de Ibagué.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70168',
    },
    {
      referencia:
        'Lorca Martín de Villodres, M. I. (2017). <em>El concepto de derecho de un siglo</em>: su perspectiva iusfilosófica</em>: (1 ed.). Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58832',
    },
  ],
  glosario: [
    {
      termino: 'Constitución',
      significado:
        'norma suprema que organiza el poder del Estado y establece los derechos y deberes de los ciudadanos.',
    },
    {
      termino: 'Convivencia',
      significado:
        'relación de interacción social regulada por normas que buscan mantener el orden y la justicia en la sociedad.',
    },
    {
      termino: 'Coercibilidad',
      significado:
        'característica del Derecho que permite su imposición mediante la fuerza en caso de incumplimiento.',
    },
    {
      termino: 'Costumbre',
      significado:
        'fuente de Derecho basada en prácticas reiteradas y aceptadas por una comunidad que regulan conductas sin la necesidad de intervención estatal.',
    },
    {
      termino: 'Derecho',
      significado:
        'conjunto de normas, principios y valores que rigen las relaciones entre individuos e instituciones para mantener el orden, la justicia y la paz social.',
    },
    {
      termino: 'Derecho público',
      significado:
        'conjunto de normas que rigen la actividad del Estado y las relaciones entre el Estado y los ciudadanos.',
    },
    {
      termino: 'Derecho privado',
      significado:
        'conjunto de normas que regulan las relaciones entre particulares en sus intereses individuales.',
    },
    {
      termino: 'Doctrina',
      significado:
        'opiniones y estudios de juristas que sirven como referencia para interpretar y mejorar el sistema jurídico.',
    },
    {
      termino: 'Equidad',
      significado:
        'principio que ajusta la aplicación de las normas jurídicas a las circunstancias particulares de cada caso para asegurar justicia.',
    },
    {
      termino: 'Jurisprudencia',
      significado:
        'interpretación de la ley que hacen los tribunales al aplicar la norma en casos concretos, estableciendo precedentes obligatorios.',
    },
    {
      termino: 'Justicia',
      significado:
        'finalidad del Derecho que busca que cada persona reciba lo que le corresponde según sus actos y circunstancias.',
    },
    {
      termino: 'Moral',
      significado:
        'conjunto de normas de conducta que cada persona sigue de acuerdo con sus valores y principios, sin ser coercitiva.',
    },
    {
      termino: 'Normas',
      significado:
        'reglas establecidas por el Derecho que determinan lo permitido y lo prohibido en la conducta social.',
    },
    {
      termino: 'Principios generales del derecho',
      significado:
        'criterios abstractos que informan el ordenamiento jurídico y suplen la falta de regulación en casos específicos.',
    },
    {
      termino: 'Seguridad jurídica',
      significado:
        'certeza de los ciudadanos sobre las normas que rigen su conducta y las consecuencias de su aplicación.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
