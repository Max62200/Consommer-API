// get //
const url = 'https://reqres.in/api/users';
const div_List = document.getElementById('div_List');
const code = document.getElementById('code');
fetch(url)
	.then(function(res) {
		code.innerHTML = res.status;
		if (res.ok) {
			return res.json();
		}
	})
	.then(function(value) {
		for (let i = 0; i < value.data.length; i++) {
			var card = `             
        <div class="card m-5" style="width:20rem;">
            <img src="${value.data[i].avatar}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${value.data[i].first_name} - ${value.data[i].last_name}</p>
            <p class="card-text">${value.data[i].email}</p>
                <div class="row ">
                    <a type="submit" onclick="Update()" href="register-update.html?user=${value.data[i].id}" id="submitPut" class="btn btn-dark col-4 mx-auto btn-sm">Modifier</a>
                    <button id="SubmitDel" type="submit" onclick="ClickDelete();" class="btn btn-primary col-4 mx-auto btn-sm">Supprimer</button>

                </div>
            </div>
        </div>     
       `;
			div_List.insertAdjacentHTML('afterbegin', card);
		}
	})

	.catch(function(err) {
		// Une erreur est survenue
	});

// post //

const Form = document.getElementById('Form');
Form.addEventListener('submit', (event) => {
	event.preventDefault();

	const dataForm = {
		first_name: document.getElementById('first_Name').value,
		last_name: document.getElementById('last_Name').value,
		email: document.getElementById('email').value,
		mdp: document.getElementById('mdp').value,
		avatar: document.getElementById('avatar').value,
	};

	const options = {
		method: 'POST',
		body: JSON.stringify(dataForm),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	fetch('https://reqres.in/api/users', options)
		.then((res) => {
			if (res.ok) {
				return (code.innerHTML = res.status);
			} else {
				return Promise.reject('Une erreur est survenue');
			}
		})
		.then((res) => console.log(res));
});

// delete

const myDataObject = document.getElementById('SubmitDel');

function ClickDelete(myDataObject) {
	fetch(url + myDataObject, {
		method: 'DELETE',
	}).then((res) => (code.innerHTML = res.status));
}

// put //

function Update() {
	const user = {
		first_name: 'John',
		last_name: 'Lilly',
		job_title: 'Software Engineer',
	};

	const options = {
		method: 'PUT',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	fetch('https://reqres.in/api/users/2', options)
		.then((res) => {
			if (res.ok) {
				return (code.innerHTML = res.status);
			} else {
				return Promise.reject('Une erreur est survenue');
			}
		})
		.then((res) => console.log(res));
}

// token

function login() {
	event.preventDefault();

	const dataLog = {
		email: document.getElementById('email').value,
		password: document.getElementById('mdp').value,
	};

	const option = {
		method: 'POST',
		body: JSON.stringify(dataLog),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	fetch('https://reqres.in/api/register', option)
		.then((res) => res.json())
		.then((data) => localStorage.setItem('dataLog', JSON.stringify(data.token)));

	let tokenactual = JSON.parse(localStorage.getItem('dataLog'));
	document.getElementById('token').innerHTML = tokenactual;
}
