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
    var result=eval(text)
    document.getElementById("display").value=result
}