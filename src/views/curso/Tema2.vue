<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. FUNDAMENTACIÓN JURÍDICA'" :subTitulo="'2. FUENTES DEL DERECHO'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-up") La palabra "fuente" proviene del latín fons y hace referencia al origen de algo, ya sea un manantial de agua o el fundamento de un concepto (Jackson, Inc., 1968). En el ámbito jurídico, se entiende por "fuentes del derecho" los mecanismos que originan y fundamentan las normas jurídicas.

        .bg-color-2.p-4.mb-4
          p.mb-0(data-aos="fade-up") #[strong Las fuentes del derecho se refieren a los procesos, hechos y documentos que dan lugar a la creación, interpretación y aplicación de las normas jurídicas.] Autores como Hans Kelsen y Arthur Kaufmann han analizado el concepto, destacando su importancia en la estructura de la normativa y el acto de creación de leyes. Mientras Kaufmann se enfoca en el papel de la decisión judicial, Kelsen distingue entre la validez de una norma y su proceso de creación.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/1.svg", alt="")

    h2.mb-4(data-aos="fade-up") Tipos de fuentes del derecho

    p.mb-4(data-aos="fade-up") Las fuentes del derecho se clasifican en tres categorías principales:
    
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes históricas" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Fuentes históricas
            p Son documentos y registros antiguos que reflejan la forma en que las sociedades se organizaban y normaban. Ejemplos incluyen el Código de Hammurabi y la Declaración de los Derechos del Hombre y del Ciudadano de 1789. Estas fuentes sirven de referencia para la creación de nuevas leyes.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/2.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes formales" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Fuentes formales
            p Provienen de la acción del Estado y del sistema jurídico, como la legislación, la jurisprudencia, la costumbre y la doctrina. Estas fuentes determinan la validez y obligatoriedad de las normas en una sociedad específica.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fuentes materiales (o reales)" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Fuentes materiales (o reales)
            p Se refieren a los hechos o eventos sociales que motivan la creación de normas jurídicas. Incluyen elementos como las necesidades sociales y las circunstancias históricas que influyen en el contenido de las leyes.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='', style="width: 100%;")

    .bg-color-3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema2/5.png', alt='', style="width: 100%;")
        .col-lg
          .ps-4.pe-5
            p(data-aos="fade-up") En Colombia, el derecho se fundamenta principalmente en la ley, la costumbre, la jurisprudencia y la doctrina, cada una contribuyendo de manera particular al ordenamiento jurídico del país.

            p(data-aos="fade-up") Lo invitamos a consultar el documento La ley, para profundizar en aspectos relacionados con su definición, la ley en el sistema jurídico, Importancia y preeminencia de la ley.
            
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> La ley

    #t_2_1.titulo-segundo
      h2 #[span 2.1]  La jurisprudencia

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-up") La jurisprudencia se define como la interpretación que hacen los tribunales de la ley cuando la aplican a cinco casos concretos y la generalizan. Cuando una Alta Corte establece jurisprudencia, esta se convierte en obligatoria para todos los tribunales inferiores, quienes deben acatar y aplicar. Otra forma de entender la jurisprudencia es limitarla al análisis de las decisiones de los tribunales, especialmente de las altas cortes (Corte Suprema de Justicia, Corte Constitucional y Consejo de Estado), y cómo estas decisiones contribuyen a la interpretación de las normas. Se examinan casos relevantes donde la jurisprudencia ha tenido un impacto significativo.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/6.svg', alt='')

  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema2/7.png', alt='')

      .col-lg-7
        p(data-aos="fade-up") Para algunos autores, la jurisprudencia se relaciona con la aplicación reiterada y específica del ordenamiento jurídico en una situación de conflicto derivada de las relaciones entre las partes, a través de la acción de los órganos jurisdiccionales. La jurisprudencia permite una doble acepción:

        .bg-color-3.p-4.mb-4
          p.mb-4 #[strong En sentido amplio,] se refiere a la doctrina reiterada que surge de la aplicación del derecho a casos particulares, efectuada por cualquier órgano judicial. Es la consecuencia del deber inexcusable de los juzgados y tribunales de resolver los casos que se les presentan.
          p.mb-0 #[strong En sentido estricto,] hace referencia a la doctrina reiterada emitida exclusivamente por los altos tribunales.
        
        p(data-aos="fade-up") La jurisprudencia, por lo tanto, desempeña un papel crucial en la interpretación y aplicación del derecho, ofreciendo coherencia y previsibilidad a la labor de los tribunales y contribuyendo al desarrollo del ordenamiento jurídico.

    #t_2_2.titulo-segundo
      h2 #[span 2.2]  La doctrina

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-up") Para muchos autores, la doctrina no se considera una fuente formal del derecho, aunque ejerce una gran influencia en su desarrollo. La doctrina se refiere a los estudios, teorías y opiniones de juristas y académicos que contribuyen a la interpretación y mejora del sistema jurídico. Aunque no posee el mismo peso que la ley o la jurisprudencia, es frecuentemente utilizada como referencia por jueces y legisladores para fundamentar sus decisiones. Esto pone de manifiesto el papel de los estudios académicos y la opinión de los juristas en la formación y evolución del derecho.

        p(data-aos="fade-up") Aunque la doctrina no es vinculante, tiene una notable influencia en la interpretación de las normas jurídicas y en la elaboración de jurisprudencia. Se considera como doctrina la literatura jurídica, es decir, los análisis y estudios realizados por expertos en la materia que aportan interpretaciones y sugerencias para la correcta aplicación del derecho. La doctrina puede orientar la labor de los tribunales y ser un referente importante en la creación de nuevas normativas, ya que ofrece análisis profundos y razonamientos que enriquecen el debate jurídico.
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/8.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-3.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/9.svg', alt='', style="width: 100%;")
            .col-lg
              .ps-4.pe-5 
                p(data-aos="fade-up") A pesar de que la doctrina no tiene valor legal en sí misma, su impacto es evidente en la forma en que influye tanto a los autores de las leyes como a las autoridades encargadas de aplicarlas, ya que ofrece una base teórica que puede guiar la toma de decisiones en distintos contextos jurídicos.

    #t_2_3.titulo-segundo
      h2 #[span 2.3]  Principios generales del derecho

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-up") Los principios generales del derecho se definen como generalizaciones o abstracciones derivadas de la legislación, el derecho natural o el derecho romano. Un ejemplo fundamental es la equidad, un elemento esencial para cualquier orden jurídico. Algunos autores consideran que estos principios son construcciones doctrinales elaboradas y propuestas por la doctrina jurídica.

        p(data-aos="fade-up") Otra forma de entender los principios generales del derecho es como los valores o criterios que, aunque no estén expresamente contenidos en una norma legal o consuetudinaria, influyen activamente en el ordenamiento jurídico. Se aplican para resolver situaciones en las que no existe una regulación normativa específica, actuando como soluciones para casos de lagunas legales.
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/10.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .bg-color-4.p-4.mb-5
          p(data-aos="fade-up").mb-0 La doctrina científica se ha dividido en dos corrientes principales para justificar la existencia de estos principios:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-3.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/11.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center Positivismo
              p.mb-0.text-center Sostiene que los principios generales del derecho provienen de las normas jurídicas mismas, extraídas a través de un proceso de abstracción.
          
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-3.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/12.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center  Iusnaturalismo
              p.mb-0.text-center Considera que los principios generales del derecho son normas del derecho natural, que no requieren una formulación positiva ni sanción estatal para ser válidas y obligatorias, ya que forman parte de un sistema jurídico superior.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/13.png', alt='')
      .col-lg-8
        p(data-aos="fade-up") Los principios generales del derecho tienen un papel fundamental en la organización de la colectividad donde surgen, ya que reflejan los valores, convicciones y modelos de conducta de esa comunidad. A diferencia de la ley, no derivan su autoridad de un órgano legislativo ni de un grupo social específico, como la costumbre. Su base se encuentra en las convicciones colectivas de la sociedad, que actúa como creadora de esta fuente del derecho. 
        p(data-aos="fade-up") Estos principios son esenciales para interpretar y aplicar las normas en un contexto amplio, asegurando que el ordenamiento jurídico esté en sintonía con los valores fundamentales y la evolución ética y cultural de la sociedad.
      
    #t_2_1.titulo-segundo
      h2 #[span 2.4]  Las fuentes del Derecho en Colombia 

    p(data-aos="fade-up").mb-5 Las fuentes del derecho se dividen en dos categorías:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/14.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Fuentes materiales
            p.mb-0 Se refieren a los hechos y circunstancias que originan la creación del derecho, como los contextos sociales, económicos y políticos, es decir, la realidad misma. Estas fuentes reflejan las necesidades y situaciones específicas de la sociedad que requieren regulación.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Fuentes formales
            p.mb-0 Incluyen los procedimientos y mecanismos a través de los cuales el derecho se expresa y se hace valer. Entre estas se encuentran la ley, la jurisprudencia, la costumbre, la equidad, los principios generales del derecho y la doctrina. En Colombia, la ley es la fuente formal principal, mientras que las demás se consideran criterios auxiliares.

    p(data-aos="fade-up").mb-5 La ley en el derecho colombiano es: 

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Principal fuente del derecho" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Principal fuente del derecho
            p La ley es una norma escrita y promulgada por el poder legislativo que debe ser obedecida por todos los ciudadanos. En Colombia, la ley incluye la Constitución, las leyes ordinarias, los decretos y otros actos jurídicos.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/16.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Jerarquía normativa" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Jerarquía normativa
            p La Constitución ocupa el lugar más alto en la jerarquía de normas. Las leyes y decretos deben alinearse con la Constitución, y las leyes orgánicas y estatutarias tienen un nivel superior a las leyes ordinarias.
        
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Sentido amplio de 'ley'" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Sentido amplio de 'ley'
            p En Colombia, la ley se entiende en un sentido amplio, abarcando todas las normas adoptadas por las autoridades competentes siguiendo los procedimientos establecidos, como las leyes del Congreso y los decretos presidenciales.

          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='', style="width: 100%;")

    p(data-aos="fade-up").mb-5 Los criterios auxiliares del derecho en Colombia son: 

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Jurisprudencia")
            p Se refiere a las decisiones adoptadas por los jueces y tribunales. Aunque se considera un criterio auxiliar, la jurisprudencia tiene un impacto significativo en la interpretación de las normas y puede adquirir fuerza vinculante.
          .div(titulo="Costumbre")
            p Aunque no está explícitamente incluida en la expresión “ley” del artículo 230 de la Constitución, la costumbre es reconocida como una forma de regulación en el derecho colombiano. Su valor se sustenta en su aceptación por parte de la comunidad y su relevancia en ciertos contextos, como las comunidades indígenas.
          .div(titulo="Equidad")
            p Es un concepto jurídico indeterminado que se aplica en aquellos espacios no cubiertos por la legislación. Busca evitar injusticias que puedan surgir de una aplicación rígida de la ley, permitiendo que las decisiones se ajusten a situaciones específicas.
          .div(titulo="Doctrina")
            p Incluye los estudios y análisis de juristas y académicos que ofrecen interpretaciones sobre las normas jurídicas. Aunque no tiene valor legal, la doctrina influye en la elaboración de jurisprudencia y la creación de nuevas leyes.
          .div(titulo="Principios generales del derecho")
            p Estos principios, aunque no estén siempre escritos, orientan la interpretación de las normas. Sirven para llenar lagunas legales y asegurar que las decisiones se alineen con valores fundamentales como la justicia y la equidad.
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/19.png', alt='')


    p(data-aos="fade-up").mb-5 La importancia de la Constitución es: 

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/20.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Supremacía constitucional
            p.mb-0 La Constitución es la norma de mayor jerarquía en el sistema jurídico colombiano. Al establecer los principios fundamentales y el marco de derechos, actúa como el referente principal para la validez de todas las normas.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/21.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Relación con otras normas
            p.mb-0 Las leyes, decretos y normas adoptadas por las entidades territoriales deben estar en concordancia con la Constitución. Las competencias normativas de las autoridades locales se integran en el marco constitucional.

    .bg-color-1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema2/22.png', alt='', style="width: 100%;")
        .col-lg
          .ps-4.pe-5
            p(data-aos="fade-up").text-small Las fuentes del derecho tanto materiales como formales, son fundamentales para entender la estructura y funcionamiento del sistema jurídico colombiano. Mientras que la ley tiene un papel preeminente, la jurisprudencia, la costumbre, la doctrina y los principios generales del derecho actúan como recursos complementarios que enriquecen la interpretación y aplicación de las normas. La Constitución, por su parte, guía todo el sistema jurídico, asegurando la coherencia y la justicia en la creación y aplicación de las normas.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.uic.mx/que-son-las-fuentes-del-derecho/" target="_blank" rel="noopener noreferrer") Universidad intercontinental (10 de mayo de 2023).¿ Qué son las fuentes del derecho?

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/63109" target="_blank" rel="noopener noreferrer") Barranco, A. (2011) Perspectivas actuales de las fuentes de derecho. Editorial Dykinson.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/32739" target="_blank" rel="noopener noreferrer") González Jácome, J. (2009). El problema de las fuentes del derecho: una perspectiva desde la argumentación jurídica: ( ed.). Red Vniversitas.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
}
</script>

<style lang="sass"></style>
