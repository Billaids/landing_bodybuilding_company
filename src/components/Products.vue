<template>
    <section class="section bg-light">
        <div class="container"></div>
    </section>
</template>
<script>
import PlanModal from "./Booking.vue";
import { ref } from "vue";
import Modal from "./Modal.vue";
export default {
    name: 'Products',
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
            show8
        };
    },
};


</script>
