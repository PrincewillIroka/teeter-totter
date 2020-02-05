<template>
  <b-modal
    aria-role="dialog"
    :active.sync="isModalShown"
    :can-cancel="false"
    aria-modal
    has-modal-card
    trap-focus
  >
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Game Over!</p>
      </header>
      <section class="modal-card-body">
        Teeter-totter is out of balance.
      </section>
      <footer class="modal-card-foot">
        <b-button type="is-primary" @click="initGame">Try again</b-button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isModalShown"])
  },
  methods: {
    ...mapActions(["initGame"])
  }
};
</script>

<style lang="scss" scoped>
.modal-card {
  width: auto;
}

.modal-card-foot {
  justify-content: flex-end;
}
</style>
