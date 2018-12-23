let checkLogin =(email,password,allUsers) =>
{
	let isUserFound = false
	let passwordCorrect = false
	for(currentUser of allUsers)
	{
		console.log(currentUser)
		if(currentUser['email'] == email)
		{
			if(currentUser['password'] == password)
			{
				isUserFound = true
				passwordCorrect = true
				break
			}
			else
			{
				isUserFound = true
				passwordCorrect = false
				break
			}
		}
		else
		{
			isUserFound = false
		}
	}
	if(isUserFound == true && passwordCorrect == true)
	{
		console.log(`You are logged in`)
	}
	else if(isUserFound == true && passwordCorrect == false)
	{
		console.log(`You have provided incorrect password`)
	}
	else
	{
		console.log(`No user with this email account`)
	}
}

/* ------------------------------------------------------------------------------------------------------------------------ */

let bubble_Sort = (...a) =>
{
		const swapp;
		let n = a.length - 1;
		let x = a;
		do
		{
			swapp = false;
			for(let i of n)
			{
				if(x[i] < x[i+1])
				{
					let temp = x[i];
					x[i] = x[i+1];
					x[i+1] = temp;
					swapp = true;
				}
			}
			n--;
		}
		while(swapp);
		return x;
}