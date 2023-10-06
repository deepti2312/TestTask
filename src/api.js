
// const api_url = "https://jsonplaceholder.typicode.com/users"

// async function getapi(url) {
//     const response = await fetch(url);
//     var data = response.json();
//     console.log(data);

//     if (response) {
//         hideloader();
//     }

//     show(data);
// }

// getapi(api_url);

// function hideloader() {
//     document.getElementById("loading").style.display = "none";
// }

// function show(data) {
//     let tab = `
//     <tr>
//         <th>id</th>
//         <th>name</th>
//         <th>username</th>
//         <th>email</th>
//         <th>address</th>
//         <th>phone</th>
//         <th>website</th>
//         <th>company</th>
//     </tr>`;

//     for (let r of data.list) {
//         tab += `
//         <tr>
//             <td>${r.id}</td>
//             <td>${r.name}</td>
//             <td>${r.username}</td>
//             <td>${r.email}</td>
//             <td>${r.address}</td>
//             <td>${r.phone}</td>
//             <td>${r.website}</td>
//             <td>${r.company}</td>
//         </tr>`;
//     }
//     document.getElementById("employee").innerHTML = tab;
// }