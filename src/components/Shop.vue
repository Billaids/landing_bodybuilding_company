<template>
  <div class="container">
    <div class="row align-items-center my-5">
      <div class="col-md-12 col-lg-5 mt-5 mt-lg-0">
        <h2 class="text-lg-start mb-3">Unser Shop</h2>
        <p class="text-lg-start">
          Unser Shop in Hannover, stellt unser Hauptquartier und den Mittelpunkt
          unserer Arbeit dar. Uns ist der persönliche Kontakt zu unsere Klienten
          und Kunden sehr wichtig.
        </p>
        <p class="text-lg-start">
          Neben einem professionellen Umfeld für unsere Coaching-Termine, findet
          ihr hier alle wichtigen, und in der Praxis erprobten Supplements, mit
          denen wir auch in unseren Plänen arbeiten. #nobullshit - zuckerhaltige
          Weight-Gainer, Testo-Booster und nutzlose Nahrungsergänzungen sucht
          ihr hier vergebens - wie auch in unserem Coaching legen wir bei allen
          Produkten besonderen Wert auf Wirksamkeit und ein gutes
          Preis-/Leistungsverhältnis.
        </p>
        <p class="text-lg-start">Wir beraten dich gern - schau einfach vorbei!</p>
        <a href="https://www.instagram.com/bodybuildingcompany_official/">
          <img :src="`${instaIcon}`" height="175" width="175" />
        </a>
      </div>
      <div class="col-md-12 col-lg-7">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="shop4" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img :src="shop2" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img :src="shop3" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img :src="shop1" class="d-block w-100" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import shop1 from "../assets/images/sections/shop1.jpg";
import shop2 from "../assets/images/sections/shop2.jpg";
import shop3 from "../assets/images/sections/shop3.jpg";
import shop4 from "../assets/images/sections/shop4.jpg";
import instaIcon from "../assets/images/insta.svg";
</script>
