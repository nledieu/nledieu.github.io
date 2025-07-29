let currentStep = 0;

function goToStep(stepNumber) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(`step${stepNumber}`).classList.add('active');
  currentStep = stepNumber;
}

function validateStep1() {
  const answer = document.querySelector('input[name="continent"]:checked');
  if (!answer) {
    alert("Choisis une réponse !");
    return;
  }
  if (answer.value === "Europe") {
    goToStep(2);
  } else {
    alert("Hmm… ce n’est pas la bonne réponse. Essaie encore !");
  }
}

function validateStep2() {
  const answer = document.querySelector('input[name="artiste"]:checked');
  if (!answer) {
    alert("Choisis une réponse !");
    return;
  }
  if (answer.value === "Dali") {
    goToStep(3);
  } else {
    alert("Hmm… ce n’est pas la bonne réponse. Essaie encore !");
  }
}

function validateStep3() {
  const answer = document.querySelector('input[name="language"]:checked');
  if (!answer) {
    alert("Choisis une réponse !");
    return;
  }
  if (answer.value === "Espagnol") {
    goToStep(4);
  } else {
    alert("Hmm… ce n’est pas la bonne réponse. Essaie encore !");
  }
}
function validateStep4() {
  const answer = document.querySelector('input[name="monument"]:checked');
  if (!answer) {
    alert("Choisis une réponse !");
    return;
  }
  if (answer.value === "Sagrada") {
    goToStep(5);
  } else {
    alert("Hmm… ce n’est pas la bonne réponse. Essaie encore !");
  }
}

function validateStep5() {
  const answer = document.querySelector('input[name="peintre"]:checked');
  if (!answer) {
    alert("Choisis une réponse !");
    return;
  }
  if (answer.value === "Pablo Picasso") {
    goToStep(6);
  } else {
    alert("Hmm… ce n’est pas la bonne réponse. Essaie encore !");
  }
}

function validateStep6() {
  const answer = document.querySelector('input[name="fname"]');
  if (!answer || answer.value.trim() === "") {
    alert("Choisis une réponse !");
    return;
  }
  if (answer.value.toUpperCase() === "BARCELONE") {
    goToStep(7);
  } else {
    alert("Hmm… ce n’est pas la bonne réponse. Essaie encore !");
  }
}

