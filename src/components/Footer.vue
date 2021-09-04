<template>
  <div :style="{ backgroundColor: `#212529` }">
    <section class="footer" style="text-align: left">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-5">
              <div class="footer-logo" v-html="logo" />
              <p class="text-white-50 my-4 font-size-15">
                Wir helfen Dir, deine körperlichen Ziele zu erreichen. Ob
                Wettkampfvorbereitung, Muskelaufbau oder Diät.
              </p>
              <ul class="list-inline footer-social-icon-content">
                <li class="list-inline-item mr-4">
                  <a
                    href="https://www.instagram.com/bodybuildingcompany_official/"
                    class="footer-social-icon"
                  >
                    <img :src="`${instaIcon}`" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1">
            <div class="row">
              <div class="col-md-4">
                <h6 class="text-white text-uppercase mb-4">Über Uns</h6>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="/impressum;" class="footer-link">Impressum</a>
                  </li>
                  <li>
                    <a href="/datenschutz" class="footer-link">Datenschutz</a>
                  </li>
                  <li>
                    <a href="/agbs" class="footer-link">AGBs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-alt py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <p
                class="text-white-50 font-size-15 mb-0"
              >{{ new Date().getFullYear() }} © Bodybuilding Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import instaIcon from "../assets/images/instagram.svg";
import logo from "../assets/images/logo.svg?raw";
</script>

<style>
.footer-logo {
  height: 120px;
  width: 120px;
  fill: #eee;
}
</style>
