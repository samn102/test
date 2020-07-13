document.getElementById('check').onclick = function(){
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;

	if (login == 'dmitry' && password== '123')
		alert('Вы успешно вошли!');
	
	else 
		alert('Ошибка! Повторите попытку.')
}