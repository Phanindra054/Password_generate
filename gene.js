
function generate(){
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number="0123456789";
    let symbol="~!@#$%^&*()_+-=[]'><";
    var password="";
    
    let textbox=document.getElementById("txt");
    let up=document.getElementById("up");
    let num=document.getElementById("num");
    let sm=document.getElementById("sm");
    let sy=document.getElementById("sy");
    let numb=document.getElementById("numb");
    var x=Number(numb.value);
    
        while(x>0)
        {
            if(up.checked)
            {
                password+=upper[Math.floor(Math.random() * upper.length)];
                x--;
            }
            if(num.checked)
            {
                password+=number[Math.floor(Math.random() * number.length)];
                x--;
            }
            if(sm.checked)
            {
                password+=lower[Math.floor(Math.random() * lower.length)];
                x--;
            }
            if(sy.checked)
            {
                password+=symbol[Math.floor(Math.random() * symbol.length)];
                x--;
            }
        }
        textbox.value=password;
        
   
};