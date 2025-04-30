<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 1. FUNDAMENTACIÓN JURÍDICA'" :subTitulo="'SÍNTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 #[strong La unidad 1:  Introducción al derecho y sus fuentes], establece los fundamentos teóricos esenciales para comprender el origen de las normas jurídicas y su aplicación. Esta unidad sienta las bases de la formación jurídica que se desarrollará a lo largo del curso, proporcionando una perspectiva clara sobre el concepto de Derecho, sus funciones en la sociedad y el origen de las normas.   Este enfoque integral asegura que los estudiantes adquieran una comprensión sólida de los fundamentos del Derecho, lo que les permitirá avanzar con éxito en su estudio y práctica futura.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
  </template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
