//TAIWO STARTED THIS
//EVERYONE CONTRIBUTED
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const userList = document.getElementById('user-list');
    let users = [];
    //TAIWO DID THIS
  
    // Event listener for form submission
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();//prevent form from loading when form is been submited
        register().then((result) => {
            // Add user to the list
            users.push(result);
            // Render user in the table
            renderUser(result);
            // Reset form fields
            registrationForm.reset();
        }).catch((error) => {

        })
        // e.preventDefault();//prevent form from loading when form is been submited

        // //Misheal and Gbolahan did

        // // Get form values
        // const firstName = document.getElementById('first_name').value;
        // const lastName = document.getElementById('last_name').value;
        // const phoneNumber = document.getElementById('phone_number').value;
        // const email = document.getElementById('email').value;
        // const password = document.getElementById('password').value;
  
        // // Create a new user object
        // const newUser = {
        //     id: users.length + 1,//users id should start from 1, that is why 1 was added.
        //     firstName: firstName,
        //     lastName: lastName,
        //     phoneNumber: phoneNumber,
        //     email: email,
        //     password: password
        // };
        // //Ends here


        // // Add user to the list
        // users.push(newUser);
  
        // // Render user in the table
        // renderUser(newUser);
  
        // // Reset form fields
        // registrationForm.reset();
    });
  
    // Event listener for search button click
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
  
        // Clear previous search results
        clearUserList();
  
        // Filter users based on search term
        const filteredUsers = users.filter(user => {
            return (
                user.id.toString().includes(searchTerm) ||
                user.phoneNumber.includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm)
            );
        });
  
        // Render filtered users
        filteredUsers.forEach(user => {
            renderUser(user);
        });
    });
    //KINGSLEY START HERE AND ABEL
    // Function to render a user in the table
    function renderUser(user) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.email}</td>
            <td><button class="deleteBtn" data-id="${user.id}">Delete</button></td>
        `;
        userList.appendChild(row);
    }
  
    // Event listener for delete button click
    userList.addEventListener('click', (e) => {
        if (e.target.classList.contains('deleteBtn')) {
            const Id = parseInt(e.target.getAttribute('data-id'));
            deleteUser(userId);
        }
    });
  
    // Function to delete a user from the list
    function deleteUser(userId) {
        users = users.filter(user => user.id !== userId);
        clearUserList();
        users.forEach(user => {
            renderUser(user);
        });
    }
  
    // Function to clear the user list
    function clearUserList() {
        userList.innerHTML = '';
    }

    function register(){
        return new Promise((resolve, reject) => {
            //Misheal and Gbolahan did

            // Get form values
            const firstName = document.getElementById('first_name').value;
            const lastName = document.getElementById('last_name').value;
            const phoneNumber = document.getElementById('phone_number').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    
            // Create a new user object
            const newUser = {
                id: users.length + 1,//users id should start from 1, that is why 1 was added.
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email,
                password: password
            };
            //Ends here
            setTimeout(()=> {
                resolve(newUser)
            }, 5000)
        })
    }
});