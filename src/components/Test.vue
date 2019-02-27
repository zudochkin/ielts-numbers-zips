<template>
  <div class="test">
    <h3>Some indicator</h3>

    <h5>numbers/zip</h5>

    <input type="text" v-model="answer" @keyup.enter="checkAnswer">

    <p>Right answers: {{ rightAnswers }}</p>
    <p>Wrong answers: {{ wrongAnswers }}</p>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {},
  methods: {
    checkAnswer() {
      console.log("check answer triggered");
    }
  }
};
</script>
