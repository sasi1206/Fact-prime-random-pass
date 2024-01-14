//Getting element

const input = document.getElementById("input");
    input.addEventListener("click",()=>
    {
        document.getElementById("input").classList.add("c");
    });
    
    document.getElementById("form").addEventListener("submit",eventHandler);
    function eventHandler(event)
    {
        event.preventDefault();
        console.log("Event started");
        function get()
        {
            let value = input.value;
            value = Number(value);
            return value;
        }
        prime(get);
    }

//Functions

function fact(n)
{
    let fact = 1;
    let size = n();
    for(i=1;i<=size;i++)
    {
        fact = fact * i;
        document.getElementById("div").textContent = `Factorial of ${size} = ${fact}`;
    }
}

function prime(n)
{
    let size = n();
    for(let i=2;i<=size;i++)
    {
        let flag = true;
        for(let j=2;j<i;j++)
        {
            if(i%j==0)
            {
                flag = false;
                break;
            }
        }
        if(flag)
        {
            console.log(`${i} is prime`);
        }
        else
        {
            console.log(`${i} is not prime`);
        }
    }
}

function password()
{
    function alpha()
    {
        let pass = '';
        const string = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
        for(let i = 0;i<=10;i++)
        {
            let gpass = (Math.floor(Math.random() * string.length) + 1);
            let cpass = string.charAt(gpass);
            pass = pass + cpass;
        }
        return pass;
    }
    let number = Math.random(0 * 8);
    let array = alpha() + number;
    let cpassword = '';
    for(let i=0;i<=10;i++)
    {
        let garray = (Math.floor(Math.random() * array.length) + 1);
        cpass = array.charAt(garray);
        cpassword = cpassword + cpass;
    }
    document.getElementById("password").textContent = `Your random password is ${cpassword}`;
}

document.getElementById("pass").addEventListener("click",(e)=>
{
    e.preventDefault();
    password();
});

