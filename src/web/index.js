const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?sortBy=publishedAt&country=us&apiKey=99ef42fc4cf0491c928597b08fd47354"
);

xhr.send();

xhr.onreadystatechange = function(e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  // status는 response 상태 코드를 반환 : 200 => 정상 응답
  if (xhr.status === 200) {
    const articles = JSON.parse(xhr.responseText).articles;
    const content = document.getElementById("news");

    articles.forEach(element => {
      let hr = document.createElement("hr");
      let titleLink = document.createElement("a");
      titleLink.appendChild(document.createTextNode(element.title));

      content.appendChild(hr);
      content.innerHTML +=
        "<p>Title: " +
        "<a href='" +
        element.url +
        "'>" +
        element.title +
        "</a></p>";
      content.append(titleLink);
      content.appendChild(
        document
          .createElement("p")
          .appendChild(document.createTextNode("Date: " + element.publishedAt))
      );
    });
  } else {
    console.log("Error!");
  }
};
