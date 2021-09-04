<template>
  <div>
    <section class="hero-1-bg" :style="{ backgroundColor: `#fefefe` }" id="home">
      <div class="container mt-xs-5">
        <div class="row align-items-center justify-content-center mt-1">
          <div class="col-lg-6 my-5">
            <h1
              class="hero-1-title text-dark font-weight-bold text-shadow mb-4"
              style="font-weight: 700; text-align: left"
            >Mehr als „nur“ #Bodybuilding</h1>
            <div class="w-75">
              <p class="text font-size-17" style="font-weight: 500; text-align: left">
                Professionelles Coaching, Trainings- und Ernährungsberatung…Wir
                helfen dir, deine körperlichen Ziele zu erreichen. Ob
                Wettkampfvorbereitung, Beach-Body oder Bikini-Figur, ob
                Muskelaufbau oder Diät - wir stehen an deiner Seite und bringen
                deinen Körper auf ein neues Level!
              </p>
            </div>
            <a href="https://www.instagram.com/bodybuildingcompany_official/">
              <img :src="`${instaIcon}`" height="175" width="175" />
            </a>
          </div>
          <div class="col-lg-6 col-md-10 d-none d-lg-block">
            <div class="logo mt-5 mt-lg-0" v-html="logo" />
          </div>
          <div class="col-lg-6 col-md-10 d-none d-lg-block"></div>
        </div>
      </div>
    </section>
    <About />
    <Pricing />
    <Personal />
    <Shop />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import instaIcon from "../assets/images/insta.svg";
import { Contact, Footer, About, Personal, Shop, Pricing } from "../components";
import logo from "../assets/images/logo.svg?raw";
</script>

<style>
.logo svg {
  height: 100%;
  width: 100%;
  padding: 13%;
}
</style>
