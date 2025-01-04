<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 1. FUNDAMENTACIÓN JURÍDICA'" 
    :subTitulo="'3. CLASIFICACIÓN DEL DERECHO'"
  )
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-up") La distinción entre derecho público y derecho privado es una clasificación histórica y teórica fundamental en el derecho occidental. Esta división surge de la necesidad de regular de manera distinta las relaciones entre el Estado y los particulares, así como las relaciones entre particulares. Su origen se remonta a la antigua Roma, y el jurista romano Ulpiano (170-223 d.C.) fue uno de los primeros en formular esta distinción en su obra Digesto, al afirmar:
        .bg-color-1.p-4.mb-4
          p.mb-0(data-aos="fade-up") #[strong  "El derecho público es el que pertenece al estado de la cosa romana; el derecho privado, el que mira al provecho de los particulares."]

        p(data-aos="fade-up") Bajo la perspectiva de Ulpiano, el derecho público se orienta a regular los asuntos que afectan al interés general, tales como la organización del Estado y las relaciones entre el Estado y los ciudadanos. Por otro lado, el derecho privado regula las relaciones entre individuos en cuanto a sus intereses particulares, abarcando áreas como contratos, propiedad y familia.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema3/1.png', alt='')

    p(data-aos="fade-up").mb-5 Esta división entre derecho público y derecho privado se mantiene hasta la actualidad por diversas razones, entre las cuales destacan:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/2.png', alt='')
      .col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Intereses regulados")
            p El derecho público regula las relaciones que implican intereses colectivos o del Estado, mientras que el derecho privado se centra en las relaciones entre particulares, donde prevalece el interés individual.
          .div(titulo="Naturaleza de las normas")
            p Las normas de derecho público son imperativas, es decir, de cumplimiento obligatorio y sin posibilidad de modificación mediante acuerdo entre las partes, ya que protegen el orden público. En cambio, las normas de derecho privado son dispositivas, permitiendo que las partes modifiquen o incluso no apliquen ciertas disposiciones, ya que buscan regular relaciones entre personas que son libres para pactar sus propios términos.
          .div(titulo="Relaciones de poder")
            p El derecho público regula relaciones en las que uno de los sujetos es el Estado (o una entidad pública) que actúa con poder soberano. En el derecho privado, las relaciones son entre particulares, sin que haya una subordinación de una parte a la otra.
          .div(titulo="Objetivos de protección")
            p El derecho público busca asegurar que el Estado cumpla sus funciones de manera justa, garantizando el bienestar general. Por su parte, el derecho privado se enfoca en proteger y garantizar los derechos individuales de propiedad, libertad y la facultad de contratación.

    p(data-aos="fade-up").mb-4 Antes de profundizar en la distinción entre derecho privado y derecho público, es importante mencionar otra clasificación relevante: la diferencia entre derecho objetivo y derecho subjetivo:

    .titulo-figura.mb-2
      h5 Tabla1 .
      span Comparación derecho objetivo y derecho subjetivo

    .tabla-a.mb-5
        table
          thead
            tr
              th Aspecto
              th Derecho Objetivo
              th Derecho Subjetivo

          tbody
            tr
              td #[strong Definición]
              td Conjunto de normas imperativas que regulan las relaciones para mantener la convivencia social.
              td "Interés jurídicamente protegido", es un poder de obrar otorgado a los individuos para proteger sus intereses.
            tr
              td #[strong Enfoque]
              td Se enfoca en las normas como ordenamiento jurídico general.
              td Se enfoca en los derechos específicos que cada persona puede ejercer.
            tr
              td #[strong Alcance]
              td Regula las conductas de todos los individuos en una sociedad.
              td Depende de la voluntad y el interés de cada individuo.

            tr
              td #[strong Ejemplo]
              td Las leyes que prohíben el robo.
              td El derecho de propiedad de una persona sobre su casa.

    .bg-color-1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema3/3.png', alt='', style="width: 100%;")
        .col-lg
          .ps-4.pe-5 
            p(data-aos="fade-up") Retomando la clasificación entre derecho público y privado, esta distinción es esencial para comprender cómo se organizan las normas y cómo se aplican en distintos contextos. Por un lado, facilita la identificación de las normas que protegen el interés colectivo y regulan la actuación estatal, y, por otro, las que garantizan los derechos y libertades individuales en las relaciones privadas. Esta clasificación sigue siendo una herramienta fundamental en la estructura del derecho contemporáneo.

    #t_3_1.titulo-segundo
      h2 #[span 3.1]  Derecho Público

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-up") El derecho público regula las relaciones entre los ciudadanos y el Estado, con el objetivo principal de proteger el interés público y garantizar que el poder estatal se ejerza dentro de los límites establecidos por la ley. Se define como el conjunto de normas que rigen la actividad y la organización del Estado, así como las relaciones entre los particulares y el Estado cuando este actúa como poder soberano. Aunque generalmente se asocia con situaciones en las que una norma aplica a un ente público, también puede abarcar casos donde el Estado participa en relaciones privadas (por ejemplo, cuando realiza una compraventa).
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/4.png', alt='')

    p(data-aos="fade-up").mb-5 Las principales ramas del derecho público son:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Derecho constitucional" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Derecho constitucional
            p Se centra en el estudio de la Constitución, que es la norma suprema del ordenamiento jurídico. Establece la estructura del Estado, los derechos fundamentales y los deberes de los ciudadanos. Regula los principios y normas que determinan la forma del Estado, los derechos constitucionales y las atribuciones de los poderes públicos. La Constitución tiene dos partes: la parte orgánica, que define el estatuto de los poderes del Estado, y la parte dogmática, que garantiza los derechos fundamentales.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Derecho Administrativo" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Derecho Administrativo
            p Regula las relaciones entre los ciudadanos y las entidades del Estado, controlando la legalidad de los actos administrativos y asegurando que el poder del Estado se utilice correctamente. Se encarga de la organización y funcionamiento de la administración pública y está estrechamente vinculado con el derecho constitucional, especialmente en la definición de cómo actúan y responden los órganos de la administración del Estado.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Derecho Penal" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/7.png', alt='', style="width: 100%;")
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Derecho Penal
            p Regula los delitos y las penas, protegiendo a la sociedad de conductas consideradas peligrosas o dañinas, como el homicidio, el robo o el tráfico de drogas. Se define como el conjunto de disposiciones que regulan las condiciones para la aplicación de las penas o de medidas de seguridad o rehabilitación. En esta rama, el monopolio del Estado sobre la fuerza se manifiesta claramente, interviniendo en aspectos como la libertad individual, la propiedad y, en algunos casos, la vida misma.

    p(data-aos="fade-up").mb-5 Otras ramas del derecho público:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Derecho Financiero
            p.mb-0 Esta rama del derecho administrativo se enfoca en la gestión de las finanzas públicas, abarcando tanto las normas sobre tributos (derecho tributario) como las normas relacionadas con el gasto público (derecho presupuestario). Regula la forma en que el Estado maneja y distribuye los recursos financieros.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center Derecho Ecónomico
            p.mb-0 El derecho económico regula las áreas de la economía que están sujetas a regulación pública. Se enfoca en asegurar un funcionamiento adecuado de la economía y de los mercados, protegiendo la libre competencia y evitando grandes desequilibrios en los niveles macroeconómicos. Su interés se centra en garantizar que las actividades económicas contribuyan al bienestar público.

    .bg-color-1.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/tema3/10.png', alt='', style="width: 100%;")
        .col-lg
          .ps-4.pe-5 
            p(data-aos="fade-up") Además de estas ramas, algunos autores agrupan bajo el derecho público otras especialidades como el derecho político, el derecho electoral y el derecho migratorio. Cada una de estas áreas contribuye al funcionamiento del Estado y su relación con los ciudadanos, asegurando que las actividades gubernamentales se desarrollen en conformidad con el marco legal establecido y que los derechos de los individuos estén protegidos. La clasificación entre derecho público y derecho privado resulta fundamental para entender cómo se aplican y organizan las normas en los distintos contextos del ejercicio del poder y las relaciones jurídicas.

    #t_3_2.titulo-segundo
      h2 #[span 3.2]  Derecho Privado

    p(data-aos="fade-up").mb-5 El conjunto de normas que regula las relaciones entre particulares, así como las relaciones de estos con el Estado u otros organismos cuando estos actúan como simples personas privadas, se conoce como derecho privado. Esta área del derecho también se aplica cuando el Estado participa como un sujeto más, sin ejercer su poder soberano. Dentro del derecho privado destacan varias ramas, entre las que se encuentran el derecho civil, el derecho comercial y el derecho del trabajo. A continuación, se detallan estas ramas:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Derecho Civil" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Derecho Civil
            p Regula las relaciones entre los individuos, abarcando aspectos como el derecho de propiedad, las obligaciones y los contratos. Es el núcleo del derecho privado y se aplica a la generalidad de las relaciones entre particulares, salvo que exista una normativa especial. Incluye principios y preceptos que regulan la personalidad, las relaciones patrimoniales y de familia, acompañando a las personas desde su nacimiento hasta su muerte, cubriendo tanto la vida familiar como las interacciones económicas.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/11.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Derecho comercial" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Derecho comercial
            p Comprende las normas que se aplican a los actos de comercio, las empresas y las relaciones comerciales. Se originó en la actividad de los comerciantes y ha evolucionado para regular los "actos de comercio". Regula actividades de comerciantes y operaciones como transporte, seguros y títulos de crédito (letras, cheques, pagarés). Establece el marco para transacciones comerciales y la organización de empresas, facilitando la actividad económica y protegiendo a las partes en estas relaciones.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/12.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Derecho del trabajo" :icon="require('@/assets/bullets/icon-tab-c.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Derecho del trabajo
            p Configura un orden público de protección para garantizar los derechos de los trabajadores y equilibrar la relación laboral entre empleadores y empleados. Las normas de esta rama son irrenunciables, estableciendo un contenido mínimo para la relación laboral. Protege derechos como el salario mínimo, horarios máximos, cotizaciones obligatorias de seguridad social, indemnizaciones por accidentes laborales, preaviso de despido, descanso dominical y fuero maternal, asegurando condiciones justas en el entorno laboral.
          .col-md-6.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/13.png', alt='', style="width: 100%;")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg
        p(data-aos="fade-up") El derecho privado, al regular las relaciones entre particulares, establece un marco jurídico que permite el desarrollo de la vida social y económica, protegiendo los intereses individuales y facilitando la libre negociación entre las partes. Sus distintas ramas se complementan para cubrir una amplia variedad de situaciones que surgen en la vida cotidiana, desde las relaciones familiares y patrimoniales hasta las dinámicas del comercio y del ámbito laboral.
      .col-lg-auto
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/14.svg', alt='', style="width: 120px;")
    
    #t_3_3.titulo-segundo
      h2 #[span 3.3]  Derecho Internacional

    p(data-aos="fade-up").mb-5 La globalización y la creación de autoridades supranacionales han llevado a algunos autores a proponer una nueva clasificación del derecho que incluye el derecho internacional, ampliando su alcance más allá de las fronteras nacionales. Esta clasificación se compone de las siguientes ramas:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-7 
        AcordionA(tipo="b")
          .div(titulo="Derecho Internacional Público")
            p Es el conjunto de normas jurídicas que rigen las relaciones entre Estados, estableciendo sus deberes y derechos, así como la creación y funcionamiento de organizaciones internacionales. Su base principal es la igualdad soberana de los Estados, lo que implica que todos tienen el mismo estatus en la comunidad internacional. Sin embargo, se le critica por la falta de coactividad, ya que las sanciones dependen de la voluntad de los Estados para aplicarlas. La Corte Internacional de Justicia, entre otros tribunales, requiere el consentimiento de los Estados para ejercer su jurisdicción.
          .div(titulo="Derecho Internacional Privado")
            p Regula las relaciones entre personas en situaciones internacionales, determinando cuál es la ley aplicable en conflictos de leyes que involucran diferentes jurisdicciones. Se basa en factores de conexión como la nacionalidad, el domicilio y el lugar de ejecución de un contrato. Es fundamental para el reconocimiento de sentencias extranjeras, la validez de contratos internacionales y la protección de derechos de personas en distintos países.
          .div(titulo="Derecho Internacional de los Derechos Humanos")
            p Se enfoca en proteger, promover y respetar los derechos fundamentales de las personas, tanto a nivel nacional como internacional. Se basa en normas convencionales (tratados) y consuetudinarias (costumbres internacionales) que establecen obligaciones para los Estados. Surgió tras la Segunda Guerra Mundial para prevenir violaciones de derechos humanos como las cometidas durante el conflicto. Incluye mecanismos para abordar violaciones de derechos, tanto a nivel interno como regional e internacional.
          .div(titulo="Derecho Internacional Humanitario (DIH)")
            p Conjunto de normas que, por razones humanitarias, busca limitar los efectos de los conflictos armados. Protege a personas no combatientes y restringe los medios y métodos de guerra. Se aplica principalmente a través de los Convenios de Ginebra de 1949 y el Protocolo adicional I de 1977. Su objetivo es mitigar el sufrimiento durante los conflictos, asegurando un trato digno a heridos, prisioneros de guerra y civiles.
          .div(titulo="Derecho Penal Internacional")
            p Define los crímenes internacionales, como genocidio, crímenes de lesa humanidad, crímenes de guerra y el crimen de agresión, y regula los tribunales competentes para juzgar a los responsables. Surgió tras los juicios de Núremberg, y su jurisdicción se basa en el principio de complementariedad, lo que significa que la Corte Penal Internacional (CPI) interviene solo si los tribunales nacionales no pueden o no quieren llevar a cabo una investigación adecuada.
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/15.png', alt='')

    .bg-color-1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/16.svg', alt='', style="width: 120px;")
        .col-lg
          p(data-aos="fade-up") La clasificación del derecho internacional en estas ramas refleja la necesidad de un marco jurídico que abarque tanto las relaciones entre Estados como la protección de los derechos individuales a nivel global. Cada una de estas ramas responde a una faceta de la interacción internacional, desde la cooperación entre Estados y la protección de los derechos humanos, hasta la regulación de situaciones específicas como los conflictos armados y los crímenes internacionales.  


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/123161" target="_blank" rel="noopener noreferrer") Fernadez I. (2017) Manual de fundamentos del derecho público y privado. Editorial tecnos. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.euroinnova.com/blog/latam/diferencia-entre-derecho-publico-y-derecho-privado" target="_blank" rel="noopener noreferrer") Euroinnova. (16 de mayo de 2023) Diferencias entre derecho público y privado.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/123141" target="_blank" rel="noopener noreferrer") Carrasco Perera, Á. & González Carrasco, M. D. C. (2018). Introducción al Derecho y fundamentos de Derecho privado: (2 ed.). Difusora Larousse - Editorial Tecnos. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Clasificación del Derecho',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué característica diferencia al Derecho de la moral?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Su aplicación en la vida social',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Su coercibilidad, o posibilidad de imponerse por la fuerza',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Su relación con los valores',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Su capacidad para regular conductas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el papel de la jurisprudencia en el sistema colombiano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Crear normas nuevas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Interpretar y guiar la aplicación de la ley en casos similares',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Regular solo las relaciones políticas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Definir las normas de conducta social',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué es la seguridad jurídica?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El derecho a realizar cualquier acto sin restricciones',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La certeza de que las normas serán claras y estables',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La protección exclusiva de los derechos individuales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La garantía de que el Estado actuará sin restricciones',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'La doctrina se refiere a:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Normas creadas por el Congreso',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Opiniones y estudios de juristas para interpretar el Derecho',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Costumbres que regulan conductas sociales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reglas establecidas exclusivamente para jueces',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Según el artículo 230 de la Constitución de Colombia, los jueces deben guiarse principalmente por:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La equidad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La ley',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La costumbre',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Los principios morales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
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
