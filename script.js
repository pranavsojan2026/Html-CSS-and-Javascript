function bclick(val)
{
    document.getElementById("display").value=document.getElementById("display").value+val
}
function cleardisplay()
{
    document.getElementById("display").value=""
}
function equalclick()
{
    var text=document.getElementById("display").value
    var result=eval(text)//eval() function evaluates the operands and operators
    document.getElementById("display").value=result
}
