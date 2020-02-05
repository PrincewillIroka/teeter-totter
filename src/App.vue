<template>
  <div id="app">
    <ControlsLayout />
    <Scene />
    <Modal/>
  </div>
</template>

<script>
import ControlsLayout from "./components/ControlsLayout";
import Scene from "./components/Scene";
import Modal from "./components/Modal";

export default {
  components: {
    ControlsLayout,
    Scene,
    Modal
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

html {
  overflow-y: auto !important;
}

#app {
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
