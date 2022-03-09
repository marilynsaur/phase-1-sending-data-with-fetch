// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });

    


function submitData(name, email) {
    const data = {
        name: name,
        email: email,
    };
    

    const configurationObject2 = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(data),
    };
    
  return fetch("http://localhost:3000/users", configurationObject2)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
           
            document.body.innerHTML = object.id
        })
        .catch(function (error) {
            alert("Unauthorized Access");
            console.log(error.message);
            document.body.innerHTML = error
        });
   
}
