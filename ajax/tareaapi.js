fetch("https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/john@gmail.com", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "135b802582mshc06e1c2cfe168d6p13a057jsn8d2335e3bfae",
		"x-rapidapi-host": "pozzad-email-validator.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});