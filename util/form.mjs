let form =document.getElementById('form');

form.addEventListener('submit', (event)=>{
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

})
