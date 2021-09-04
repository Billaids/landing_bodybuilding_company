<template>
  <section class="section" id="pricing">
    <div class="container">
      <div class="row align-items-center my-3">
        <div class="col-12 col-lg-6">
          <div class="text mb-5">
            <h2 class="title mb-3 text-lg-start">Professionelles Coaching</h2>
            <p class="text-lg-start font-size-20">Das beinhaltet unser Coaching:</p>
            <ul class="text-start">
              <li>
                Erstgespräch, Ausführliche Anamnese (Training, Ernährung,
                Gesundheit)
              </li>
              <li>Monatliche Analyse der Körperzusammensetzung</li>
              <li>
                Individuelle Trainings- und Ernährungspläne, angepasst an deine
                Fortschritte und auf deinen Alltag abgestimmt
              </li>
              <li>
                monatliche Form-Checks bei uns vor Ort oder Online inkl.
                Anpassung deiner individuellen Pläne
              </li>
              <li>
                Zwischen-Check-Ups (Bilder, Video, Video-Telefonie) bei Bedarf
                und nach Absprache
              </li>
              <li>
                Supplement-Pläne, an deine Ernährung, Training, Gesundheit und
                Verdauung angepasst
              </li>
              <li>Kontakt mit deinem Coach via WhatsApp</li>
              <li>Zugang zu unserer Coaching-App und unserer WhatsApp-Gruppe</li>
              <li>
                Große Community, familiäre Atmosphäre und regelmäßige
                Team-Veranstaltungen
              </li>
              <li>Nahrungsergänzungen zu rabattierten Kundenpreisen</li>
              <li>Personaltrainings zu rabattierten Kundenpreisen</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <img class="img-fluid" :src="coachingImage" alt />
        </div>
      </div>
      <div class="row my-5">
        <div class="col-lg-4">
          <div class="pricing-box card rounded text-center p-4">
            <div class="pricing-icon-bg my-4">
              <i class="mdi mdi-podium-gold h1"></i>
            </div>
            <h4 class="title mb-3">Jahrescoaching</h4>
            <h1 class="font-weight-bold mb-0">
              <b>
                149
                <sup class="h4 mr-2 font-weight-bold">€</sup>
              </b>
            </h1>
            <p class="text-muted font-weight-semibold">monatlich</p>
            <ul class="list-unstyled pricing-item mb-4">
              <li class="text">
                <b>Unser Klassiker</b>
              </li>
              <li class="text">Unser komplettes Coaching in einem Jahresvertrag.</li>
            </ul>
            <Modal :open="show3" @close="show3 = false">
              <h3 style="text-align: start" class="mt-4 px-4">Anmeldung für Jahrescoaching</h3>
              <PlanModal />
            </Modal>
            <button class="btn btn-outline-primary pr-btn" @click="show3 = true">Zur Buchung</button>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing-box card rounded text-center p-4">
            <div class="pricing-icon-bg my-4">
              <i class="mdi mdi-podium-silver h1"></i>
            </div>
            <h4 class="title mb-3">Halbjahres-Coaching</h4>
            <h1 class="font-weight-bold mb-0">
              <b>
                159
                <sup class="h4 mr-2 font-weight-bold">€</sup>
              </b>
            </h1>
            <p class="text-muted font-weight-semibold">monatlich</p>
            <ul class="list-unstyled pricing-item mb-4">
              <li>
                <b>Für Unentschlossene</b>
              </li>
              <li class="text">Unser komplettes Coaching für 6 Monate</li>
            </ul>
            <div>
              <Modal :open="show2" @close="show2 = false">
                <h3 style="text-align: start" class="mt-4 px-4">Anmeldung für Wettkampfvorbereitung</h3>
                <PlanModal />
              </Modal>
              <button class="btn btn-outline-primary pr-btn" @click="show2 = true">Zur Buchung</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing-box card rounded text-center p-4">
            <div class="pricing-icon-bg my-4">
              <i class="mdi mdi-podium-bronze h1"></i>
            </div>
            <h4 class="title mb-3">8 Wochen Coaching</h4>
            <h1 class="font-weight-bold mb-0">
              <b>
                359
                <sup class="h4 mr-2 font-weight-bold">€</sup>
              </b>
            </h1>
            <p class="text-muted font-weight-semibold">einmalig</p>
            <ul class="list-unstyled pricing-item mb-4">
              <li>
                <b>Unser Quickie</b>
              </li>
              <li class="text">Unser komplettes Coaching für 8 Wochen</li>
            </ul>
            <div>
              <Modal :open="show1" @close="show1 = false">
                <h3 style="text-align: start" class="mt-4 px-4">Anmeldung für 8 Wochen Coaching</h3>
                <PlanModal />
              </Modal>
              <button class="btn btn-outline-primary pr-btn" @click="show1 = true">Zur Buchung</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PlanModal from "./Booking.vue";
import Modal from "./Modal.vue";
import coachingImage from "../assets/images/sections/coaching.jpg";
import { ref } from "vue";
export default {
  components: {
    PlanModal,
    Modal,
  },
  setup() {
    const confirm = () => {
      show1.value = true;
    };

    const cancel = () => {
      show1.value = false;
      close();
    };

    const show1 = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);

    return {
      coachingImage,
      confirm,
      cancel,
      show1,
      show2,
      show3,
    };
  },
};
</script>
