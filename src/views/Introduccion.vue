<template lang="pug">
div.curso-main-container.pb-3
  BannerInterno(
    :titulo="'Unidad 1. FUNDAMENTACIÓN JURÍDICA'"
    :subTitulo="'INTRODUCCIÓN'"
  )
  div.container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    div.row.justify-content-center.align-items-center.mb-4
      div.col-lg-7
        p.mb-4(data-aos="fade-up") Desde los inicios de la humanidad, las reglas han sido un elemento fundamental para el desarrollo de las sociedades. El Derecho, en este contexto, se presenta como una herramienta indispensable para el buen funcionamiento de la convivencia. En esta primera unidad, se profundizará en el concepto de Derecho, su propósito y origen, así como en el proceso de creación de normas que regulan nuestras actividades diarias, las relaciones entre individuos y el Estado, y las normas que operan en el ámbito global.

        
      div.col-lg-5
        figure
          img(
            src="@/assets/curso/intro/1.png"
            alt=""
            style="width: 100%"
          )

    p.mb-4(data-aos="fade-up") Los objetivos de la unidad son:
    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/intro/2.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Proporcionar al estudiante una comprensión inicial sobre qué es el derecho y su importancia en la sociedad.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/intro/2.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Proporcionar al estudiante una comprensión inicial sobre qué es el derecho y su importancia en la sociedad.
      
      div.col-lg-4.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(
            src="@/assets/curso/intro/2.svg"
            alt=""
            style="width: 90px"
          )
          p.mb-0.text-center Proporcionar al estudiante una comprensión inicial sobre qué es el derecho y su importancia en la sociedad.

    div.row.justify-content-center.align-items-center.mb-5
      div.col-lg-8
        div.bg-color-1.p-4
          p.mb-0(data-aos="fade-up") ¡Recuerden que el conocimiento del Derecho es una herramienta poderosa para transformar el entorno y promover el bienestar colectivo!
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
