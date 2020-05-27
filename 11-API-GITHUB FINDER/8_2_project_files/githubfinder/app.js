// Init Github
const github = new Github();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
	// Get input text
	const userText = e.target.value;

	if (userText !== '') {
		// Make http call
		//1 Test if the value is what we get
		// console.log(userText);
		github.getUser(userText).then((data) => {
			//check the user data
			// console.log(data);
			if (data.profile.message === 'Not Found') {
				// Show alert
			} else {
				// Show profile
			}
		});
	} else {
		// Clear profile
	}
});
