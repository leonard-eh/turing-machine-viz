'use strict';
// handling the input slider for the animation speed

var stepInterval = 100;
var isInitialized = false;
var speedInput;
var speedLabel;

function initialize(input, label) {
  if (!isInitialized) {
    speedInput = input;
    speedLabel = label;
    speedInput.addEventListener('input', function () {
      stepInterval = speedInput.value * 10;
      speedLabel.innerText = 'Step Interval: ' + stepInterval + ' ms';
    });
    stepInterval = speedInput.value * 10;
    speedLabel.innerText = 'Step Interval: ' + stepInterval + ' ms';
    isInitialized = true;
  }
}

function getStepInterval() {
  return stepInterval;
}

function getIsInitialized() {
  return isInitialized;
}

exports.initialize = initialize;
exports.isInitialized = getIsInitialized;
exports.getStepInterval = getStepInterval;
