const news_apikey = "99ef42fc4cf0491c928597b08fd47354";

const xhr = new XMLHttpRequest();

const newsUrl =
  "https://newsapi.org/v2/top-headlines?sortBy=publishedAt&country=us&apiKey=" +
  news_apikey;

const lambdaUrl =
  "https://78oq0tcw6j.execute-api.us-east-1.amazonaws.com/ss/Comprehend_API";
let articles;
xhr.open("GET", newsUrl);

xhr.send();

xhr.onreadystatechange = function(e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  if (xhr.status === 200) {
    articles = JSON.parse(xhr.responseText).articles;
    const content = document.getElementById("news");

    articles.forEach((element, index) => {
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
      uri = encodeURI(lambdaUrl + "?content=" + articles[index].description);
      console.log(uri);
      content.innerHTML +=
        "<a target='_new' href=" + uri + ">get key phrases</a>";
    });
  } else {
    console.log("Error!");
  }
};

// function getKeyPhrase(index) {
//   const lambdaUrl =
//     "https://78oq0tcw6j.execute-api.us-east-1.amazonaws.com/ss/Comprehend_API";
//   let desc = "set the origin";
//   if (index != -1) {
//     desc = articles[index].description;
//   }
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", lambdaUrl + "?content=" + desc);
//   xhr.send();
//   xhr.onreadystatechange = function(e) {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;

//     if (xhr.status === 200) {
//       const keywords = JSON.parse(xhr.responseText).KeyPhrases;
//       console.log(keywords);
//     }
//   };
// }
