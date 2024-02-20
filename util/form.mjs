let form = document.getElementById("formAdd");
let update = document.getElementById("toUpdate");
let name = document.getElementById("name1");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let selection = document.getElementById("contactReason");
let other = document.getElementById("otherText");

update.addEventListener("submit", (event) => {
  event.preventDefault();

  const id2 = new formData(update);
  const res = Object.fromEntries(id2);
  const send = Json.stringify(res);

  fetch(`http//localhost:3000/contact/${send}`).then(function fill(response) {
    name.innerText = response.name;
    email.innerText = response.email;
    phone.innerText = response.phone;
    selection.value = response.contactReason;
    other.innerText = response.textBox;
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const res = Object.fromEntries(formData);
    const newBody = JSON.stringify(res);
    console.log(formData);
    console.log(res);
    console.log(newBody);
    fetch("http://localhost:3000/contact", {
      method: "post",
      body: newBody,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        //
      });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const res = Object.fromEntries(formData);
  const newBody = JSON.stringify(res);
  console.log(formData);
  console.log(res);
  console.log(newBody);
  fetch("http://localhost:3000/contact", {
    method: "post",
    body: newBody,
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
      //
    });
});
