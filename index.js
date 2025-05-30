document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();});
    document.getElementById('btn').addEventListener('click',function(){
    var l=document.getElementById("l").value;
    var b=document.getElementById("b").value;
    var area=(l*b);
    document.getElementById("result").innerText=area.toFixed(2).toString();
})