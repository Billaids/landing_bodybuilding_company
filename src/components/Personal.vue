<template>
  <section class="section" id="personal">
    <div class="container">
      <h2 class="section-heading">Personal-Training</h2>
      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="section-subheading">
            Die Ernährung hat einen großen Stellenwert, beim Erreichen deiner
            Ziele. Aber dein Training bildet immer die Grundlage für eine
            Veränderung deines Körpers. Ohne ein optimales Training, wirst du
            nie dein komplettes Potential ausschöpfen können.
          </p>
          <p class="section-subheading">
            Wir zeigen dir, wie du RICHTIG trainierst, um deine Ziele zu
            erreichen!
          </p>
          <p class="section-subheading">
            Wir optimieren deine Übungsausführung, beurteilen deine
            Trainingsintensität und zeigen dir den richtigen Weg. Auch
            erfahrende Trainierende profitieren oft enorm von einem
            Personaltraining mit einem erfahrenden Coach.
          </p>
          <br />
          <strong>
            <h3>Wir bringen dein Training auf eine neues Level!</h3>
          </strong>
          <br />
          <div class="row">
            <div class="col-sm-6">
              <div class="card" style>
                <div class="card-body">
                  <h5 class="card-title">Personal Training</h5>
                  <p class="card-text">90-120 Min</p>
                  <h6>
                    <p class="card-text">129,- €</p>
                  </h6>
                  <Modal :open="show3" @close="show3 = false">
                    <PlanModal />
                  </Modal>
                  <button class="btn btn-primary" @click="show3 = true">Zur Buchung</button>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card" style="height: 100%">
                <div class="card-body">
                  <h5 class="card-title">3er- Paket Personal Training</h5>
                  <p class="card-text">90-120 Min</p>
                  <h6>
                    <p class="card-text">349,- €</p>
                  </h6>
                  <Modal :open="show3" @close="show3 = false">
                    <PlanModal />
                  </Modal>
                  <button class="btn btn-primary" @click="show3 = true">Zur Buchung</button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <strong>
            <p class="section-subheading">
              <b>
                Für unsere Coaching-Kunden, bieten wir unsere Personal-Trainings zu
                rabattierten Preisen an!
              </b>
            </p>
          </strong>
          <br />
        </div>
      </div>
    </div>
  </section>
  <section class="section bg-light" id="personal">
    <div class="container">
      <h2 class="section-heading text-uppercase">Einzelleistungen</h2>
      <div class="row">
        <div class="col-lg-12 text-center">
          <p class="section-subheading">
            Abseits unserer Coaching-Verträge, bieten wir auch sämtliche unserer
            Leistungen einzeln an. Alle Einzelleistungen beinhalten ein
            persönliches Anamnese-Gespräch bei uns im Shop oder online - ganz
            nach deinen Vorstellungen.
          </p>
          <br />
          <div class="row">
            <div class="col-sm-6">
              <div class="card" style>
                <div class="card-body">
                  <h5 class="card-title">Konsultation</h5>
                  <p class="card-text">Persönliches oder Online Beratungsgespräch (60 Min.)</p>
                  <h6>
                    <p class="card-text">129,- €</p>
                  </h6>
                  <Modal :open="show3" @close="show3 = false">
                    <PlanModal />
                  </Modal>
                  <button class="btn btn-primary" @click="show3 = true">Zur Buchung</button>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card" style="height: 100%">
                <div class="card-body">
                  <h5 class="card-title">Kombi-Paket</h5>
                  <p class="card-text">Individueller Trainings- und Ernährungsplan</p>
                  <h6>
                    <p class="card-text">199,- €</p>
                  </h6>
                  <Modal :open="show3" @close="show3 = false">
                    <PlanModal />
                  </Modal>
                  <button class="btn btn-primary" @click="show3 = true">Zur Buchung</button>
                </div>
              </div>
            </div>
          </div>

          <br />
          <div class="row">
            <div class="col-sm-6">
              <div class="card" style="height: 100%">
                <div class="card-body">
                  <h5 class="card-title">Ernährungsplan</h5>
                  <p class="card-text">Dein individueller Ernährungsplan</p>
                  <p class="card-text">129,- €</p>
                  <Modal :open="show3" @close="show3 = false">
                    <PlanModal />
                  </Modal>
                  <button class="btn btn-primary" @click="show3 = true">Zur Buchung</button>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card" style="height: 100%">
                <div class="card-body">
                  <h5 class="card-title">Trainingsplan</h5>
                  <p class="card-text">Dein individueller Trainingsplan</p>
                  <p class="card-text">99,- €</p>
                  <Modal :open="show3" @close="show3 = false">
                    <PlanModal />
                  </Modal>
                  <button class="btn btn-primary" @click="show3 = true">Zur Buchung</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import PlanModal from "./Booking.vue";
import { ref } from "vue";
import Modal from "./Modal.vue";
export default {
  name: "Personal",
  components: { Modal, PlanModal, ref },

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
    const show4 = ref(false);
    const show5 = ref(false);
    const show6 = ref(false);
    const show7 = ref(false);
    const show8 = ref(false);

    return {
      confirm,
      cancel,
      show1,
      show2,
      show3,
      show4,
      show5,
      show6,
      show7,
      show8,
    };
  },
};
</script>
