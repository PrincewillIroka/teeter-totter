<template>
  <main class="playground">
    <FallingArea />
  </main>
</template>

<script>
import { mapActions } from "vuex";

import FallingArea from "./FallingArea.vue";

export default {
  components: {
    FallingArea
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
.playground {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  min-width: 600px;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 10rem;
}
</style>
