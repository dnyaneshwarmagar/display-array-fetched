// Function to fetch data from API 1
function PromiseAPI1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/posts')
          .then(response => response.json())
          .then(data => {
            // Display data from API 1 in UI
            console.log('API 1 Data:', data);
            document.getElementById('div1').innerText = JSON.stringify(data);
            resolve(true); 
          })
          .catch(error => reject(error));
      }, 1000);
    });
  }
  
  // Function to fetch data from API 2
  function PromiseAPI2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => {
            // Display data from API 2 in UI
            console.log('API 2 Data:', data);
            document.getElementById('div2').innerText = JSON.stringify(data);
            resolve(true); 
          })
          .catch(error => reject(error));
      }, 2000);
    });
  }
  
  // Function to fetch data from API 3
  function PromiseAPI3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://dummyjson.com/todos')
          .then(response => response.json())
          .then(data => {
            // Display data from API 3 in UI
            console.log('API 3 Data:', data);
            document.getElementById('div3').innerText = JSON.stringify(data);
            resolve(true); 
          })
          .catch(error => reject(error));
      }, 3000);
    });
  }
  
  // Event listener for the button click
  document.getElementById('startButton').addEventListener('click', () => {
    // Start the promise chain
    PromiseAPI1()
      .then((result) => {
        if (result) {
          return PromiseAPI2();
        }
      })
      .then((result) => {
        if (result) {
          return PromiseAPI3();
        }
      })
      .catch(error => console.error('Error:', error));
  });
  