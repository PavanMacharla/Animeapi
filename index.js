function refresh() {
  location.reload();
}

function search() {
  var value = document.getElementById("myInput").value;

  if (value == "" || null) {
    alert("input box empty");
  } else {
    viewinfo();
  }
}

async function viewinfo() {
  try {
    const api = "https://api.jikan.moe/v3";
    var value = document.getElementById("myInput").value;

    var data = await fetch(api + "/search/anime?q=" + value + "&page=1");
    var resp = await data.json();
    console.log(resp);

    var len = resp.results.length;
    console.log(len);
    for (var i = 0; i < len; i++) {
      const element = resp.results[i];

      var img = document.createElement("img");
      img.src = element.image_url;
      img.style.marginTop = "60px";
      img.style.marginBottom = "60px";
      img.style.display = "block";
      img.style.marginLeft = "auto";
      img.style.marginRight = "auto";
      img.style.width = "550px";
      img.style.height = "480px";
      img.style.padding = "20px";

      document.getElementById("b2").append(img);

      var title = document.createElement("div");
      title.innerText = "Title : " + element.title;
      title.style.textAlign = "center";
      title.style.fontSize = "35px";
      document.getElementById("b2").append(title);

      var episode = document.createElement("div");
      episode.innerText = "Episode : " + element.episodes;
      episode.style.textAlign = "center";
      document.getElementById("b2").append(episode);

      var start = document.createElement("div");
      start.innerText = "Start Date : " + element.start_date;
      start.style.textAlign = "center";
      document.getElementById("b2").append(start);

      var end = document.createElement("div");
      end.innerText = "End Date : " + element.end_date;
      end.style.textAlign = "center";
      document.getElementById("b2").append(end);

      var type = document.createElement("div");
      type.innerText = "Type : " + element.type;
      type.style.textAlign = "center";
      document.getElementById("b2").append(type);

      var imdb = document.createElement("div");
      imdb.innerText = "IMDB Rating : " + element.score;
      imdb.style.textAlign = "center";
      document.getElementById("b2").append(imdb);

      var synp = document.createElement("p");
      synp.innerText = "Fore read : " + element.synopsis;
      synp.style.textAlign = "center";
      document.getElementById("b2").append(synp);
    }
  } catch (error) {
    console.error();
  }
}
