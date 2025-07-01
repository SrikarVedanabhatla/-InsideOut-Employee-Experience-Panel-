document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  function markInvalid(el) {
    el.style.borderColor = "#ff0055";
    el.style.boxShadow = "0 0 5px red";
  }

  function clearInvalid(el) {
    el.style.borderColor = "#00ffe7";
    el.style.boxShadow = "none";
  }

  let formValid = true;

  const nameInput = document.querySelector('input[placeholder="e.g. Krishna"]');
  const employeeIdInput = document.querySelector('input[placeholder="e.g. 1234"]');
  const ageInput = document.querySelector('input[placeholder="e.g. 25"]');
  const dateInput = document.querySelector('input[type="date"]');
  const departmentSelect = document.querySelector('#department');

  const q1Checked = document.querySelector('input[name="q1"]:checked');
  const q2Checked = document.querySelector('input[name="q2"]:checked');
  const q3Checked = document.querySelector('input[name="q3"]:checked');

  const q4Textarea = document.querySelectorAll('textarea')[0];
  const q5Textarea = document.querySelectorAll('textarea')[1];

  [nameInput, employeeIdInput, ageInput, dateInput, departmentSelect, q4Textarea, q5Textarea].forEach(el => clearInvalid(el));

  function clearStarGroupInvalid(name) {
    const labels = document.querySelectorAll(`input[name="${name}"] + label`);
    labels.forEach(label => label.style.color = "#444");
  }

  clearStarGroupInvalid("q1");
  clearStarGroupInvalid("q2");
  clearStarGroupInvalid("q3");

  if (!nameInput.value.trim()) { markInvalid(nameInput); formValid = false; }
  if (!employeeIdInput.value.trim()) { markInvalid(employeeIdInput); formValid = false; }
  if (!ageInput.value.trim()) { markInvalid(ageInput); formValid = false; }
  if (!dateInput.value.trim()) { markInvalid(dateInput); formValid = false; }
  if (!departmentSelect.value.trim()) { markInvalid(departmentSelect); formValid = false; }

  function markStarGroupInvalid(name) {
    const labels = document.querySelectorAll(`input[name="${name}"] + label`);
    labels.forEach(label => label.style.color = "red");
  }

  if (!q1Checked) { markStarGroupInvalid("q1"); formValid = false; }
  if (!q2Checked) { markStarGroupInvalid("q2"); formValid = false; }
  if (!q3Checked) { markStarGroupInvalid("q3"); formValid = false; }

  if (!q4Textarea.value.trim()) { markInvalid(q4Textarea); formValid = false; }
  if (!q5Textarea.value.trim()) { markInvalid(q5Textarea); formValid = false; }

  if (!formValid) {
    alert("Please fill out all required fields before submitting.");
    return;
  }

  const formData = {
    name: nameInput.value.trim(),
    employeeId: employeeIdInput.value.trim(),
    age: ageInput.value.trim(),
    date: dateInput.value.trim(),
    department: departmentSelect.value.trim(),
    q1: q1Checked.value,
    q2: q2Checked.value,
    q3: q3Checked.value,
    q4: q4Textarea.value.trim(),
    q5: q5Textarea.value.trim()
  };

  fetch("http://localhost:3000/submit-feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    alert("✨ Feedback submitted successfully! Thank you!");
    document.querySelector("form").reset();
    clearStarGroupInvalid("q1");
    clearStarGroupInvalid("q2");
    clearStarGroupInvalid("q3");
  })
  .catch(err => {
    console.error("Error:", err);
    alert("There was an error submitting your feedback. Please try again later.");
  });
});
