<template>
  <div class="container mb-2">
    <h2 class="green">🍍 Pinia Example:</h2>

    <ul>
      <li><strong>Count:</strong> {{ store.count }}</li>
      <li><strong>Doubled Count:</strong> {{ store.doubledCount }}</li>
      <li>
        <button
            data-test="incrementButton"
            @click="store.incrementCount()"
        >
          Increment Count
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {useCounterStore} from "@/stores/counter";
const store = useCounterStore();

//
// import {
//   mapGetters,
//   mapState
// } from 'pinia';
//
// import { counterStore } from '@/stores/counter';
//
// export default {
//   name: 'PiniaDemo',
//   computed: {
//     counterStore: function () {
//       return counterStore();
//     },
//     ...mapState(counterStore, [
//       'count'
//     ]),
//     ...mapGetters(counterStore, [
//       'doubledCount'
//     ])
//   }
// };
</script>
