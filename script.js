let x = 10;
let y = 10;
let color = "black ";
let shadow = "";
function getmouseposition(event){
    let mouseX =  event.clientX - ((window.innerWidth/2) - 125);
    let mouseY =  event.clientY- (window.innerHeight - 250);
    let shadowX = 10;
    let shadowY = 10;
    if(mouseX > 50) shadowX = -10;
    if(mouseX < -50) shadowX = 10;
    if(mouseY > 50) shadowY = -10;
    if(mouseY < -50) shadowY = 10;
    document.getElementById("contact").style.boxShadow = color + (shadowX) + "px " + (shadowY) + "px " + shadow;

}   


op1 = 0;
op2 = 0;
op3 = 0;
op4 = 0;
function func1(){
    inter = setInterval(() => {
        document.getElementById("frontend").style.boxShadow = "rgba(48, 173, 67, 0.4) 5px 5px, rgba(48, 173, 67, "+ op1 +") 10px 10px, rgba(48, 173, 67, "+ op2 +") 15px 15px, rgba(48, 173, 67, "+ op3 +")20px 20px, rgba(48, 173, 67, "+ op4 +") 25px 25px";
        /* box-shadow: rgba(48, 173, 67, 0.4) 5px 5px, rgba(48, 173, 67, 0.3) 10px 10px, rgba(48, 173, 67, 0.2) 15px 15px, rgba(48, 173, 67, 0.1)20px 20px, rgba(48, 173, 67, 0.05) 25px 25px; */
        op1 += 0.01;
        if(op1 >= 0.3){
            op1 = 0.3;
            op2 += 0.01;
            if(op2 >= 0.2){
                op2 = 0.2;
                op3 += 0.01;
                if(op3 >= 0.1){
                    op3 = 0.1;
                    op4 += 0.01;
                    if(op4 >= 0.05){
                        op4 = 0.05;
                        clearInterval(inter);
                        func2();
                    }
                }
            }
        }
    }, 30);  
}
function func2(){
    inter2 = setInterval(() => {
        /* box-shadow: rgba(48, 173, 67, 0.4) 5px 5px, rgba(48, 173, 67, 0.3) 10px 10px, rgba(48, 173, 67, 0.2) 15px 15px, rgba(48, 173, 67, 0.1)20px 20px, rgba(48, 173, 67, 0.05) 25px 25px; */
        document.getElementById("frontend").style.boxShadow = "rgba(48, 173, 67, 0.4) 5px 5px, rgba(48, 173, 67, "+ op1 +") 10px 10px, rgba(48, 173, 67, "+ op2 +") 15px 15px, rgba(48, 173, 67, "+ op3 +")20px 20px, rgba(48, 173, 67, "+ op4 +") 25px 25px";
        op4 -= 0.01;
        if(op4 <= 0){
            op4 = 0;
            op3 -= 0.01;
            if(op3 <= 0){
                op3 = 0;
                op2 -= 0.01;
                if(op2 <= 0){
                    op2 = 0;
                    op1 -= 0.01;
                    if(op1 <= 0){
                        op1 = 0;
                        clearInterval(inter2);
                        func1();
                    }
                }
            }
        }
    }, 30);  
}
function func12(){
    inter3 = setInterval(() => {
        document.getElementById("backend").style.boxShadow = "rgba(48, 173, 67, 0.4) 5px 5px, rgba(48, 173, 67, "+ op1 +") 10px 10px, rgba(48, 173, 67, "+ op2 +") 15px 15px, rgba(48, 173, 67, "+ op3 +")20px 20px, rgba(48, 173, 67, "+ op4 +") 25px 25px";
        /* box-shadow: rgba(48, 173, 67, 0.4) 5px 5px, rgba(48, 173, 67, 0.3) 10px 10px, rgba(48, 173, 67, 0.2) 15px 15px, rgba(48, 173, 67, 0.1)20px 20px, rgba(48, 173, 67, 0.05) 25px 25px; */
        op1 += 0.01;
        if(op1 >= 0.3){
            op1 = 0.3;
            op2 += 0.01;
            if(op2 >= 0.2){
                op2 = 0.2;
                op3 += 0.01;
                if(op3 >= 0.1){
                    op3 = 0.1;
                    op4 += 0.01;
                    if(op4 >= 0.05){
                        op4 = 0.05;
                        clearInterval(inter3);
                        func22();
                    }
                }
            }
        }
    }, 30);  
}
function func22(){
    inter4 = setInterval(() => {
        /* box-shadow: rgba(48, 173, 67, 0.4) 5px 5px, rgba(48, 173, 67, 0.3) 10px 10px, rgba(48, 173, 67, 0.2) 15px 15px, rgba(48, 173, 67, 0.1)20px 20px, rgba(48, 173, 67, 0.05) 25px 25px; */
        document.getElementById("backend").style.boxShadow = "rgba(48, 173, 67, 0.4) 5px 5px, rgba(48, 173, 67, "+ op1 +") 10px 10px, rgba(48, 173, 67, "+ op2 +") 15px 15px, rgba(48, 173, 67, "+ op3 +")20px 20px, rgba(48, 173, 67, "+ op4 +") 25px 25px";
        op4 -= 0.01;
        if(op4 <= 0){
            op4 = 0;
            op3 -= 0.01;
            if(op3 <= 0){
                op3 = 0;
                op2 -= 0.01;
                if(op2 <= 0){
                    op2 = 0;
                    op1 -= 0.01;
                    if(op1 <= 0){
                        op1 = 0;
                        clearInterval(inter4);
                        func12();
                    }
                }
            }
        }
    }, 30);  
}
func1();
func12();