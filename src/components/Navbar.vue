<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar">
    <div class="container">
      <a class="navbar-brand logo" href="/">
        <img :src="logo" class="logo-dark" height="80" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="mdi mdi-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto navbar-center" id="mySidenav">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#pricing" class="nav-link">Coaching</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">Über Uns</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link">Shop</a>
          </li>
        </ul>
        <ul class="navbar-nav navbar-center">
          <li class="nav-item">
            <a href="https://coaching.bodybuilding-company.de" class="nav-link">Mitgliederbereich</a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.forthemotivated.de/collections/bodybuilding-company-1"
              class="nav-link"
            >Merchandise-Shop</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { onMounted } from "vue";
import logo from "../assets/images/logo.svg";

export default {
  name: "Navbar",
  props: {
    navbarcolor: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    onMounted(() => {
      const navbar = document.getElementById("navbar")!;
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      });
    });

    return {
      logo,
    };
  },
};
</script>

<style>
.logo-dark {
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-sticky .logo-dark {
  height: 50px;
}
</style>
