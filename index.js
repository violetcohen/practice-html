function greeting() {
  const greeting = document.createElement('div');
  greeting.innerHTML = '<h1>Hi there!</h1>';
  const root = document.getElementById('root');
  root.appendChild(greeting);
}
