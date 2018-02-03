<template lang="html">
  <div class="item">
      <div class="meta">
        {{ updated(entity) }}
      </div>
      <div class="content">
        <div class="header" @click="open = !open">
          {{ header(entity) || '新建笔记' }}
        </div>
        <div class="extra">
          <transition name="fade">
            <editor
              v-bind:entity="entity"
              v-if="open">
            </editor>
          </transition>
          {{ words(entity) }} 字
          <i
            class="right floated trash outline icon"
            @click="destroy(entity)"
            v-if="open">
          </i>
        </div>
      </div>
    </div>
</template>

<script>
import Editor from './Editor'
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'destroy'
    ])
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    ...mapGetters([
      'updated',
      'words',
      'header'
    ])
  },
  props: [
    'entity'
  ],
  components: {
    Editor
  }
}
</script>

<style lang="css">
</style>
