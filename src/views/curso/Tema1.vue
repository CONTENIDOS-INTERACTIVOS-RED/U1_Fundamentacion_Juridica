<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. FUNDAMENTACIÓN JURÍDICA'" :subTitulo="'1. Definición del Derecho'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden


    .row.justify-content-center.align-items-center.mb-5
      .col-lg
        p.mb-0(data-aos="fade-up") El derecho es una disciplina esencial para la vida social, política y económica de las naciones e individuos. Su adecuada comprensión requiere una definición precisa, que no solo fundamenta su estudio teórico, sino que también es crucial para entender su función y asegurar su correcta aplicación.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema1/1.svg', alt='')

    .bg-color-2.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema1/2.png', alt='')
        .col-lg
          .ps-4.pe-5
            p(data-aos="fade-up") Se parte de la idea de que el derecho:
            .row.justify-content-center.align-items-center(v-for="item in items" :key="item.text" data-aos="fade-up").mb-3
              .col-auto
                figure
                  img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
              .col
                p.mb-0 {{ item.text }}

    h2(data-aos="fade-up") El derecho como necesidad humana

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg-color-1.p-4.mb-4
          p.mb-0(data-aos="fade-up") Aristóteles señala que #[strong “el hombre es Ζωον πολιτικον, por naturaleza un animal social.”] Esto implica que la necesidad del derecho surge de la racionalidad humana y de la interacción social. Según Gregorio Peces-Barba, el derecho se sitúa en el ámbito de la vida, regulando la conducta social humana y estableciendo pautas de comportamiento para garantizar la justicia.

        p(data-aos="fade-up") El derecho es el conjunto de normas, principios y valores que regulan las relaciones entre individuos e instituciones, con el objetivo de mantener el orden, la justicia y la paz social. Se trata de un sistema de reglas que permite la convivencia armónica y justa, cuyo desarrollo ha sido enriquecido por diversos teóricos a lo largo de la historia.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/3.png', alt='')

    #t_1_1.titulo-segundo
      h2 #[span 1.1]  Concepto del Derecho

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        
        p(data-aos="fade-up").mb-4 A lo largo de la historia, el término "derecho" ha sido interpretado de diversas maneras y ha adoptado diferentes formulaciones lingüísticas:
        
        .bg-color-2.p-4

          .row.justify-content-center.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema1/4.svg' alt='' style="width: 65px;")
            .col
              p.mb-0 Palabras como #[em droit, diritto, recht, jus, directum, right y law] se utilizan para referirse al derecho en distintos idiomas y contextos.
          
          .row.justify-content-center.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema1/5.svg' alt='' style="width: 65px;")
            .col
              p.mb-0 En la antigua Roma, el término jus hacía referencia a aquello que podía hacerse sin causar daño a otros, sin necesariamente implicar un enfoque normativo.
          
          .row.justify-content-center.align-items-center.mb-3
            .col-auto
              figure
                img(src='@/assets/curso/tema1/6.svg' alt='' style="width: 65px;")
            .col
              p.mb-0 En la ciencia jurídica moderna, la interpretación predominante es de carácter normativista, enfocándose en el derecho como un conjunto de normas.

      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/7.png', alt='')

    p(data-aos="fade-up").mb-4 En sus inicios, el derecho era prácticamente indistinguible de la tradición, la religión o las costumbres. A medida que las sociedades se volvían más complejas, surgió la necesidad de establecer leyes escritas y procedimientos para mantener el orden social.

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/8.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Algunos autores lo consideran un conjunto de normas que deben cumplirse bajo la amenaza de una sanción (Floresgómez González y Carvajal Moreno, 1986).
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/8.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Otros lo ven como una herramienta de justicia para asegurar que todos reciban lo que les corresponde (Peraznieto y Abel, 1989).
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/9.png', alt='')
      .col-lg-6
        p(data-aos="fade-up").mb-4 La palabra "derecho" tiene múltiples significados en el lenguaje general y en el ámbito jurídico:
        
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            figure
              img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
          .col
            p.mb-0 Su origen latino proviene de la palabra directum, que alude a no apartarse del buen camino y seguir la ley.
        
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            figure
              img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
          .col
            p.mb-0 En latín más formal, se empleaba el término ius para referirse a este concepto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-up").mb-4 Los enfoques de diferentes juristas son: 
        
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            figure
              img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
          .col
            p.mb-0 Radbruch (1955) define el derecho como el conjunto de normas generales y positivas que regulan la vida social.
        
        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            figure
              img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
          .col
            p.mb-0 Hans Kelsen (2020), uno de los teóricos más influyentes, describe el derecho como un sistema de normas coercitivas que regula la conducta de las personas.

        .row.justify-content-center.align-items-center.mb-3
          .col-auto
            figure
              img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
          .col
            p.mb-0 Gregorio Peces-Barba (1988),  considera el derecho como un conjunto de normas que organiza la vida social humana, con validez sustentada en el poder.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/10.png', alt='')

    p(data-aos="fade-up").mb-4 Algunas visiones complementarias de autores destacados son:

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/11.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Hart (1961) plantea que el derecho es un sistema de reglas que incluye normas primarias y secundarias.
      
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/11.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Dworkin (1977) argumenta que el derecho también abarca principios morales que deben guiar su interpretación.
      
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/tema1/11.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Luhmann (1985) presenta una visión sociológica del derecho como un sistema que se auto-reproduce a través de normas y procedimientos.
      
    p(data-aos="fade-up").mb-4 El concepto de derecho puede abordarse desde diferentes enfoques:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-7
        AcordionA(tipo="b").mb-5
          .div(titulo="Como ordenamiento")
            p Un conjunto de normas que regulan la conducta humana.
          .div(titulo="Como fenómeno social")
            p Un sistema que regula la convivencia entre individuos dentro de una sociedad.
          .div(titulo="Como valor")
            p Un conjunto de disposiciones al servicio de valores sociales y con una finalidad moral.
          .div(titulo="Desde la argumentación")
            p Un sistema de normas que se expresan a través del lenguaje y que son formuladas por el legislador.

        p(data-aos="fade-up").mb-4 Estas aproximaciones permiten entender la amplitud del concepto de derecho y su papel esencial en la organización y regulación de la vida en sociedad.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/12.png', alt='')
          
    #t_1_2.titulo-segundo
      h2 #[span 1.2]  Finalidades del Derecho
    
    p(data-aos="fade-up").mb-4 El derecho cumple varias finalidades fundamentales que justifican su existencia y aplicación en la sociedad. Estas finalidades son la razón de ser de las normas jurídicas, y su adecuada comprensión es esencial para cualquier estudiante de derecho:

    .bg-full-width.bg-color-5.mb-0
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 887px;").mx-auto

                .bg-color-6.p-3(x="12%" y="19%" numero="1")
                  h5 Orden social
                  p Contribuye al orden social mediante un conjunto de normas que regulan la conducta de las personas, evitando conflictos innecesarios. Por ejemplo, las leyes de tránsito organizan el comportamiento de los conductores para prevenir accidentes, manteniendo la armonía y seguridad en la vía pública.

                .bg-color-6.p-3(x="88%" y="19%" numero="2")
                  h5 Justicia
                  p Es una de las principales finalidades del derecho, que busca que cada persona reciba lo que le corresponde según sus actos y circunstancias. Se orienta a decisiones equitativas y justas, adaptándose a la conducta humana y su naturaleza social. Santo Tomás la define como "el hábito por el cual, con constante y perpetua voluntad, se da a cada uno lo que le corresponde". "Lo suyo" se refiere a todo lo que le pertenece en relación con otro.

                .bg-color-6.p-3(x="12%" y="81%" numero="3")
                  h5 Bien común
                  p Se orienta al bienestar general de la sociedad, equilibrando intereses individuales y colectivos, y asegurando el acceso equitativo a oportunidades y beneficios. El bien común se define como el conjunto de condiciones sociales que permiten a las personas alcanzar su destino natural y espiritual, incluyendo la abundancia para el sustento corporal, la paz y la virtud para el alma, que deben ser objetivos de la acción gubernamental.

                .bg-color-6.p-3(x="88%" y="81%" numero="4")
                  h5 Seguridad jurídica
                  p Responde a la necesidad de un régimen estable y a la eliminación de la arbitrariedad, mediante normas claras y un cumplimiento garantizado. Se enfoca en la protección de la persona, sus bienes y derechos frente a agresiones, ofreciendo protección y reparación en caso de ser necesario. Las normas deben ser estables y predecibles, para que las personas puedan actuar con confianza y anticipar las consecuencias de sus acciones.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/13.svg', alt='')
            .col
              p.mb-0 Estas finalidades demuestran cómo el derecho actúa como un pilar fundamental para la convivencia, la justicia y el desarrollo de una sociedad ordenada y equitativa.

    #t_1_3.titulo-segundo
      h2 #[span 1.3]  Características del Derecho y el problema de su definición

    p(data-aos="fade-up").mb-4 El derecho presenta varias características esenciales que lo diferencian de otros sistemas normativos, como la moral o la religión:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Coercibilidad
              p El derecho puede imponerse por la fuerza si es necesario. Cuando una persona incumple una norma jurídica, puede ser sancionada mediante multas, penas de prisión o la confiscación de bienes. Esta coercibilidad distingue al derecho de otros sistemas normativos que no cuentan con mecanismos de imposición obligatoria.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/14.png', alt='')

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Generalidad
              p Las normas jurídicas son generales, lo que significa que se aplican a todos los ciudadanos sin distinción, salvo las excepciones específicas establecidas por la ley. Esta característica busca asegurar la igualdad ante la ley y la uniformidad en su aplicación.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/15.png', alt='')

          .row.p-4.px-md-5.py-lg-5.align-items-center
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h5 Sistematicidad
              p El derecho no es un conjunto desordenado de normas, sino un sistema estructurado y jerarquizado. Dentro de este sistema, algunas normas tienen mayor peso que otras; por ejemplo, la Constitución tiene una jerarquía superior a una ley ordinaria, lo que define un orden en la aplicación y validez de las normas.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/tema1/16.png', alt='')

    h2(data-aos="fade-up") Desafíos al definir el derecho

    p(data-aos="fade-up").mb-4 A pesar de la definición y características mencionadas, autores como Carlos Santiago Nino (2001) sostienen que definir el derecho como una ciencia presenta tres grandes problemas: ambigüedad, vaguedad y carga emotiva.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/17.png', alt='')

      .col-lg-7
        AcordionA(tipo="b").mb-5
          .div(titulo="Ambigüedad")
            p El término "derecho" puede referirse a varios conceptos, como una norma específica, un sistema normativo, el derecho subjetivo (la facultad que otorga una norma para realizar o no una acción), o incluso a un ideal de justicia, como en la expresión: “no hay derecho a que me hagan esto”. Esta multiplicidad de significados refleja la ambigüedad del término, ya que no posee una única definición precisa.
          .div(titulo="Vaguedad")
            p En el lenguaje común, el concepto de derecho puede ser impreciso. No existe un conjunto de propiedades necesarias y suficientes que determinen su uso. En su lugar, las actividades identificadas como derecho tienen, en diferentes grados, propiedades de un conjunto amplio. Esto crea una "zona de penumbra" donde no siempre es claro si una actividad debe calificarse como derecho o no, lo que contribuye a su vaguedad.
          .div(titulo="Carga emotiva")
            p La palabra "derecho" suele tener una connotación positiva, lo cual implica una forma de reconocimiento social. Nino (2001) menciona que la elección de una palabra para definir algo lleva implícita una carga emotiva que influye en la percepción de dicha definición. En este sentido, el término "derecho" está asociado a ideas de justicia y equidad, a diferencia de términos como "anarquía", que carecen de esa valoración positiva. Esta carga emotiva afecta la forma en que las personas perciben y definen el derecho.


    .bg-full-width.bg-color-4
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") ¿Sabía que la relación entre el derecho y la moral es uno de los debates más antiguos y complejos de la filosofía jurídica? 
            p.mb-4(data-aos="fade-right") A lo largo de la historia, pensadores como Kant, H.L.A. Hart, Ronald Dworkin y Robert Alexy han ofrecido diversas perspectivas sobre cómo estas dos esferas normativas se conectan y, a veces, se contraponen. Cada enfoque analiza la interacción entre las normas legales y los principios éticos, desde la separación estricta propuesta por el positivismo jurídico hasta las teorías que integran la moral en la interpretación del derecho. Los invitamos a reflexionar sobre cómo la moral y el derecho influyen en la construcción de una sociedad más justa y equitativa en el siguiente documento: 

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Relación entre Derecho y moral

          .col-lg-5.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/116618" target="_blank" rel="noopener noreferrer") Castro C, (2017) Temas de filosofia del derecho. Corporación de estudios y publicaciones. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.ugto.mx/rea/clase-digital-1-concepto-y-fines-del-derecho-vers-a/" target="_blank" rel="noopener noreferrer") Universidad de Guanajuato. (14 de marzo de 2022) Concepto y fines del Derecho – Vers. A. Recursos educativos abiertos. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/61319" target="_blank" rel="noopener noreferrer") Atienza, M. (2013). Curso de argumentación jurídica: ( ed.). Editorial Trotta, S.A.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/60943" target="_blank" rel="noopener noreferrer") Carretero Sanchez, S. (2015). Nueva introducción a la teoría del derecho: ( ed.). Dykinson.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/70168" target="_blank" rel="noopener noreferrer") Hernandez Quintero, H. A. Gómez Peña, G. E. & María Cristina Solano de Ojeda. (2016). Lecciones de introducción al derecho: ( ed.). Universidad de Ibagué.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/58832" target="_blank" rel="noopener noreferrer") Lorca Martín de Villodres, M. I. (2017). El concepto de derecho de un siglo: su perspectiva iusfilosófica: ( ed.). Dykinson. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data() {
    return {
      items: [
        {
          text:
            'Regula la convivencia dentro de una comunidad, estableciendo lo que está permitido y lo que está prohibido.',
        },
        {
          text:
            'Se distingue de otros sistemas normativos, como la moral o la ética, que, aunque influyen en él, no poseen un carácter coercitivo.',
        },
        {
          text:
            'Evita la arbitrariedad en la interpretación de las normas, garantiza la seguridad jurídica y permite a las personas conocer las consecuencias de sus acciones.',
        },
      ],
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
