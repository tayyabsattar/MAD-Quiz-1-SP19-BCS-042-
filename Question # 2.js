let palindrome=(str)=>
{
    const arr=str.split('');
    const reverse=arr.reverse();
    const revStr=reverse.join('');
    
    if(str===revStr)
    {
        console.log('String is a palindrome');
    }
    else
    {
        console.log('String is not  palindrome')
    }
}

palindrome('abbaababba');