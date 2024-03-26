'use strict'

async function fetchApi(){
    try{
        const response = await fetch('https://reqres.in/api/users/1');
        
        if (!response.ok) throw new Error('Error message');
        const data = await response.json();
        console.log(data);

    }catch (error){
        console.log(error.message);
    }
}

async function postData() {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Jesse Jokinen',
          job: 'Koodari'
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error:', error);
    }
}

async function deleteData() {
    try {
      const response = await fetch('https://reqres.in/api/users/1', {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      console.log('User deleted successfully');
    } catch (error) {
      console.log('Error:', error);
    }
}

async function fetchData(url, options) {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }

fetchData('https://reqres.in/api/users/1', {method:'GET'})

  

