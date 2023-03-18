function response(sender, replier) {
  let img = "";
  if (sender === "/애니") {
    replier.reply(img());
  }
}

function img() {
  fetch("https://api.waifu.pics/sfw/waifu")
    .then((res) => res.json())
    .then((data) => {
      img = data.url;
    });
  return img;
}
