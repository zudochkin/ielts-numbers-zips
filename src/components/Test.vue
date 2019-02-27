<template>
  <div class="test">
    <div v-if="started">
      <h1>Quiz</h1>

      <h5>{{ type }}</h5>

      <input type="text" v-model="answer" @keyup.enter="checkAnswer">

      <pre>{{ quizString }}</pre>

      <p>Right answers: {{ rightAnswers }}</p>
      <p>Wrong answers: {{ wrongAnswers }}</p>
    </div>

    <div v-else-if="!started">
      <button @click="start">Start!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",

  data() {
    return {
      type: this.$route.params.type || "numbers",
      rightAnswers: 0,
      wrongAnswers: 0,
      answer: "",
      started: false,
      quizString: ""
    };
  },
  created() {},
  watch: {
    $route: "updateType"
  },
  methods: {
    start() {
      this.started = true;
      this.generateQuiz();
    },
    generateQuiz() {
      this.answer = "";
      this.quizString = this.newQuiz();
      this.synthesize(this.quizString.split("").join(","));
    },
    newQuiz() {
      var text = "";
      if (this.type == "numbers") {
        var possible = "0123456789";
      } else {
        var possible =
          "abcdefghijklmnopqrstuvwxyz0123456789";
      }

      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    synthesize(text) {
      responsiveVoice.speak(text);
    },
    updateType() {
      this.type = this.$route.params.type || "numbers";
      this.generateQuiz()
    },
    checkAnswer() {
      if (this.answer == this.quizString) {
        this.rightAnswers++;
      } else {
        this.wrongAnswers++;
      }

      this.generateQuiz();
    }
  }
};
</script>
