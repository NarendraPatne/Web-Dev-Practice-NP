function access()
{
    let x=4,y=6;
    function innerA()
    {
        console.log(x,y);
    };
    innerA();
};
access();