/**
 * Created by Andrew on 12/16/2015.
 */

function rigthButton(num) {
    //either pass the number or just get the id
    num = num >>> 1;
}

function leftButton(num) {
    //either pass the number or just get the id
    num = num << 1;
}

function upButton(num) {
    //either pass the number or just get the id
    var temp = parseInt(num, 2);
    temp += 1;
    num = temp.toString(2);
}

function downButton(num) {
    //either pass the number or just get the id
    var temp = parseInt(num, 2);
    temp = temp - 1;
    num = temp.toString(2);
}

function Bbutton(){
    //get the numbers from the id for both numbers
    num1 & num2;
    //display a text box to show the result. get the id of the text box, set the display attribute to not hidden
}

function Abutton() {
    //get the numbers from the id for both numbers
    num1 | num2;

}