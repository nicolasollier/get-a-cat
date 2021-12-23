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

// Resize on mobile views

function resetHeight() {
  // reset the body height to that of the inner browser
  document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();
