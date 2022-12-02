function getPassword()
{
    const chars = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789~!@#$%&*_+=<>?/|";

    let passwordLength = 10;
    let password = '';

    for(let i = 0; i < passwordLength; i++)
    {
        let randomNumber = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNumber, randomNumber + 1);

    }
    document.getElementById('password').value = password;
}

document.querySelector('#btn1').onclick = function()
{
    var Gpass = document.querySelector('.Gpass').value,
        Epass = document.querySelector('.Epass').value;

        if(Epass == "")
        {
            alert("Field cannot be empty...");
        }
        else if(Gpass != Epass)
        {
            alert("Password didn't match, Try again.");
        }
        else if(Gpass == Epass)
        {
            alert("Password Match")
        }
        return true;
}