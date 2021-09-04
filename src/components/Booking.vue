<template>
  <div class role="document" style="text-align: start">
    <form id="plansForm">
      <div class="modal-body p-4">
        <div class="form-group mb-2">
          <label for="plansName">Name</label>
          <input
            type="text"
            class="form-control"
            aria-label="Name"
            aria-describedby="basic-addon1"
            required
            id="plansName"
            v-model="posts.name"
          />
        </div>
        <div class="form-group mb-2">
          <label for="plansDate">Geburtsdatum</label>
          <input
            type="date"
            class="form-control"
            placeholder="Date"
            aria-label="Date"
            aria-describedby="basic-addon1"
            required
            id="plansDate"
            v-model="posts.date"
          />
        </div>
        <div class="form-group mb-2">
          <label for="plansEmail">Email</label>
          <input
            type="email"
            class="form-control"
            aria-label="Email"
            aria-describedby="basic-addon1"
            required
            id="plansEmail"
            v-model="posts.email"
          />
        </div>
        <div class="form-group mb-2">
          <label for="plansNumber">Telefonnummer</label>
          <input
            type="text"
            class="form-control"
            aria-label="Phone number"
            required
            aria-describedby="basic-addon1"
            id="plansNumber"
            v-model="posts.phonenumber"
          />
        </div>
        <div class="form-group mb-2">
          <label for="plansAddress">Adresse</label>
          <input
            type="text"
            class="form-control"
            aria-label="Address"
            aria-describedby="basic-addon1"
            required
            id="plansAddress"
            v-model="posts.address"
          />
        </div>
        <h5 class="mt-4 mb-3">Körperdaten</h5>
        <div class="form-group mb-2">
          <label for="plansHeight">Körpergröße (in cm)</label>
          <input
            type="text"
            class="form-control"
            aria-label="Height"
            aria-describedby="basic-addon1"
            required
            id="plansHeight"
            v-model="posts.height"
          />
        </div>
        <div class="form-group mb-2">
          <label for="plansWeight">Aktuelles Gewicht (in kg)</label>
          <input
            type="text"
            class="form-control"
            aria-label="Weight"
            aria-describedby="basic-addon1"
            required
            id="plansWeight"
            v-model="posts.weight"
          />
        </div>
        <div class="form-group mb-2">
          <label for="plansFat">Geschätzter KFA (Körperfettanteil)</label>
          <input
            type="text"
            class="form-control"
            aria-label="Fat"
            aria-describedby="basic-addon1"
            required
            id="plansFat"
            v-model="posts.fat"
          />
        </div>
        <div>
          <br />
          <h5 class="mb-3">Mehr über dich</h5>
        </div>
        <div class="form-group mb-2">
          <label for="plansGoal">Was möchtest du mit diesem Plan erreichen?</label>
          <select class="form-control" required id="plansGoal" v-model="posts.goal">
            <option>Aufbau</option>
            <option>Diät</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <label for="plansJob">Wie lange trainierst du schon?</label>
          <input
            type="text"
            class="form-control"
            aria-label="Time"
            aria-describedby="basic-addon1"
            required
            id="plansTime"
            v-model="posts.time"
          />
        </div>
        <div class="form-group mb-2">
          <label for="plansJob">Welchen Beruf übst du aus?</label>
          <input
            type="text"
            class="form-control"
            aria-label="Job"
            aria-describedby="basic-addon1"
            required
            id="plansJob"
            v-model="posts.job"
          />
        </div>
        <div class="form-group mb-2">
          <label for="dailySchedule">Beschreibe deinen Tagesablauf</label>
          <textarea
            class="form-control"
            required
            id="dailySchedule"
            rows="4"
            v-model="posts.schedule"
          ></textarea>
        </div>
        <div class="form-group mb-2">
          <label for="planAllergies">Hast du Lebensmittelallergien oder -unverträglichkeiten?</label>
          <select class="form-control" required id="planAllergies" v-model="posts.allergies">
            <option>Nein</option>
            <option>Ja</option>
          </select>
        </div>
        <div class="input-group mb-2">
          <input
            type="text"
            class="form-control"
            placeholder="Wenn ja, welche?"
            aria-label="planAllergies2"
            aria-describedby="basic-addon1"
            required
            id="planAllergies2"
            v-model="posts.allergies2"
          />
        </div>
        <div class="form-group mb-2">
          <label for="planDisableCheck">Hast du körperliche Einschränkungen?</label>
          <select class="form-control" required id="planDisableCheck" v-model="posts.checkDisable">
            <option>Nein</option>
            <option>Ja</option>
          </select>
        </div>
        <div class="input-group mb-2">
          <input
            type="text"
            class="form-control"
            placeholder="Wenn ja, welche?"
            aria-label="planIsDisabled"
            aria-describedby="basic-addon1"
            required
            id="planIsDisabled"
            v-model="posts.isDisabled"
          />
        </div>
        <div class="form-group mb-2">
          <label for="planTrainAlready">Aktueller Trainings-Split / Trainingsplan (falls vorhanden)</label>
          <input
            type="text"
            class="form-control"
            aria-label="planTrainAlready"
            aria-describedby="basic-addon1"
            id="planTrainAlready"
            v-model="posts.trains"
          />
        </div>
        <div class="form-group mb-2">
          <label for="planCurrentCalories">
            Aktuelle Kalorienanzahl pro Tag (falls du deine Kalorien
            zählst)
          </label>
          <input
            type="text"
            class="form-control"
            aria-label="planCurrentCalories"
            aria-describedby="basic-addon1"
            id="planCurrentCalories"
            v-model="posts.currentCalories"
          />
        </div>
        <div class="form-group mb-2">
          <label for="planSuppCheck">Benutzt du Supplements?</label>
          <select class="form-control" required id="planSuppCheck" v-model="posts.suppCheck">
            <option>Nein</option>
            <option>Ja</option>
          </select>
        </div>
        <div class="form-group mb-2">
          <textarea
            class="form-control"
            placeholder="Wenn ja, welche?"
            required
            id="planUseSupps"
            rows="4"
            v-model="posts.useSupps"
          ></textarea>
        </div>
        <p>
          Wir binden deine Supps ein und ergänzen diese mit unseren
          Empfehlungen.
        </p>
        <div class="form-group mb-4">
          <label for="planNotices">Anmerkungen</label>
          <textarea class="form-control" required id="planNotices" rows="4" v-model="posts.notes"></textarea>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" required id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Ich habe die
            <a href="#agb" target="_blank">AGBs</a> gelesen und akzeptiert
          </label>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" required id="exampleCheck2" />
          <label class="form-check-label" for="exampleCheck1">
            <p>
              Ich habe die
              <a href="#datenschutz" target="_blank">Datenschutzerklärung</a>
              gelesen und akzeptiert
            </p>
          </label>
        </div>
      </div>

      <div class="modal-footer justify-content-center">
        <button type="submit" class="btn btn-primary" @click="submitPlan">JETZT BUCHEN</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "planModal",
  data() {
    return {
      posts: {
        order: null,
        name: null,
        date: null,
        email: null,
        phonenumber: null,
        address: null,
        height: null,
        weight: null,
        fat: null,
        goal: null,
        time: null,
        job: null,
        schedule: null,
        allergies: null,
        allergies2: null,
        likefood: null,
        recaptcha_token: null,
        likesnofood: null,
        checkDisable: null,
        isDisabled: null,
        trains: null,
        currentCalories: null,
        suppCheck: null,
        useSupps: null,
        notes: null,
      },
    };
  },
  methods: {
    async submitPlan(e) {
      const response = await fetch(
        "https://YOURDOMAIN.HAHAHAHAHAH",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...this.posts }),
        }
      );
      const data = await response.json();
    },
  },
};
</script>
