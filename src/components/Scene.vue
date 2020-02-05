<template>
  <main class="scene">
    <FallingArea />
    <TeeterTotter />
  </main>
</template>

<script>
import { mapActions } from "vuex";

import FallingArea from "./FallingArea.vue";
import TeeterTotter from "./TeeterTotter.vue";

export default {
  components: {
    FallingArea,
    TeeterTotter
  },
  created() {
    this.initGame();
  },
  methods: {
    ...mapActions(["initGame"])
  }
};
</script>

<style lang="scss" scoped>
.scene {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  min-width: 600px;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 10rem;
}
</style>
