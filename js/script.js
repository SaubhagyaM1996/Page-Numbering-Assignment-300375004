//getting data for the users array
//Ref: https://www.geeksforgeeks.org/read-json-file-using-javascript/
/*
usersArr =[];

fetchUsers();

//create the user array
function fetchUsers() {
    fetch("https://randomuser.me/api/?results=53", {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // for(let i=0; i<data.results.length; i++)
            // {
            //     console.log(data.results[i]);
            // }

            data.results.forEach(element => {
                //console.log(element);
                const date = new Date(element.registered.date);
                usersArr.push({
                    "name": element.name.first + " " + element.name.last,
                    "image": element.picture.medium,
                    "email": element.email,
                    "joined": date.toLocaleDateString()
                })
            });
        });
}

console.log(usersArr);
*/




//three main containters
page_header = document.getElementsByClassName("page-header cf")[0];
contact_list = document.getElementsByClassName("contact-list")[0];
pagination = document.getElementsByClassName("pagination")[0];

displayTotalUserCount(users.length);
usersPerPage = 10;
numOfPages = Math.ceil(users.length / usersPerPage);
displayUsers(0);
displayPagination(numOfPages);

function displayTotalUserCount(totCount){
    page_header.innerHTML =`<h3>Total: ${totCount}</h3>`;
}

function displayUsers(start){
    
    contact_list.innerHTML = "";
    const usersArr = users.map(user => ({
        ...user
    }))

    for (i = start; i < start + 10; i++) {
        contact_list.innerHTML += `
        <li class=\"contact-item cf\">
            <div class=\"contact-details\">
                <img class=\"avatar\" src=\"${usersArr[i].image}">
                <h3>${usersArr[i].name}</h3>
                <span class=\"email\">${usersArr[i].email}</span>
            </div> 
            <div class=\"joined-details\">
                <span class=\"date\">Joined ${usersArr[i].joined}</span>
            </div>
        </li>`
    }
}

function displayPagination(totPages){

    pagination.innerHTML="";

    for(i=1; i<=totPages; i++){
        pagination.innerHTML += `<li><a href="javascript:displayUsers(${i-1}*10);">${i}</a></li>`;
    }
}
