fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i <= 4; i++) {
      let title = data[i].title;
      let body = data[i].body;

      document.getElementById("text").innerHTML +=
        "Title: " + title + "<br>Body: " + body;
    }
  });
