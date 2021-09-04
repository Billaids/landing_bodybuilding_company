<template>
  <section class="section bg-light" id="about">
    <div class="container">
      <div class="row align-items-center gx-5">
        <div class="col-lg-6 order-lg-2 text-lg-start">
          <h2>Über uns</h2>
          <p>
            Als erfahrende Wettkampfsportler und Coaches, können wir auf
            jahrelange Erfahrungen im Bereich Training und Ernährung
            zurückgreifen. Dabei kombinieren wir wissenschaftliche Methoden und
            praxiserprobte Strategien, um gemeinsam mit dir deine Ziele zu
            erreichen und dich auf dem Weg zu deinem Traumkörper optimal zu
            unterstützen.
          </p>
          <br />
          <h3>Professionelles Coaching</h3>
          <p>
            Wir haben unsere Leidenschaft zum Beruf gemacht. Wir leben und
            lieben Bodybuilding - jeden Tag.
          </p>
          <p>
            Neben unseren eigenen sportlichen Laufbahnen im
            Wettkampfbodybuilding, haben wir bereits hunderte Klienten beim
            Erreichen ihrer Ziele begleitet und können auf einen großen
            Erfahrungsschatz zurückgreifen. Aber unser Coaching lebt - wir ruhen
            uns auf unseren bisherigen Erfolgen und Erfahrungen nicht aus,
            sondern bilden uns ständig weiter.
          </p>
          <br />
          <p>
            <b>#immeramzahnderzeit</b>
          </p>
        </div>
        <div class="col-lg-6 order-lg-1">
          <img :src="aboutImage" alt="about" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutImage from "../assets/images/sections/aboutus.jpg";
</script>
