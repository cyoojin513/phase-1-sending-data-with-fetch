// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
//   };

//   fetch("http://localhost:3000/dogs", configurationObject)
//   .then(res => res.json())
//   .then(object => console.log(object))
//   .catch(function (error) { 
//     alert("Bad things!");
//     console.log(error.message);
//   })




function submitData(name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
      },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(res => res.json())
    .then( e => {
        document.body.append(e ["id"])
    })

        // document.body.innerHTML = object[ "id" ]})


    .catch(error => {
        document.body.append(error.message)
    })
}
