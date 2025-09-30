const introText =
  "Hi! My name is Kateryna Boikova. I'm a professional translator seeking career change opportunity in a fascinating world of web development.";

const introTypewriter = document.getElementById("introTypewriter");

function typewriter(text, index) {
  if (index < text.length) {
    introTypewriter.innerHTML += text.charAt(index);
    setTimeout(() => {
      typewriter(text, index + 1);
    }, 50);
  }
}

typewriter(introText, 0);
