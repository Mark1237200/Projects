var files = document.getElementById("input-file").files;

Kakao.Share.uploadImage({
  file: files,
})
  .then(function (response) {
    console.log(response.infos.original.url);
  })
  .catch(function (error) {
    console.log(error);
  });
