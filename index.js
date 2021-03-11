function postRequest() {
  var Taskname = document.getElementById("redone").value;
  var Taskdate = document.getElementById("todaydate").value;
  let newdate = new Date(Taskdate).toISOString();
  var Taskstatus = document.getElementById("status").value;

  console.log(Taskname);
  console.log(Taskdate);
  console.log(Taskstatus);
  console.log(this);

  fetch(
    "http://34.71.224.0:8080/api/tasks",

    {
      method: "POST",
      body: JSON.stringify({
        name: Taskname,
        expiryDate: newdate,
        status: Taskstatus,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2MTc0MzMzOTl9._VY8Ao2E4a4C5_3aWpRh3HzPBJPlQ4SWdzAlMObp89r3rEx2jQXs-x_Lz7ozNDZuIdxI9zuExRUFYCQaYwfRUw",
      },
    }
  )
    .then((x) => {
      return x.json();
    })
    .then((y) => {
      console.log(y);
    });
}
