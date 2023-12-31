Qualtrics.SurveyEngine.addOnload(function () {
  /*Place your JavaScript here to run when the page loads*/

  /* Change 1: Hiding the Next button */
  // Retrieve Qualtrics object and save in qthis
  var qthis = this;

  // Hide buttons
  qthis.hideNextButton();

  /* Change 2: Defining and load required resources */
  var task_github = "https://cdn.jsdelivr.net/gh/vekteo/Card_sorting_jsPsych/"; // https://<your-github-username>.github.io/<your-experiment-name>
  var henry_github = "https://hhankj.github.io/card_task_testing/";

  // requiredResources must include all the JS files that demo-simple-rt-task-transformed.html uses.
  var requiredResources = [
    task_github + "shared/languages.js",
    task_github + "shared/parameters.js",
    task_github + "shared/statCalculation.js",
    task_github + "static/js/jspsych-6.1.0/jspsych.js",
    task_github +
      "static/js/jspsych-6.1.0/plugins/jspsych-html-button-response.js",
    task_github + "static/js/jspsych-6.1.0/plugins/jspsych-fullscreen.js",
    task_github + "static/js/jspsych-6.1.0/plugins/jspsych-instructions.js",
    task_github +
      "static/js/jspsych-6.1.0/plugins/jspsych-html-keyboard-response.js",
    henry_github + "cards.js",
    henry_github + "experiment-no_fullscreen.js",
  ];
  function loadScript(idx) {
    console.log("Loading ", requiredResources[idx]);
    jQuery.getScript(requiredResources[idx], function () {
      if (idx + 1 < requiredResources.length) {
        loadScript(idx + 1);
      } else {
        initExp();
      }
    });
  }
  if (
    window.Qualtrics &&
    (!window.frameElement || window.frameElement.id !== "mobile-preview-view")
  ) {
    loadScript(0);
  }

  /* Change 3: Appending the display_stage Div using jQuery */
  // jQuery is loaded in Qualtrics by default
  //jQuery("<div id = 'display_stage_background'></div>").appendTo("body");
  //jQuery("<div id = 'display_stage'></div>").appendTo("body");

  /* Change 4: Wrapping jsPsych.init() in a function */
  function initExp() {
    jsPsych.init({
      timeline: timeline,
      //display_element: "display_stage",
      on_finish: function (data) {
        /* Change 6: Adding the clean up and continue functions.*/
        // clear the stage
        //jQuery("#display_stage").remove();
        // jQuery("#display_stage_background").remove();

        // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
        qthis.clickNextButton();
      },
    });
  }
});

Qualtrics.SurveyEngine.addOnReady(function () {
  /*Place your JavaScript here to run when the page is fully displayed*/
});

Qualtrics.SurveyEngine.addOnUnload(function () {
  /*Place your JavaScript here to run when the page is unloaded*/
});
