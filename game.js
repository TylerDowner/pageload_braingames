'use strict';

// preload all image files in the test
var images = ['static/img/blank.jpg', 'static/img/cartoon.jpg'];

var evaluate = {
  type: "html-button-response",
  stimulus: "This will later be a page to collect user feedback.",
	choices: ['load next page'],
	prompt: "<p>Please click button to load the next stimulus.</p>"
}


// This variable is where you will define the test_data
// Each line is one stimulus for which one will select the url in the timeline for content to be shown
// and link it to a js_url which will contain the specific animation for this content.
var test_data = [
    { data: {js_url: "static/js/animation.js"}, timeline: [{url: "static/html/index.html"}, evaluate] },
    { data: {js_url: "static/js/animation_longer.js"}, timeline: [{url: "static/html/index.html"}, evaluate] },
    { data: {js_url: "static/js/animation_longfp.js"}, timeline: [{url: "static/html/index.html"}, evaluate] }
];

var timeline = [];

var welcome = {
  type: "html-keyboard-response",
  stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome);

var launch = {
	type: "html-button-response",
  stimulus: "",
	choices: ['Start the test'],
	prompt: "<p>Please click button to start the test.</p>"
}

timeline.push(launch)

/* define test block */
var test_block = {
  type: "external-html",
  timeline: test_data,
  randomize_order: true,
  repetitions: 2,
  cont_btn: "end-trial",
  executeScript: true
};

timeline.push(test_block)

/* start the experiment */
jsPsych.init({
      timeline: timeline,
      preload_images: images,
      on_finish: function() {
        jsPsych.data.displayData();
      }
});
