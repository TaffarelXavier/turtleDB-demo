function addListeners() {
  const getButton = document.getElementById('get');
  const postButton = document.getElementById('post');
  let counter = 3;

  getButton.addEventListener('click', () => {
    console.log('fuck you andrew');
    axios.get('http://localhost:3002/store')
      .then(res => {
        console.log(res.data.rows);
      })
      .catch(err => {
        console.log('error:', err);
      })
  })

  postButton.addEventListener('click', () => {
    axios.post('http://localhost:3002/store', {
      id: counter,
      name: `Swampturtles${counter}`
    })
      .then(res => {
        counter++;
        console.log(res);
      })
      .catch(err => {
        console.log('error:', err);
      })
  })
}

window.addEventListener("DOMContentLoaded", addListeners);
