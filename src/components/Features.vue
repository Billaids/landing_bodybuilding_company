<template>
  <div>
    <section class="section bg-light feather-bg-img" id="features">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h3 class="title mb-3">Jahrelange Erfahrung und Expertise</h3>
              <p class="text-muted font-size-15">
                Das Coaching-Programm profitiert von jahrelangen Erfahrungen im
                Bereich Gesundheit, Fitness und Ernährung. Wir arbeiten dabei
                strikt nach wissenschaftlichen Methoden in Verbindung mit
                praxiserprobten Strategien, um dir den Weg zu deinem Traumkörper
                zu vereinfachen.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0"></div>
            <img :src="`${trainPic}`" alt class="img-fluid d-block mx-auto" />
          </div>

          <div class="col-lg-5 offset-lg-1">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-trophy h2 text-primary mr-1 align-middle"></i>
              Echte Resultate
            </p>
            <br />
            <p class="text-muted font-size-15 mb-4">
              Viele denken, dass es nur darum geht, möglichst viel Gewicht zu
              verlieren. Der Gewichtsverlust ist aber keine deutliche Messung.
              Bei Bodybuilding-Company messen wir den Fortschritt durch das
              Verhältnis von Körperfett, Muskelanteil und Umfänge der einzelnen
              Körperpartien unserer Kunden und Athleten.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2"
                >Erfahre Mehr</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section feather-bg-img">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <p class="font-weight-medium text-uppercase mb-2">
              <i
                class="mdi mdi-weight-lifter h2 text-primary mr-1 align-middle"
              ></i>
              Professionelles Coaching
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              Wir PUSHEN <b>Dich!</b>
            </h3>
            <p class="text-muted font-size-15 mb-4">
              Die Ziele unserer Kunden sind sehr unterschiedlich. Manch einer
              möchte Muskulatur aufbauen oder seinen Körperfettanteil
              reduzieren. Manch anderer möchte mit unserer Hilfe die
              Wettkampfbühne betreten. Was auch immer dein Ziel ist, wir freuen
              uns über jeden kleinen sowie großen Fortschritt.
            </p>

            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2"
                >Erfahre Mehr</a
              >
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="mt-4 mt-lg-0">
              <img
                :src="`${checkupPic}`"
                alt
                class="img-fluid d-block mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import trainPic from "../assets/images/train.jpg";
import checkupPic from "../assets/images/checkup.jpg";
</script>
