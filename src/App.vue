<template>
  <div id="app">
    <notes></notes>
  </div>
</template>

<script>
import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'

export default {
  name: 'App',
  components: {
    Notes
  }
}
</script>

<style>
  .notes {
    margin-top: 32px;
  }

  .notes .ui textarea {
    border: none;
    font-size: 16px;
    padding: 0;
    margin: 32px 0;
  }

  .ui.items > .item > .content > .header {
    display: block;
    cursor: pointer;
  }

  .ui.items > .item > .meta {
    width: 88px;
    color: rgba(0, 0, 0, 0.4);
    margin-top: o;
    margin-bottom: 16px;
  }

  .trash {
    cursor: pointer;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
