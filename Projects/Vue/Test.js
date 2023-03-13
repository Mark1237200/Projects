function response(sender, replier) {
  if (sender === "/애니") {
    fetch("https://api.waifu.pics/sfw/waifu")
      .then((res) => res.json())
      .then((data) => replier.reply(data))
      .catch((err) => replier.reply(err));
  }
}
