<template>
  <section class="section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-5">
            <h3 class="title mb-3">Kontakt</h3>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="custom-form mb-5 mb-lg-0">
            <div id="message"></div>
            <form name="contact-form" id="contact-form">
              <div class="row">
                <div class="form-group col-md-6" style="text-align: left">
                  <label for="name">Name</label>
                  <p></p>
                  <input required id="name" type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="form-group col-md-6" style="text-align: left">
                  <label class="text-left" for="email">E-Mail</label>
                  <p></p>
                  <input
                    required
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="E-Mail Adresse"
                  />
                </div>
              </div>
              <div class="row">
                <p></p>
                <div class="form-group col-lg-12" style="text-align: left">
                  <label for="comments">Nachricht</label>
                  <p></p>
                  <textarea
                    required
                    id="comments"
                    rows="4"
                    class="form-control form-control-lg"
                    placeholder="Nachricht"
                    style="min-height: 120px"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <p></p>
                <div class="col-sm-12">
                  <p></p>
                  <button type="submit" class="btn btn-primary" style="float: left">
                    Absenden
                    <img :src="`${sendIcon}`" alt class="icon-size-15 ml-2 icon" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5 text-sm-left">
          <div class="contact-detail ml-lg-5" style="text-align: left; padding-left: 50px">
            <p class>
              <img :src="`${mailIcon}`" alt class="icon-xs icon mr-1" />:
              <span>info@bodybuilding-company.de</span>
            </p>
            <p class>
              <img :src="`${linkIcon}`" alt class="icon-xs icon mr-1" />:
              <span>www.bodybuilding-company.de</span>
            </p>
            <p class>
              <img :src="`${phoneIcon}`" alt class="icon-xs icon mr-1" />:
              <span>(+49) 511 708 177 10</span>
            </p>
            <p class>
              <img :src="`${clockIcon}`" class="icon-xs icon mr-1" />:
              <span>11:00 - 17:00 Uhr</span>
            </p>
            <p class>
              <img :src="`${locationIcon}`" class="icon-xs icon mr-1" />:
              <span>Ricklinger Stadtweg 32, 30459 Hannover</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import mailIcon from "../assets/images/mail.svg";
import linkIcon from "../assets/images/link.svg";
import phoneIcon from "../assets/images/phone.svg";
import clockIcon from "../assets/images/clock.svg";
import locationIcon from "../assets/images/location.svg";
import sendIcon from "../assets/images/send.svg";
</script>
