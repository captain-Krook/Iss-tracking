const profil = fetch(
  "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cpageimages%7Crevisions&titles=Sergey_Ryzhikov_(cosmonaut)&redirects=1&formatversion=2&exsentences=2&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=300&rvprop=timestamp"
).then((response) => console.log(response))

console.log(profil)
