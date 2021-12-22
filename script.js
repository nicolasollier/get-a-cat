function getRandomButtonEmote() {
  let emotes = ["😺", "😸", "😾", "😽", "🙀", "😻", "😼"];
  let random = Math.floor(Math.random() * emotes.length);

  button.textContent = emotes[random];
}

const getCat = async () => {
  res = await axios.get("https://thatcopy.pw/catapi/rest/");
  catPic = res.data.webpurl;
  img = document.querySelector("#cat-img");
  img.src = catPic;
  getRandomButtonEmote();
};

const button = document.querySelector("#get-cat");
button.addEventListener("click", getCat);
