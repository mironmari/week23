async function getPost() {

let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
let content = await response.json()
console.log(1, content)

let list = document.querySelector('.posts')

let key;
for (key in content) {

  list.innerHTML += `
  <li>
      <h3>${content[key].name}</h3>
      <p>${content[key].body}</p>
  </li>`
}
}

getPost()