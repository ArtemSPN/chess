const switch_time = document.querySelector(".img_time");
const board = document.querySelector(".board");
const teamTime = document.querySelector(".team_time");
let boardArray = new Array(8);
const scoreAreaW = document.querySelector("._w");
const scoreAreaB = document.querySelector("._b");
const scoreB = document.querySelector(".b_score");
const scoreW = document.querySelector(".w_score");
const whiteTime = document.querySelector(".white_time");
const blackTime = document.querySelector(".black_time");

const setItem1 = document.querySelector(".set_item_1");
const setItem2 = document.querySelector(".set_item_2");

let sc_b = 0, sc_w = 0;

let pawn = {     
    rang: "pawn",  
    point: 10,
    src: "pawn.png",
    position_x_change: 1,
    position_y_change: 1,
    team: "white", 
    canMove: true
};

let elephant = {     
    rang: "elephant",  
    point: 30,
    src: "elephant.png",
    position_x_change: 1,
    position_y_change: 1,
    team: "white", 
    canMove: true
};

let horse = {     
    rang: "horse",  
    point: 30,
    src: "horse.png",
    position_x_change: 2,
    position_y_change: 1,
    team: "white", 
    canMove: true
};

let rook = {     
    rang: "rook",  
    point: 50,
    src: "rook.png",
    position_x_change: 1,
    position_y_change: 1,
    team: "white", 
    canMove: true
};

let queen = {     
    rang: "queen",  
    point: 90,
    src: "queen.png",
    position_x_change: 1,
    position_y_change: 1,
    team: "white", 
    canMove: true
};

let king = {     
    rang: "king",  
    point: 900,
    src: "king.png",
    position_x_change: 1,
    position_y_change: 1,
    team: "white", 
    canMove: true
};
//////////////////////////////
let flag = false;
function rotated(){
    for(let i = 0;i < 8;i++){
        for(let j = 0;j < 8;j++){
        if(boardArray[i][j].children.length == 1){
            if(changeTeam(0) == "white") boardArray[i][j].classList.add("rotated");
            if(changeTeam(0) == "black") boardArray[i][j].classList.remove("rotated");
        }
        } 
    }
    if(changeTeam(0) == "white") board.classList.add("rotated");
    if(changeTeam(0) == "black") board.classList.remove("rotated");
    flag = !flag;
}
////////settings//////////////
setItem1.addEventListener("click", () =>{
    document.querySelector(".setting_popup").style.display = "block";
    document.querySelector(".bg").style.display = "block";
    document.querySelector(".bg").addEventListener("click", () =>{
        document.querySelector(".setting_popup").style.display = "none";
        document.querySelector(".bg").style.display = "none";
    });
});

const changeColor1 = document.querySelector(".cc_item_1");
const changeColor2 = document.querySelector(".cc_item_2");
const changeColor3 = document.querySelector(".cc_item_3");

changeColor1.addEventListener("click", () =>{
    cangeColorCell("fff9ce","6ad275");
});

changeColor2.addEventListener("click", () =>{
    cangeColorCell("DBDEDA","4C4F4D");
});

changeColor3.addEventListener("click", () =>{
    cangeColorCell("846C43","675126");
});

document.querySelector('.cf_item_1').addEventListener("click", () =>{
    for(let i = 0;i < 8;i++){
        for(let j = 0;j < 8;j++){
            if(boardArray[i][j].children.length == 1){
                if(boardArray[i][j].children[0].src.indexOf('pawn') != -1 && i < 4) boardArray[i][j].children[0].src = '/white/pawn.png';
                if(boardArray[i][j].children[0].src.indexOf('horse')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/horse.png';
                if(boardArray[i][j].children[0].src.indexOf('king')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/king.png';
                if(boardArray[i][j].children[0].src.indexOf('queen')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/queen.png';
                if(boardArray[i][j].children[0].src.indexOf('rook')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/rook.png';
                if(boardArray[i][j].children[0].src.indexOf('elephant')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/elephant.png';

                if(boardArray[i][j].children[0].src.indexOf('pawn')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/pawn.png';
                if(boardArray[i][j].children[0].src.indexOf('horse')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/horse.png';
                if(boardArray[i][j].children[0].src.indexOf('king')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/king.png';
                if(boardArray[i][j].children[0].src.indexOf('queen')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/queen.png';
                if(boardArray[i][j].children[0].src.indexOf('rook')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/rook.png';
                if(boardArray[i][j].children[0].src.indexOf('elephant')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/elephant.png';
            }
        }
    }
});

document.querySelector('.cf_item_2').addEventListener("click", () =>{
    for(let i = 0;i < 8;i++){
        for(let j = 0;j < 8;j++){
            if(boardArray[i][j].children.length == 1){
                if(boardArray[i][j].children[0].src.indexOf('pawn')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/pawn2.png';
                if(boardArray[i][j].children[0].src.indexOf('horse')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/horse2.png';
                if(boardArray[i][j].children[0].src.indexOf('king')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/king2.png';
                if(boardArray[i][j].children[0].src.indexOf('queen') != -1 && i < 4) boardArray[i][j].children[0].src = '/white/queen2.png';
                if(boardArray[i][j].children[0].src.indexOf('rook')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/rook2.png';
                if(boardArray[i][j].children[0].src.indexOf('elephant')!= -1 && i < 4) boardArray[i][j].children[0].src = '/white/elephant2.png';

                if(boardArray[i][j].children[0].src.indexOf('pawn')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/pawn2.png';
                if(boardArray[i][j].children[0].src.indexOf('horse')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/horse2.png';
                if(boardArray[i][j].children[0].src.indexOf('king')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/king2.png';
                if(boardArray[i][j].children[0].src.indexOf('queen')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/queen2.png';
                if(boardArray[i][j].children[0].src.indexOf('rook')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/rook2.png';
                if(boardArray[i][j].children[0].src.indexOf('elephant')!= -1 && i > 4) boardArray[i][j].children[0].src = '/black/elephant2.png';
            }
        }
    }
});

function cangeColorCell(light, dark){
    for(let i = 0;i < 8;i++){
        for(let j = 0;j < 8;j++){
            if(boardArray[i][j].classList.contains("light")){
                boardArray[i][j].style.backgroundColor = "#" + light;
            }
            if(boardArray[i][j].classList.contains("dark")){
                boardArray[i][j].style.backgroundColor = "#" + dark;
            }
        }
    }
}

document.querySelector(".close_btn").addEventListener("click", () =>{
    if(document.querySelector(".setting_popup").style.display == "block"){
        document.querySelector(".setting_popup").style.display = "none";
        document.querySelector(".bg").style.display = "none";
    }
});
///////////play///////////
setItem2.addEventListener("click", () =>{
    document.querySelector(".start_popup").style.display = "block";
    document.querySelector(".bg").style.display = "block";
    document.querySelector(".bg").addEventListener("click", () =>{
        document.querySelector(".start_popup").style.display = "none";
        document.querySelector(".bg").style.display = "none";
    });
    document.querySelector(".time_item_1").addEventListener("click", () =>{
        if(document.querySelector(".time_item_2").classList.contains("active"))
            document.querySelector(".time_item_2").classList.remove("active");
        if(document.querySelector(".time_item_3").classList.contains("active"))
            document.querySelector(".time_item_3").classList.remove("active");
        if(document.querySelector(".time_item_4").classList.contains("active"))
            document.querySelector(".time_item_4").classList.remove("active");
        document.querySelector(".time_item_1").classList.add("active");
    });
    document.querySelector(".time_item_2").addEventListener("click", () =>{
        if(document.querySelector(".time_item_1").classList.contains("active"))
            document.querySelector(".time_item_1").classList.remove("active");
        if(document.querySelector(".time_item_3").classList.contains("active"))
            document.querySelector(".time_item_3").classList.remove("active");
        if(document.querySelector(".time_item_4").classList.contains("active"))
            document.querySelector(".time_item_4").classList.remove("active");
        document.querySelector(".time_item_2").classList.add("active");
    });
    document.querySelector(".time_item_3").addEventListener("click", () =>{
        if(document.querySelector(".time_item_2").classList.contains("active"))
            document.querySelector(".time_item_2").classList.remove("active");
        if(document.querySelector(".time_item_1").classList.contains("active"))
            document.querySelector(".time_item_1").classList.remove("active");
        if(document.querySelector(".time_item_4").classList.contains("active"))
            document.querySelector(".time_item_4").classList.remove("active");
        document.querySelector(".time_item_3").classList.add("active");
    });
    document.querySelector(".time_item_4").addEventListener("click", () =>{
        if(document.querySelector(".time_item_2").classList.contains("active"))
            document.querySelector(".time_item_2").classList.remove("active");
        if(document.querySelector(".time_item_3").classList.contains("active"))
            document.querySelector(".time_item_3").classList.remove("active");
        if(document.querySelector(".time_item_1").classList.contains("active"))
            document.querySelector(".time_item_1").classList.remove("active");
        document.querySelector(".time_item_4").classList.add("active");
    });
});

document.querySelector(".start_btn").addEventListener("click", () =>{
    const timeChange = document.querySelector(".time_change");
    let check;
    let i;
    for(i = 0;i < 4;i++){
        if(timeChange.children[i].classList.contains("active")){
            check = 1;
            break;
        }
    }
    if(check == 1){
        document.querySelector(".start_popup").style.display = "none";
        document.querySelector(".bg").style.display = "none";
        changeTeam(0);
        switch(i) {
            case 0:{
                time(0,60);
                setInterval(time,1000,1,60);
                break;
            }
            case 1:{
                time(0,180);
                setInterval(time,1000,1,180);
                break;
            }
            case 2:{
                time(0,300);
                setInterval(time,1000,1,300);
                break;
            }
            case 3:{
                time(0,600);
                setInterval(time,1000,1,600);
                break;
            }
            default: console.log("error");
        }  
        rotated();
    }   
});



///////////////////////
let teamT = true; 
function changeTeam(check){ 
    let nowMove = (teamT)?"white":"black";
    if(check == 1){
        teamT = !teamT;
        
    }
    teamTime.innerHTML = `Ход команды "${nowMove}"`
    return nowMove;
}


function endMotion(check){
    if(check == 1){
        for(i = 0; i < 8; i++){
            for(j = 0; j < 8; j++){
                if(boardArray[i][j].classList.contains('active')){
                    boardArray[i][j].classList.add('active');
                }
                if(boardArray[i][j].classList.contains('shax')){
                    boardArray[i][j].classList.remove('shax');
                }
            }
        }
        let circles = document.querySelectorAll(".circle");
        for(i = 0;i < circles.length;i++){
            circles[i].remove();
        }
        let Kill = document.querySelectorAll(".canKill");
        for(i = 0;i < Kill.length;i++){
            Kill[i].remove();
        }
        changeTeam(1);
        checkKing();
        rotated();
    }
}

/////////Рисовка доски и фигур///////////////
printBoard();
printPawn();
printRook();
printHorse();
printElephant();
printQueen();
printKing();

function printBoard(){
    chColor = false;
    for(i = 0; i < 8; i++){
        chColor = !chColor;
        boardArray[i] = new Array(8);
        for(j = 0; j < 8; j++){
            let cell = document.createElement('div');
            if(chColor == true)
                cell.classList.add("light");
            else
                cell.classList.add("dark");
            board.appendChild(cell);
            boardArray[i][j] = cell;
            cell.addEventListener("click", get_active)
            chColor = !chColor;
        }
    }
}

function printFigurines(x,y,rang,color){
    let figure = document.createElement('img');
    figure.src = '/' + color + '/' + rang.src;
    figure.classList.add("img_figure")
    boardArray[x][y].appendChild(figure);
}

function printFigurinesScore(rang,color){
    let figure = document.createElement('img');
    figure.src = '/' + color + '/' + rang.src;
    figure.classList.add("img_figure_score");
    if(changeTeam(0) == "white"){
        scoreAreaW.appendChild(figure);
    }
    else{
        scoreAreaB.appendChild(figure);
    }


}
function printPawn(){
    //if(){ Для смены цвета фигуры, при выборе стороны
        for(i = 0;i < 8;i++){
            printFigurines(1,i,pawn,"white");
            printFigurines(6,i,pawn,"black");
        }
    //}
}

function printRook(){
    //if(){ Для смены цвета фигуры, при выборе стороны
        printFigurines(0,0,rook,"white");
        printFigurines(0,7,rook,"white");
        printFigurines(7,0,rook,"black");
        printFigurines(7,7,rook,"black");
    //}
}

function printHorse(){
    //if(){ Для смены цвета фигуры, при выборе стороны
        printFigurines(0,1,horse,"white");
        printFigurines(0,6,horse,"white");
        printFigurines(7,1,horse,"black");
        printFigurines(7,6,horse,"black");
    //}
}

function printElephant(){
    //if(){ Для смены цвета фигуры, при выборе стороны
        printFigurines(0,2,elephant,"white");
        printFigurines(0,5,elephant,"white");
        printFigurines(7,2,elephant,"black");
        printFigurines(7,5,elephant,"black");
    //}
}

function printQueen(){
    //if(){ Для смены цвета фигуры, при выборе стороны
        printFigurines(0,3,queen,"white");
        printFigurines(7,3,queen,"black");
    //}
}

function printKing(){
    //if(){ Для смены цвета фигуры, при выборе стороны
        printFigurines(0,4,king,"white");
        printFigurines(7,4,king,"black");
    //}
}
//////////////////////////////////////////

function time(x,y){
    if(x == 0){
        let whiteT = y;
        let blackT = y;
        whiteTime.innerHTML = `${whiteT}`;
        blackTime.innerHTML = `${blackT}`;
    }
    else if(x == 1){
        if(changeTeam(0) == "white"){
            if(blackTime.classList.contains("_active"))
                blackTime.classList.remove("_active");
            whiteTime.classList.add("_active");
            let whiteT = decrementWhite(Number(whiteTime.textContent));
            if(whiteT == 0){
                document.querySelector(".win").innerHTML = `Победа за черными!!!`;
                endGame();
            }
            if(whiteT == NaN)  whiteTime.innerHTML = `---`;
            if(whiteT != -1 && whiteTime.textContent != "---")
            whiteTime.innerHTML = `${whiteT}`;
            }
        if(changeTeam(0) == "black"){
            if(whiteTime.classList.contains("_active"))
                whiteTime.classList.remove("_active");
            blackTime.classList.add("_active");
            let blackT = decrementBlack(Number(blackTime.textContent));
            if(blackT == 0){
                document.querySelector(".win").innerHTML = `Победа за белыми!!!`;
                endGame();
            }
            if(blackT == NaN)  blackTime.innerHTML = `---`;
            if(blackT != -1 && blackTime.textContent != "---")
            blackTime.innerHTML = `${blackT}`;
        }  
    }
    else if(x == 2){
        clearInterval(time);
        if(blackTime.classList.contains("_active"))
            blackTime.classList.remove("_active");
        if(whiteTime.classList.contains("_active"))
            whiteTime.classList.remove("_active");
            whiteTime.innerHTML = `---`;
            blackTime.innerHTML = `---`;
    }
}

function decrementWhite(x){
    x--;
    return x;
}

function decrementBlack(x){
    x--;
    return x;
}

//////Логика движений фигур////////////////
function get_active(){
    let check = 0;
    if(whiteTime.classList.contains("_active")) check++;
    if(blackTime.classList.contains("_active")) check++;
    if(this.children.length > 0 && this.children[0].src != undefined && this.children[0].src.split("/")[3] ==  changeTeam(0) && check == 1){
        for(let i =0;i < 8;i++){
            for(let j =0;j < 8;j++){
                if(boardArray[i][j].classList.contains('active')){
                    boardArray[i][j].classList.remove('active');
                }
            }
         }
        this.classList.add('active');
        //console.log(this.children[0]);
        let x = i, y = j;
        for(let i =0;i < 8;i++){
            for(let j =0;j < 8;j++){
                if(boardArray[i][j].classList.contains('active')){
                    x = i;
                    y = j;
                    console.log(`x - ${x}, y - ${y}`);
                    break;
                } 
            }
        }
        let circles = document.querySelectorAll(".circle");
                for(i = 0;i < circles.length;i++){
                    circles[i].remove();
                }
        let Kill = document.querySelectorAll(".canKill");
                for(i = 0;i < Kill.length;i++){
                    Kill[i].remove();
                }
        let color = this.children[0].src.split("/")[3];//разбиваю ссылку и получаю значение цвета
        let activeFigure = this.children[0].src.split("/")[4];//разбиваю ссылку и получаю активную фигуру
        // console.log(color);
        // console.log(activeFigure.split(".")[0]);
        let fig = activeFigure.split(".")[0];
        switch(fig) {
            case "pawn":{
                movePawn(x,y,pawn,color);
                break;
            }
            case "elephant":{
                moveElephant(x,y,elephant,color);
                break;
            }
            case "horse":{
                moveHorse(x,y,horse,color);
                break;
            }
            case "king":{
                moveKing(x,y,king,color);
                break;
            }
            case "queen":{
                moveQueen(x,y,queen,color);
                break;
            }
            case "rook":{
                moveRook(x,y,rook,color);
                break;
            }
            default: console.log("error");
        }
    }
}

function movePawn(x,y,fig,color){
    console.log(changeTeam(0))
    let check = 1;
    if(color == "black" && color == changeTeam(0)){
        if(boardArray[x - fig.position_x_change][y].children.length == 0){
            if(x - fig.position_x_change == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x - fig.position_x_change][y].appendChild(circle);
                circle.addEventListener("click", () =>{
                    document.querySelector(".change_figure1").style.display = "block";
                    document.querySelector(".bg").style.display = "block";
                    document.querySelector(".horse").addEventListener("click", () =>{
                        printFigurines(x - fig.position_x_change,y,horse,color);
                        document.querySelector(".change_figure1").style.display = "none";
                        document.querySelector(".bg").style.display = "none";
                    });
                    document.querySelector(".queen").addEventListener("click", () =>{
                        printFigurines(x - fig.position_x_change,y,queen,color);
                        document.querySelector(".change_figure1").style.display = "none";
                        document.querySelector(".bg").style.display = "none";
                    });
                    document.querySelector(".rook").addEventListener("click", () =>{
                        printFigurines(x - fig.position_x_change,y,rook,color);
                        document.querySelector(".change_figure1").style.display = "none";
                        document.querySelector(".bg").style.display = "none";
                    });
                    document.querySelector(".elephant").addEventListener("click", () =>{
                        printFigurines(x - fig.position_x_change,y,elephant,color);
                        document.querySelector(".change_figure1").style.display = "none";
                        document.querySelector(".bg").style.display = "none";
                    });
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    endMotion(1);           
                });
            }
            else{
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x - fig.position_x_change][y].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x - fig.position_x_change,y,pawn,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    let coordX = 8 - x-fig.position_x_change;
                    let coordY;
                    switch (y) {
                        case 0:{
                            coordY = "A";
                            break;
                        }
                        case 1:{
                            coordY = "B";
                            break;
                        }
                        case 2:{
                            coordY = "C";
                            break;
                        }
                        case 3:{
                            coordY = "D";
                            break;
                        }
                        case 4:{
                            coordY = "E";
                            break;
                        }
                        case 5:{
                            coordY = "F";
                            break;
                        }
                        case 6:{
                            coordY = "G";
                            break;
                        }
                        case 7:{
                            coordY = "H";
                            break;
                        }
                        default: console.log("error");
                        }
                        let coord = coordY + "-" + coordX;
                        historyList(fig.rang,coord,"---");
                        endMotion(1);           
                });
                if(x == 6){
                    if(boardArray[x - fig.position_x_change*2][y].children.length == 0){
                        let circle = document.createElement('div');
                        circle.classList.add("circle");
                        boardArray[x - fig.position_x_change*2][y].appendChild(circle);
                        circle.addEventListener("click", () =>{
                            printFigurines(x - fig.position_x_change*2,y,pawn,color);
                            boardArray[x][y].children[0].remove();
                            circle.remove();
                            boardArray[x][y].classList.remove('active');
                            let coordX = 8 - x-fig.position_x_change*2;
                    let coordY;
                    switch (y) {
                        case 0:{
                            coordY = "A";
                            break;
                        }
                        case 1:{
                            coordY = "B";
                            break;
                        }
                        case 2:{
                            coordY = "C";
                            break;
                        }
                        case 3:{
                            coordY = "D";
                            break;
                        }
                        case 4:{
                            coordY = "E";
                            break;
                        }
                        case 5:{
                            coordY = "F";
                            break;
                        }
                        case 6:{
                            coordY = "G";
                            break;
                        }
                        case 7:{
                            coordY = "H";
                            break;
                        }
                        default: console.log("error");
                        }
                        let coord = coordY + "-" + coordX;
                        historyList(fig.rang,coord,"---");
                            endMotion(1);           
                        });
                    }
                }
            }
        }
        if(x > 0){
            if(y - 1 >= 0 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length != 0  && boardArray[x - fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x - fig.position_x_change,y - fig.position_y_change,color,fig);
            }
            if(y + 1 <= 7 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length != 0  && boardArray[x - fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x - fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
    }
    else if(color == "white" && color == changeTeam(0)){
        if(boardArray[x + fig.position_x_change][y].children.length == 0){
            if(x + fig.position_x_change == 7){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x + fig.position_x_change][y].appendChild(circle);
                circle.addEventListener("click", () =>{
                    document.querySelector(".change_figure2").style.display = "block";
                    document.querySelector(".bg").style.display = "block";
                    document.querySelectorAll(".horse")[1].addEventListener("click", () =>{
                        printFigurines(x + fig.position_x_change,y,horse,color);
                        document.querySelector(".change_figure2").style.display = "none";
                        document.querySelector(".bg").style.display = "none";
                    });
                    document.querySelectorAll(".queen")[1].addEventListener("click", () =>{
                        printFigurines(x + fig.position_x_change,y,queen,color);
                        document.querySelector(".change_figure2").style.display = "none";
                        document.querySelector(".bg").style.display = "none";
                    });
                    document.querySelectorAll(".rook")[1].addEventListener("click", () =>{
                        printFigurines(x + fig.position_x_change,y,rook,color);
                        document.querySelector(".change_figure2").style.display = "none";
                        document.querySelector(".bg").style.display = "none";
                    });
                    document.querySelectorAll(".elephant")[1].addEventListener("click", () =>{
                        printFigurines(x + fig.position_x_change,y,elephant,color);
                        document.querySelector(".change_figure2").style.display = "none";
                        document.querySelector(".bg").style.display = "none";
                    });
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    endMotion(1);           
                });
            }
            else{
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x + fig.position_x_change][y].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x + fig.position_x_change,y,pawn,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    let coordX = 8 - x-fig.position_x_change;
                    let coordY;
                    switch (y) {
                        case 0:{
                            coordY = "A";
                            break;
                        }
                        case 1:{
                            coordY = "B";
                            break;
                        }
                        case 2:{
                            coordY = "C";
                            break;
                        }
                        case 3:{
                            coordY = "D";
                            break;
                        }
                        case 4:{
                            coordY = "E";
                            break;
                        }
                        case 5:{
                            coordY = "F";
                            break;
                        }
                        case 6:{
                            coordY = "G";
                            break;
                        }
                        case 7:{
                            coordY = "H";
                            break;
                        }
                        default: console.log("error");
                        }
                        let coord = coordY + "-" + coordX;
                        historyList(fig.rang,coord,"---");
                    endMotion(1);          
                });
                if(x == 1){
                    if(boardArray[x + fig.position_x_change*2][y].children.length == 0){
                        let circle = document.createElement('div');
                        circle.classList.add("circle");
                        boardArray[x + fig.position_x_change*2][y].appendChild(circle);
                        circle.addEventListener("click", () =>{
                            printFigurines(x + fig.position_x_change*2,y,pawn,color);
                            boardArray[x][y].children[0].remove();
                            circle.remove();
                            boardArray[x][y].classList.remove('active');
                            let coordX = 8 - x-fig.position_x_change*2;
                    let coordY;
                    switch (y) {
                        case 0:{
                            coordY = "A";
                            break;
                        }
                        case 1:{
                            coordY = "B";
                            break;
                        }
                        case 2:{
                            coordY = "C";
                            break;
                        }
                        case 3:{
                            coordY = "D";
                            break;
                        }
                        case 4:{
                            coordY = "E";
                            break;
                        }
                        case 5:{
                            coordY = "F";
                            break;
                        }
                        case 6:{
                            coordY = "G";
                            break;
                        }
                        case 7:{
                            coordY = "H";
                            break;
                        }
                        default: console.log("error");
                        }
                        let coord = coordY + "-" + coordX;
                        historyList(fig.rang,coord,"---");
                            endMotion(1);           
                        });
                    }
                }
            }

        }
        if(x < 7){
            if(y - 1 >= 0 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length != 0 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x + fig.position_x_change,y - fig.position_y_change,color,fig);
            }
            if(y + 1 <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length != 0 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x + fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }

    }
}//vv

function moveElephant(x,y,fig,color){
    console.log(changeTeam(0));
    let circleArray1 = new Array();
    let circleArray2 = new Array();
    let circleArray3 = new Array();
    let circleArray4 = new Array();
    let x1 = x, y1 = y;
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    let check = 1;
    if(color == "black" && color == changeTeam(0)){
        if(y - fig.position_y_change > 7 || x - fig.position_x_change > 7 || x - fig.position_x_change < 0 || y - fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 0){
            p1++;
            let circle = document.createElement('div');
            circleArray1.push(circle);
            circle.classList.add("circle");
            circle.classList.add(`_${p1}`);
            boardArray[x - fig.position_x_change][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p11 = Number(circle.classList[1].split("_")[1]);
                printFigurines(x - fig.position_x_change*p11,y - fig.position_y_change*p11,elephant,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p11,y - fig.position_y_change*p11,"elephant");
                endMotion(1);           
            });
            if(y - fig.position_y_change >= 7 || x - fig.position_x_change >= 7 || x - fig.position_x_change <= 0 || y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
                y = y - fig.position_y_change;
            }
            
        }
        if(x - fig.position_x_change >= 0 && y - fig.position_y_change >= 0 && boardArray[x - fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x - fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        p1 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7 || x - fig.position_x_change > 7 || x - fig.position_x_change < 0 || y + fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 0){
            p2++;
            let circle = document.createElement('div');
            circleArray2.push(circle);
            circle.classList.add("circle");
            circle.classList.add(`_${p2}`);
            boardArray[x - fig.position_x_change][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p22 = Number(circle.classList[1].split("_")[1]);
                printFigurines(x - fig.position_x_change*p22,y + fig.position_y_change*p22,elephant,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                console.log(Number(circle.classList[1].split("_")[1]));
                prepListHG(x - fig.position_x_change*p22,y + fig.position_y_change*p22,"elephant");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7 || x - fig.position_x_change >= 7 || x - fig.position_x_change <= 0 || y + fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
                y = y + fig.position_y_change;
            }
        }
        if(x - fig.position_x_change >= 0 && y + fig.position_y_change <= 7 && boardArray[x - fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x - fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        p2 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change > 7 || x + fig.position_x_change > 7 || x + fig.position_x_change < 0 || y - fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 0){
            p3++;
            let circle = document.createElement('div');
            circleArray3.push(circle);
            circle.classList.add("circle");
            circle.classList.add(`_${p3}`);
            boardArray[x + fig.position_x_change][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p33 = Number(circle.classList[1].split("_")[1]);
                printFigurines(x + fig.position_x_change*p33,y - fig.position_y_change*p33,elephant,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p33,y - fig.position_y_change*p33,"elephant");
                endMotion(1);           
            });
            if(y - fig.position_y_change >= 7 || x + fig.position_x_change >= 7 || x + fig.position_x_change <= 0 || y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
                y = y - fig.position_y_change;
            }
        }
        if(x + fig.position_x_change <= 7 && y - fig.position_y_change >= 0 && boardArray[x + fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        p3 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7 || x + fig.position_x_change > 7 || x + fig.position_x_change < 0 || y + fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 0){
            p4++;
            let circle = document.createElement('div');
            circleArray4.push(circle);
            circle.classList.add("circle");
            circle.classList.add(`_${p4}`);
            boardArray[x + fig.position_x_change][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p44 = Number(circle.classList[1].split("_")[1]);
                printFigurines(x + fig.position_x_change*p44,y + fig.position_y_change*p44,elephant,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p44,y + fig.position_y_change*p44,"elephant");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7 || x + fig.position_x_change >= 7 || x + fig.position_x_change <= 0 || y + fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
                y = y + fig.position_y_change;
            }
        }
        if(x + fig.position_x_change <= 7 && y + fig.position_y_change <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        p4 = 0;
        x = x1;
        y = y1;
    }
    else if(color == "white" && color == changeTeam(0)){
        if(y - fig.position_y_change > 7 || x - fig.position_x_change > 7 || x - fig.position_x_change < 0 || y - fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 0){
            p1++;
            let circle = document.createElement('div');
            circleArray1.push(circle);
            circle.classList.add("circle");
            circle.classList.add(`_${p1}`);
            boardArray[x - fig.position_x_change][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p11 = Number(circle.classList[1].split("_")[1]);
                printFigurines(x - fig.position_x_change*p11,y - fig.position_y_change*p11,elephant,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p11,y - fig.position_y_change*p11,"elephant");
                endMotion(1);           
            });
            if(y - fig.position_y_change >= 7 || x - fig.position_x_change >= 7 || x - fig.position_x_change <= 0 || y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
                y = y - fig.position_y_change;
            }
            
        }
        if(x - fig.position_x_change >= 0 && y - fig.position_y_change >= 0 && boardArray[x - fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x - fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        p1 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7 || x - fig.position_x_change > 7 || x - fig.position_x_change < 0 || y + fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 0){
            p2++;
            let circle = document.createElement('div');
            circleArray2.push(circle);
            circle.classList.add("circle");
            circle.classList.add(`_${p2}`);
            boardArray[x - fig.position_x_change][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p22 = Number(circle.classList[1].split("_")[1]);
                printFigurines(x - fig.position_x_change*p22,y + fig.position_y_change*p22,elephant,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                console.log(Number(circle.classList[1].split("_")[1]));
                prepListHG(x - fig.position_x_change*p22,y + fig.position_y_change*p22,"elephant");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7 || x - fig.position_x_change >= 7 || x - fig.position_x_change <= 0 || y + fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
                y = y + fig.position_y_change;
            }
        }
        if(x - fig.position_x_change >= 0 && y + fig.position_y_change <= 7 && boardArray[x - fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x - fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        p2 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change > 7 || x + fig.position_x_change > 7 || x + fig.position_x_change < 0 || y - fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 0){
            p3++;
            let circle = document.createElement('div');
            circleArray3.push(circle);
            circle.classList.add("circle");
            circle.classList.add(`_${p3}`);
            boardArray[x + fig.position_x_change][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p33 = Number(circle.classList[1].split("_")[1]);
                printFigurines(x + fig.position_x_change*p33,y - fig.position_y_change*p33,elephant,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p33,y - fig.position_y_change*p33,"elephant");
                endMotion(1);           
            });
            if(y - fig.position_y_change >= 7 || x + fig.position_x_change >= 7 || x + fig.position_x_change <= 0 || y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
                y = y - fig.position_y_change;
            }
        }
        if(x + fig.position_x_change <= 7 && y - fig.position_y_change >= 0 && boardArray[x + fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        p3 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7 || x + fig.position_x_change > 7 || x + fig.position_x_change < 0 || y + fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 0){
            p4++;
            let circle = document.createElement('div');
            circleArray4.push(circle);
            circle.classList.add("circle");
            circle.classList.add(`_${p4}`);
            boardArray[x + fig.position_x_change][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p44 = Number(circle.classList[1].split("_")[1]);
                printFigurines(x + fig.position_x_change*p44,y + fig.position_y_change*p44,elephant,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p44,y + fig.position_y_change*p44,"elephant");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7 || x + fig.position_x_change >= 7 || x + fig.position_x_change <= 0 || y + fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
                y = y + fig.position_y_change;
            }
        }
        if(x + fig.position_x_change <= 7 && y + fig.position_y_change <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        p4 = 0;
        x = x1;
        y = y1;
    }
}//vv

function moveRook(x,y,fig,color){
    console.log(changeTeam(0));
    let x1 = x, y1 = y;
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    let check = 1;
    if(color == "black" && color == changeTeam(0)){
        if(x - fig.position_x_change < 0) check = 0;//движение вверх 
        while(check == 1 && boardArray[x - fig.position_x_change][y].children.length == 0){
            p1++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p1}`);
            boardArray[x - fig.position_x_change][y].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p11 = Number(circle.classList[1].split("_")[1]);
                console.log(`${x- fig.position_x_change*p11}, ${y}`);
                printFigurines(x - fig.position_x_change*p11,y,rook,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p11,y,"rook");
                endMotion(1);           
            });
            if(x - fig.position_x_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
            }
        }
        if(x - fig.position_x_change >= 0 && boardArray[x - fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y].children.length == 1 && boardArray[x - fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x1,y1,x - fig.position_x_change,y,color,fig);
            }
        }
        p1 = 0;
        x = x1;
        y = y1;
        check = 1;
        console.log(`do/ x ravno ${x}, y ravno ${y}`)
        if(x + fig.position_x_change > 7) check = 0;//движение вниз
        while(check == 1 && boardArray[x + fig.position_x_change][y].children.length == 0){
            console.log(`posle/ x ravno ${x}, y ravno ${y}`)
            p2++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p2}`);
            boardArray[x + fig.position_x_change][y].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p22 = Number(circle.classList[1].split("_")[1]);
                console.log(`${x + fig.position_x_change*p22}, ${y}`);
                printFigurines(x + fig.position_x_change*p22,y,rook,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p22,y,"rook");
                endMotion(1);           
            });
            if(x + fig.position_x_change >= 7) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
            }
        }
        if(x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y].children.length == 1 && boardArray[x + fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y,color,fig);
            }
        }
        p2 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change < 0) check = 0;//движение влево 
        while(check == 1 && boardArray[x][y - fig.position_y_change].children.length == 0){
            p3++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p3}`);
            boardArray[x][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p33 = Number(circle.classList[1].split("_")[1]);
                console.log(`${x}, ${y - fig.position_y_change*p33}`);
                printFigurines(x,y - fig.position_y_change*p33,rook,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x,y - fig.position_y_change*p33,"rook");
                endMotion(1);           
            });
            if(y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                y = y - fig.position_y_change;
            }
        }
        if(y - fig.position_y_change >= 0 && boardArray[x][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y - fig.position_y_change].children.length == 1 && boardArray[x][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x,y - fig.position_y_change,color,fig);
            }
        }
        p3 = 0;
        x = x1;
        y = y1;
        p4 = 0;
        check = 1;
        if(y + fig.position_y_change > 7) check = 0;//движение вправо 
        while(check == 1 && boardArray[x][y + fig.position_y_change].children.length == 0){
            p4++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p4}`);
            boardArray[x][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p44 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x}, y - ${y}, p - ${p44}, ${y} + ${p44} = ${y + fig.position_y_change*p44}`);
                printFigurines(x,y + fig.position_y_change*p44,rook,color);
                boardArray[x][y].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x,y + fig.position_y_change*p44,"rook");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7) check = 0;
            if(check != 0){
                y = y + fig.position_y_change;
            }
        }
        if(y + fig.position_y_change <= 7 && boardArray[x][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y + fig.position_y_change].children.length == 1 && boardArray[x][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x,y + fig.position_y_change,color,fig);
            }
        }
        x = x1;
        y = y1;
        p4 = 0;
    }
    else if(color == "white" && color == changeTeam(0)){
        if(x - fig.position_x_change < 0) check = 0;//движение вверх 
        while(check == 1 && boardArray[x - fig.position_x_change][y].children.length == 0){
            p1++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p1}`);
            boardArray[x - fig.position_x_change][y].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p11 = Number(circle.classList[1].split("_")[1]);
                console.log(`${x- fig.position_x_change*p11}, ${y}`);
                printFigurines(x - fig.position_x_change*p11,y,rook,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p11,y,"rook");
                endMotion(1);           
            });
            if(x - fig.position_x_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
            }
        }
        if(x - fig.position_x_change >= 0 && boardArray[x - fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y].children.length == 1 && boardArray[x - fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x1,y1,x - fig.position_x_change,y,color,fig);
            }
        }
        p1 = 0;
        x = x1;
        y = y1;
        check = 1;
        console.log(`do/ x ravno ${x}, y ravno ${y}`)
        if(x + fig.position_x_change > 7) check = 0;//движение вниз
        while(check == 1 && boardArray[x + fig.position_x_change][y].children.length == 0){
            console.log(`posle/ x ravno ${x}, y ravno ${y}`)
            p2++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p2}`);
            boardArray[x + fig.position_x_change][y].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p22 = Number(circle.classList[1].split("_")[1]);
                console.log(`${x + fig.position_x_change*p22}, ${y}`);
                printFigurines(x + fig.position_x_change*p22,y,rook,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p22,y,"rook");
                endMotion(1);           
            });
            if(x + fig.position_x_change >= 7) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
            }
        }
        if(x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y].children.length == 1 && boardArray[x + fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y,color,fig);
            }
        }
        p2 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change < 0) check = 0;//движение влево 
        while(check == 1 && boardArray[x][y - fig.position_y_change].children.length == 0){
            p3++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p3}`);
            boardArray[x][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p33 = Number(circle.classList[1].split("_")[1]);
                console.log(`${x}, ${y - fig.position_y_change*p33}`);
                printFigurines(x,y - fig.position_y_change*p33,rook,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x,y - fig.position_y_change*p33,"rook");
                endMotion(1);           
            });
            if(y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                y = y - fig.position_y_change;
            }
        }
        if(y - fig.position_y_change >= 0 && boardArray[x][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y - fig.position_y_change].children.length == 1 && boardArray[x][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x,y - fig.position_y_change,color,fig);
            }
        }
        p3 = 0;
        x = x1;
        y = y1;
        p4 = 0;
        check = 1;
        if(y + fig.position_y_change > 7) check = 0;//движение вправо 
        while(check == 1 && boardArray[x][y + fig.position_y_change].children.length == 0){
            p4++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p4}`);
            boardArray[x][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p44 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x}, y - ${y}, p - ${p44}, ${y} + ${p44} = ${y + fig.position_y_change*p44}`);
                printFigurines(x,y + fig.position_y_change*p44,rook,color);
                boardArray[x][y].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x,y + fig.position_y_change*p44,"rook");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7) check = 0;
            if(check != 0){
                y = y + fig.position_y_change;
            }
        }
        if(y + fig.position_y_change <= 7 && boardArray[x][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y + fig.position_y_change].children.length == 1 && boardArray[x][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x,y + fig.position_y_change,color,fig);
            }
        }
        x = x1;
        y = y1;
        p4 = 0;
    }
}//vv

function moveHorse(x,y,fig,color){
    let check = 1;
    if(color == "black" && color == changeTeam(0)){
    if(x - fig.position_x_change < 0) check = 0; 
        if(check == 1){//вверх
            check = (y+fig.position_y_change > 7)?0:1;
            console.log(`x - ${x - fig.position_y_change}, y - ${y + fig.position_x_change}`);
            if(check == 1){
                if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x - fig.position_x_change][y+fig.position_y_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x - fig.position_x_change,y+fig.position_y_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x - fig.position_x_change,y+fig.position_y_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x - fig.position_x_change >= 0 && y + fig.position_y_change <= 7 && boardArray[x - fig.position_x_change][y+ fig.position_y_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x - fig.position_x_change,y + fig.position_y_change,color,fig);
                }
            }
            check = (y-fig.position_y_change < 0)?0:1;
            if(check == 1){
                if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x - fig.position_x_change][y - fig.position_y_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x - fig.position_x_change,y - fig.position_y_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x - fig.position_x_change,y - fig.position_y_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x - fig.position_x_change >= 0 && y - fig.position_y_change >= 0 && boardArray[x - fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x - fig.position_x_change,y - fig.position_y_change,color,fig);
                }
            }      
        }
        check = 1;
        if(x + fig.position_x_change > 7) check = 0; 
        if(check == 1){//вниз
            check = (y+fig.position_y_change > 7)?0:1;
            if(check == 1){
                if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x + fig.position_x_change][y+fig.position_y_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x + fig.position_x_change,y+fig.position_y_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x + fig.position_x_change,y+fig.position_y_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x + fig.position_x_change <= 7 && y + fig.position_y_change <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x + fig.position_x_change,y + fig.position_y_change,color,fig);
                }
            }
            check = (y-fig.position_y_change < 0)?0:1;
            if(check == 1){
                if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x + fig.position_x_change][y - fig.position_y_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x + fig.position_x_change,y - fig.position_y_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x + fig.position_x_change,y - fig.position_y_change,"horse");
                        endMotion(1);           
                    });
                }   
            }
            if(x + fig.position_x_change <= 7 && y - fig.position_y_change >= 0 && boardArray[x + fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x + fig.position_x_change,y - fig.position_y_change,color,fig);
                }
            }
        }
        check = 1;
        if(y - fig.position_x_change < 0) check = 0; 
        if(check == 1){//влево
            check = (x-fig.position_y_change < 0)?0:1;
            console.log(`x - ${x + fig.position_y_change}, y - ${y - fig.position_x_change}`);
            if(check == 1){
                if(boardArray[x - fig.position_y_change][y - fig.position_x_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x - fig.position_y_change][y - fig.position_x_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x - fig.position_y_change,y - fig.position_x_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x - fig.position_y_change,y - fig.position_x_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x - fig.position_y_change >= 0 && y - fig.position_x_change >= 0 && boardArray[x - fig.position_y_change][y - fig.position_x_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x - fig.position_y_change][y - fig.position_x_change].children.length == 1 && boardArray[x - fig.position_y_change][y - fig.position_x_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x - fig.position_y_change,y - fig.position_x_change,color,fig);
                }
            }
            check = (x+fig.position_y_change > 7)?0:1;
            if(check == 1){
                if(boardArray[x + fig.position_y_change][y - fig.position_x_change].children.length == 0 && check == 1){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x + fig.position_y_change][y - fig.position_x_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x + fig.position_y_change,y - fig.position_x_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x + fig.position_y_change,y - fig.position_x_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x + fig.position_y_change <= 7 && y - fig.position_x_change >= 0 && boardArray[x + fig.position_y_change][y - fig.position_x_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x + fig.position_y_change][y - fig.position_x_change].children.length == 1 && boardArray[x + fig.position_y_change][y - fig.position_x_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x + fig.position_y_change,y - fig.position_x_change,color,fig);
                }
            }  
        }
        check = 1;
        if(y + fig.position_x_change > 7) check = 0; 
        if(check == 1){//вправо
            check = (x-fig.position_y_change < 0)?0:1;
            console.log(`x - ${x - fig.position_y_change}, y - ${y - fig.position_x_change}`);
            if(check == 1){
                if(boardArray[x - fig.position_y_change][y + fig.position_x_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x - fig.position_y_change][y + fig.position_x_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x - fig.position_y_change,y + fig.position_x_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x - fig.position_y_change,y + fig.position_x_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x - fig.position_y_change >= 0 && y + fig.position_x_change <= 7 && boardArray[x - fig.position_y_change][y + fig.position_x_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x - fig.position_y_change][y + fig.position_x_change].children.length == 1 && boardArray[x - fig.position_y_change][y + fig.position_x_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x - fig.position_y_change,y + fig.position_x_change,color,fig);
                }
            }
            check = (x+fig.position_y_change > 7)?0:1;
            if(check == 1){
                if(boardArray[x + fig.position_y_change][y + fig.position_x_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x + fig.position_y_change][y + fig.position_x_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x + fig.position_y_change,y + fig.position_x_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x + fig.position_y_change,y + fig.position_x_change,"horse");
                        endMotion(1);           
                    });
                } 
            } 
            if(x + fig.position_y_change <= 7 && y + fig.position_x_change <= 7 && boardArray[x + fig.position_y_change][y + fig.position_x_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x + fig.position_y_change][y + fig.position_x_change].children.length == 1 && boardArray[x + fig.position_y_change][y + fig.position_x_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x + fig.position_y_change,y + fig.position_x_change,color,fig);
                }
            }
        }
    }
    else if(color == "white" && color == changeTeam(0)){
        if(x - fig.position_x_change < 0) check = 0; 
        if(check == 1){//вверх
            check = (y+fig.position_y_change > 7)?0:1;
            console.log(`x - ${x - fig.position_y_change}, y - ${y + fig.position_x_change}`);
            if(check == 1){
                if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x - fig.position_x_change][y+fig.position_y_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x - fig.position_x_change,y+fig.position_y_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x - fig.position_x_change,y+fig.position_y_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x - fig.position_x_change >= 0 && y + fig.position_y_change <= 7 && boardArray[x - fig.position_x_change][y+ fig.position_y_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x - fig.position_x_change,y + fig.position_y_change,color,fig);
                }
            }
            check = (y-fig.position_y_change < 0)?0:1;
            if(check == 1){
                if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x - fig.position_x_change][y - fig.position_y_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x - fig.position_x_change,y - fig.position_y_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x - fig.position_x_change,y - fig.position_y_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x - fig.position_x_change >= 0 && y - fig.position_y_change >= 0 && boardArray[x - fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x - fig.position_x_change,y - fig.position_y_change,color,fig);
                }
            }      
        }
        check = 1;
        if(x + fig.position_x_change > 7) check = 0; 
        if(check == 1){//вниз
            check = (y+fig.position_y_change > 7)?0:1;
            if(check == 1){
                if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x + fig.position_x_change][y+fig.position_y_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x + fig.position_x_change,y+fig.position_y_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x + fig.position_x_change,y+fig.position_y_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x + fig.position_x_change <= 7 && y + fig.position_y_change <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x + fig.position_x_change,y + fig.position_y_change,color,fig);
                }
            }
            check = (y-fig.position_y_change < 0)?0:1;
            if(check == 1){
                if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x + fig.position_x_change][y - fig.position_y_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x + fig.position_x_change,y - fig.position_y_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x + fig.position_x_change,y - fig.position_y_change,"horse");
                        endMotion(1);           
                    });
                }   
            }
            if(x + fig.position_x_change <= 7 && y - fig.position_y_change >= 0 && boardArray[x + fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x + fig.position_x_change,y - fig.position_y_change,color,fig);
                }
            }
        }
        check = 1;
        if(y - fig.position_x_change < 0) check = 0; 
        if(check == 1){//влево
            check = (x-fig.position_y_change < 0)?0:1;
            console.log(`x - ${x + fig.position_y_change}, y - ${y - fig.position_x_change}`);
            if(check == 1){
                if(boardArray[x - fig.position_y_change][y - fig.position_x_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x - fig.position_y_change][y - fig.position_x_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x - fig.position_y_change,y - fig.position_x_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x - fig.position_y_change,y - fig.position_x_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x - fig.position_y_change >= 0 && y - fig.position_x_change >= 0 && boardArray[x - fig.position_y_change][y - fig.position_x_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x - fig.position_y_change][y - fig.position_x_change].children.length == 1 && boardArray[x - fig.position_y_change][y - fig.position_x_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x - fig.position_y_change,y - fig.position_x_change,color,fig);
                }
            }
            check = (x+fig.position_y_change > 7)?0:1;
            if(check == 1){
                if(boardArray[x + fig.position_y_change][y - fig.position_x_change].children.length == 0 && check == 1){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x + fig.position_y_change][y - fig.position_x_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x + fig.position_y_change,y - fig.position_x_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x + fig.position_y_change,y - fig.position_x_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x + fig.position_y_change <= 7 && y - fig.position_x_change >= 0 && boardArray[x + fig.position_y_change][y - fig.position_x_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x + fig.position_y_change][y - fig.position_x_change].children.length == 1 && boardArray[x + fig.position_y_change][y - fig.position_x_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x + fig.position_y_change,y - fig.position_x_change,color,fig);
                }
            }  
        }
        check = 1;
        if(y + fig.position_x_change > 7) check = 0; 
        if(check == 1){//вправо
            check = (x-fig.position_y_change < 0)?0:1;
            console.log(`x - ${x - fig.position_y_change}, y - ${y - fig.position_x_change}`);
            if(check == 1){
                if(boardArray[x - fig.position_y_change][y + fig.position_x_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x - fig.position_y_change][y + fig.position_x_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x - fig.position_y_change,y + fig.position_x_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x - fig.position_y_change,y + fig.position_x_change,"horse");
                        endMotion(1);           
                    });
                }
            }
            if(x - fig.position_y_change >= 0 && y + fig.position_x_change <= 7 && boardArray[x - fig.position_y_change][y + fig.position_x_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x - fig.position_y_change][y + fig.position_x_change].children.length == 1 && boardArray[x - fig.position_y_change][y + fig.position_x_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x - fig.position_y_change,y + fig.position_x_change,color,fig);
                }
            }
            check = (x+fig.position_y_change > 7)?0:1;
            if(check == 1){
                if(boardArray[x + fig.position_y_change][y + fig.position_x_change].children.length == 0){
                    let circle = document.createElement('div');
                    circle.classList.add("circle");
                    boardArray[x + fig.position_y_change][y + fig.position_x_change].appendChild(circle);
                    circle.addEventListener("click", () =>{
                        printFigurines(x + fig.position_y_change,y + fig.position_x_change,horse,color);
                        boardArray[x][y].children[0].remove();
                        circle.remove();
                        boardArray[x][y].classList.remove('active');
                        prepListHG(x + fig.position_y_change,y + fig.position_x_change,"horse");
                        endMotion(1);           
                    });
                } 
            } 
            if(x + fig.position_y_change <= 7 && y + fig.position_x_change <= 7 && boardArray[x + fig.position_y_change][y + fig.position_x_change].innerHTML.indexOf("div") != 1){
                if(boardArray[x + fig.position_y_change][y + fig.position_x_change].children.length == 1 && boardArray[x + fig.position_y_change][y + fig.position_x_change].children[0].src.split("/")[3] != color){
                    kill(x,y,x + fig.position_y_change,y + fig.position_x_change,color,fig);
                }
            }
        }
    }
}//vv

function moveQueen(x,y,fig,color){
    console.log(changeTeam(0));
    let x1 = x, y1 = y;
    let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
    let check = 1;
    if(color == "black" && color == changeTeam(0)){
        if(x - fig.position_x_change < 0) check = 0;//движение вверх 
        while(check == 1 && boardArray[x - fig.position_x_change][y].children.length == 0){
            p1++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p1}`);
            boardArray[x - fig.position_x_change][y].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p11 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x - fig.position_x_change*p11}, y - ${y}, mn - ${p11}`);
                printFigurines(x - fig.position_x_change*p11,y,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p11,y,"queen");
                endMotion(1);           
            });
            if(x - fig.position_x_change < 1) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
            }
        }
        if(x - fig.position_x_change >= 0 && boardArray[x - fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y].children.length == 1 && boardArray[x - fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x1,y1,x - fig.position_x_change,y,color,fig);
            }
        }
        p1 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(x + fig.position_x_change > 7) check = 0;//движение вниз
        while(check == 1 && boardArray[x + fig.position_x_change][y].children.length == 0){
            p2++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p2}`);
            boardArray[x + fig.position_x_change][y].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p22 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x + fig.position_x_change*p22}, y - ${y}, mn - ${p22}`);
                printFigurines(x + fig.position_x_change*p22,y,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p22,y,"queen");
                endMotion(1);           
            });
            if(x + fig.position_x_change > 6) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
            }
        }
        if(x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y].children.length == 1 && boardArray[x + fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y,color,fig);
            }
        }
        p2 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change < 0) check = 0;//движение влево 
        while(check == 1 && boardArray[x][y - fig.position_y_change].children.length == 0){
            p3++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p3}`);
            boardArray[x][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p33 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x}, y - ${y - fig.position_y_change*p33}, mn - ${p33}`);
                printFigurines(x,y - fig.position_y_change*p33,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x,y - fig.position_y_change*p33,"queen");
                endMotion(1);           
            });
            if(y - fig.position_y_change < 1) check = 0;
            if(check != 0){
                y = y - fig.position_y_change;
            }
        }
        if(y - fig.position_y_change >= 0 && boardArray[x][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y - fig.position_y_change].children.length == 1 && boardArray[x][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x,y - fig.position_y_change,color,fig);
            }
        }
        p3 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7) check = 0;//движение вправо 
        while(check == 1 && boardArray[x][y + fig.position_y_change].children.length == 0){
            p4++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p4}`);
            boardArray[x][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p44 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x}, y - ${y + fig.position_y_change*p44}, mn - ${p44}`);
                printFigurines(x,y + fig.position_y_change*p44,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x,y + fig.position_y_change*p44,"queen");
                endMotion(1);           
            });
            if(y + fig.position_y_change > 6) check = 0;
            if(check != 0){
                y = y + fig.position_y_change;
            }
        }
        if(y + fig.position_y_change <= 7 && boardArray[x][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y + fig.position_y_change].children.length == 1 && boardArray[x][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x,y + fig.position_y_change,color,fig);
            }
        }
        p4 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change > 7 || x - fig.position_x_change > 7 || x - fig.position_x_change < 0 || y - fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 0){
            p1++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p1}`);
            boardArray[x - fig.position_x_change][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p11 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x- fig.position_x_change*p11}, y - ${y - fig.position_y_change*p11}, mn - ${p11}`);
                printFigurines(x - fig.position_x_change*p11,y - fig.position_y_change*p11,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p11,y - fig.position_y_change*p11,"queen");
                endMotion(1);           
            });
            if(y - fig.position_y_change >= 7 || x - fig.position_x_change >= 7 || x - fig.position_x_change <= 0 || y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
                y = y - fig.position_y_change;
            }
        }
        if(y - fig.position_y_change >= 0 && x - fig.position_x_change >= 0 && boardArray[x- fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x- fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x- fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x- fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        p1 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7 || x - fig.position_x_change > 7 || x - fig.position_x_change < 0 || y + fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 0){
            p2++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p2}`);
            boardArray[x - fig.position_x_change][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p22 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x- fig.position_x_change*p22}, y - ${y + fig.position_y_change*p22}, mn - ${p22}`);
                printFigurines(x - fig.position_x_change*p22,y + fig.position_y_change*p22,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p22,y + fig.position_y_change*p22,"queen");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7 || x - fig.position_x_change >= 7 || x - fig.position_x_change <= 0 || y + fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
                y = y + fig.position_y_change;
            }
        }
        if(y + fig.position_y_change <= 7 && x - fig.position_x_change >= 0 && boardArray[x- fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x- fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x- fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x- fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        p2 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change > 7 || x + fig.position_x_change > 7 || x + fig.position_x_change < 0 || y - fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 0){
            p3++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p3}`);
            boardArray[x + fig.position_x_change][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p33 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x + fig.position_x_change*p33}, y - ${y - fig.position_y_change*p33}, mn - ${p33}`);
                printFigurines(x + fig.position_x_change*p33,y - fig.position_y_change*p33,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p33,y - fig.position_y_change*p33,"queen");
                endMotion(1);           
            });
            if(y - fig.position_y_change >= 7 || x + fig.position_x_change >= 7 || x + fig.position_x_change <= 0 || y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
                y = y - fig.position_y_change;
            }
        }
        if(y - fig.position_y_change >= 0 && x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        p3 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7 || x + fig.position_x_change > 7 || x + fig.position_x_change < 0 || y + fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 0){
            p4++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p4}`);
            boardArray[x + fig.position_x_change][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p44 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x + fig.position_x_change*p44}, y - ${y + fig.position_y_change*p44}, mn - ${p44}`);
                printFigurines(x + fig.position_x_change*p44,y + fig.position_y_change*p44,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p44,y + fig.position_y_change*p44,"queen");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7 || x + fig.position_x_change >= 7 || x + fig.position_x_change <= 0 || y + fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
                y = y + fig.position_y_change;
            }
        }
        if(y + fig.position_y_change <= 7 && x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        p4 = 0;
        x = x1;
        y = y1;
    }
    else if(color == "white" && color == changeTeam(0)){
        if(x - fig.position_x_change < 0) check = 0;//движение вверх 
        while(check == 1 && boardArray[x - fig.position_x_change][y].children.length == 0){
            p1++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p1}`);
            boardArray[x - fig.position_x_change][y].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p11 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x - fig.position_x_change*p11}, y - ${y}, mn - ${p11}`);
                printFigurines(x - fig.position_x_change*p11,y,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p11,y,"queen");
                endMotion(1);           
            });
            if(x - fig.position_x_change < 1) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
            }
        }
        if(x - fig.position_x_change >= 0 && boardArray[x - fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y].children.length == 1 && boardArray[x - fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x1,y1,x - fig.position_x_change,y,color,fig);
            }
        }
        p1 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(x + fig.position_x_change > 7) check = 0;//движение вниз
        while(check == 1 && boardArray[x + fig.position_x_change][y].children.length == 0){
            p2++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p2}`);
            boardArray[x + fig.position_x_change][y].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p22 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x + fig.position_x_change*p22}, y - ${y}, mn - ${p22}`);
                printFigurines(x + fig.position_x_change*p22,y,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p22,y,"queen");
                endMotion(1);           
            });
            if(x + fig.position_x_change > 6) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
            }
        }
        if(x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y].children.length == 1 && boardArray[x + fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y,color,fig);
            }
        }
        p2 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change < 0) check = 0;//движение влево 
        while(check == 1 && boardArray[x][y - fig.position_y_change].children.length == 0){
            p3++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p3}`);
            boardArray[x][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p33 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x}, y - ${y - fig.position_y_change*p33}, mn - ${p33}`);
                printFigurines(x,y - fig.position_y_change*p33,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x,y - fig.position_y_change*p33,"queen");
                endMotion(1);           
            });
            if(y - fig.position_y_change < 1) check = 0;
            if(check != 0){
                y = y - fig.position_y_change;
            }
        }
        if(y - fig.position_y_change >= 0 && boardArray[x][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y - fig.position_y_change].children.length == 1 && boardArray[x][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x,y - fig.position_y_change,color,fig);
            }
        }
        p3 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7) check = 0;//движение вправо 
        while(check == 1 && boardArray[x][y + fig.position_y_change].children.length == 0){
            p4++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p4}`);
            boardArray[x][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p44 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x}, y - ${y + fig.position_y_change*p44}, mn - ${p44}`);
                printFigurines(x,y + fig.position_y_change*p44,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x,y + fig.position_y_change*p44,"queen");
                endMotion(1);           
            });
            if(y + fig.position_y_change > 6) check = 0;
            if(check != 0){
                y = y + fig.position_y_change;
            }
        }
        if(y + fig.position_y_change <= 7 && boardArray[x][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y + fig.position_y_change].children.length == 1 && boardArray[x][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x,y + fig.position_y_change,color,fig);
            }
        }
        p4 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change > 7 || x - fig.position_x_change > 7 || x - fig.position_x_change < 0 || y - fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 0){
            p1++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p1}`);
            boardArray[x - fig.position_x_change][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p11 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x- fig.position_x_change*p11}, y - ${y - fig.position_y_change*p11}, mn - ${p11}`);
                printFigurines(x - fig.position_x_change*p11,y - fig.position_y_change*p11,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p11,y - fig.position_y_change*p11,"queen");
                endMotion(1);           
            });
            if(y - fig.position_y_change >= 7 || x - fig.position_x_change >= 7 || x - fig.position_x_change <= 0 || y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
                y = y - fig.position_y_change;
            }
        }
        if(y - fig.position_y_change >= 0 && x - fig.position_x_change >= 0 && boardArray[x- fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x- fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x- fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x- fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        p1 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7 || x - fig.position_x_change > 7 || x - fig.position_x_change < 0 || y + fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 0){
            p2++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p2}`);
            boardArray[x - fig.position_x_change][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p22 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x- fig.position_x_change*p22}, y - ${y + fig.position_y_change*p22}, mn - ${p22}`);
                printFigurines(x - fig.position_x_change*p22,y + fig.position_y_change*p22,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x - fig.position_x_change*p22,y + fig.position_y_change*p22,"queen");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7 || x - fig.position_x_change >= 7 || x - fig.position_x_change <= 0 || y + fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x - fig.position_x_change;
                y = y + fig.position_y_change;
            }
        }
        if(y + fig.position_y_change <= 7 && x - fig.position_x_change >= 0 && boardArray[x- fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x- fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x- fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x- fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        p2 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y - fig.position_y_change > 7 || x + fig.position_x_change > 7 || x + fig.position_x_change < 0 || y - fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 0){
            p3++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p3}`);
            boardArray[x + fig.position_x_change][y - fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p33 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x + fig.position_x_change*p33}, y - ${y - fig.position_y_change*p33}, mn - ${p33}`);
                printFigurines(x + fig.position_x_change*p33,y - fig.position_y_change*p33,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p33,y - fig.position_y_change*p33,"queen");
                endMotion(1);           
            });
            if(y - fig.position_y_change >= 7 || x + fig.position_x_change >= 7 || x + fig.position_x_change <= 0 || y - fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
                y = y - fig.position_y_change;
            }
        }
        if(y - fig.position_y_change >= 0 && x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        p3 = 0;
        x = x1;
        y = y1;
        check = 1;
        if(y + fig.position_y_change > 7 || x + fig.position_x_change > 7 || x + fig.position_x_change < 0 || y + fig.position_y_change < 0) check = 0;
        while(check == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 0){
            p4++;
            let circle = document.createElement('div');
            circle.classList.add("circle");
            circle.classList.add(`_${p4}`);
            boardArray[x + fig.position_x_change][y + fig.position_y_change].appendChild(circle);
            circle.addEventListener("click", () =>{
                let p44 = Number(circle.classList[1].split("_")[1]);
                console.log(`x - ${x + fig.position_x_change*p44}, y - ${y + fig.position_y_change*p44}, mn - ${p44}`);
                printFigurines(x + fig.position_x_change*p44,y + fig.position_y_change*p44,queen,color);
                boardArray[x1][y1].children[0].remove();
                circle.remove();
                boardArray[x1][y1].classList.remove('active');
                prepListHG(x + fig.position_x_change*p44,y + fig.position_y_change*p44,"queen");
                endMotion(1);           
            });
            if(y + fig.position_y_change >= 7 || x + fig.position_x_change >= 7 || x + fig.position_x_change <= 0 || y + fig.position_y_change <= 0) check = 0;
            if(check != 0){
                x = x + fig.position_x_change;
                y = y + fig.position_y_change;
            }
        }
        if(y + fig.position_y_change <= 7 && x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x1,y1,x + fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        p4 = 0;
        x = x1;
        y = y1;
    }
}//vv

function moveKing(x,y,fig,color){
    console.log(changeTeam(0));
    let check = 1;
    if(color == "black" && color == changeTeam(0)){
        check = (x)<=0?0:1;
        if(check == 1){
            if(boardArray[x - fig.position_x_change][y].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x - fig.position_x_change][y].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x - fig.position_x_change,y,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x - fig.position_x_change,y,"king");
                    endMotion(1);           
                });
            }
        }
        if(x - fig.position_x_change >= 0 && boardArray[x - fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y].children.length == 1 && boardArray[x - fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x,y,x - fig.position_x_change,y,color,fig);
            }
        }
        check = (x)>=7?0:1;
        if(check == 1){
            if(boardArray[x + fig.position_x_change][y].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x + fig.position_x_change][y].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x + fig.position_x_change,y,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x + fig.position_x_change,y,"king");
                    endMotion(1);           
                });
            }
        }
        if(x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y].children.length == 1 && boardArray[x + fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x,y,x + fig.position_x_change,y,color,fig);
            }
        }
        check = ((y<=0)||(x<=0))?0:1;
        if(check == 1){
            if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x - fig.position_x_change][y - fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x - fig.position_x_change,y - fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x - fig.position_x_change,y - fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(x - fig.position_x_change >= 0 && y - fig.position_y_change >= 0 && boardArray[x - fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x - fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        check = ((y>=7)||(x<=0))?0:1;
        if(check == 1){
            if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x - fig.position_x_change][y + fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x - fig.position_x_change,y + fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x - fig.position_x_change,y + fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(x - fig.position_x_change >= 0 && y + fig.position_y_change <= 7 && boardArray[x - fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x - fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        check = (y)<=0?0:1;
        if(check == 1){
            if(boardArray[x][y - fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x][y - fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x,y - fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x,y - fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(y - fig.position_y_change >= 0 && boardArray[x][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y - fig.position_y_change].children.length == 1 && boardArray[x][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x,y - fig.position_y_change,color,fig);
            }
        }
        check = (y)>=7?0:1;
        if(check == 1){
            if(boardArray[x][y + fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x][y + fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x,y + fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x,y + fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(y + fig.position_y_change <= 7 && boardArray[x][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y + fig.position_y_change].children.length == 1 && boardArray[x][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x,y + fig.position_y_change,color,fig);
            }
        }
        check = ((y<=0)||(x>=7))?0:1;
        if(check == 1){
            if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x + fig.position_x_change][y - fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x + fig.position_x_change,y - fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x + fig.position_x_change,y - fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(y - fig.position_y_change >= 0 && x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x + fig.position_x_change,y- fig.position_y_change,color,fig);
            }
        }
        check = ((y>=7)||(x>=7))?0:1;
        if(check == 1){
            if(check == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x + fig.position_x_change][y + fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x + fig.position_x_change,y + fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x + fig.position_x_change,y - fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(y + fig.position_y_change <= 7 && x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x + fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
    }
    else if(color == "white" && color == changeTeam(0)){
        check = (x)<=0?0:1;
        if(check == 1){
            if(boardArray[x - fig.position_x_change][y].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x - fig.position_x_change][y].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x - fig.position_x_change,y,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x - fig.position_x_change,y,"king");
                    endMotion(1);           
                });
            }
        }
        if(x - fig.position_x_change >= 0 && boardArray[x - fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y].children.length == 1 && boardArray[x - fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x,y,x - fig.position_x_change,y,color,fig);
            }
        }
        check = (x)>=7?0:1;
        if(check == 1){
            if(boardArray[x + fig.position_x_change][y].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x + fig.position_x_change][y].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x + fig.position_x_change,y,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x + fig.position_x_change,y,"king");
                    endMotion(1);           
                });
            }
        }
        if(x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y].children.length == 1 && boardArray[x + fig.position_x_change][y].children[0].src.split("/")[3] != color){
                kill(x,y,x + fig.position_x_change,y,color,fig);
            }
        }
        check = ((y<=0)||(x<=0))?0:1;
        if(check == 1){
            if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x - fig.position_x_change][y - fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x - fig.position_x_change,y - fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x - fig.position_x_change,y - fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(x - fig.position_x_change >= 0 && y - fig.position_y_change >= 0 && boardArray[x - fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x - fig.position_x_change,y - fig.position_y_change,color,fig);
            }
        }
        check = ((y>=7)||(x<=0))?0:1;
        if(check == 1){
            if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x - fig.position_x_change][y + fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x - fig.position_x_change,y + fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x - fig.position_x_change,y + fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(x - fig.position_x_change >= 0 && y + fig.position_y_change <= 7 && boardArray[x - fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x - fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x - fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x - fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
        check = (y)<=0?0:1;
        if(check == 1){
            if(boardArray[x][y - fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x][y - fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x,y - fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x,y - fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(y - fig.position_y_change >= 0 && boardArray[x][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y - fig.position_y_change].children.length == 1 && boardArray[x][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x,y - fig.position_y_change,color,fig);
            }
        }
        check = (y)>=7?0:1;
        if(check == 1){
            if(boardArray[x][y + fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x][y + fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x,y + fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x,y + fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(y + fig.position_y_change <= 7 && boardArray[x][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x][y + fig.position_y_change].children.length == 1 && boardArray[x][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x,y + fig.position_y_change,color,fig);
            }
        }
        check = ((y<=0)||(x>=7))?0:1;
        if(check == 1){
            if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x + fig.position_x_change][y - fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x + fig.position_x_change,y - fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x + fig.position_x_change,y - fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(y - fig.position_y_change >= 0 && x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y - fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y - fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y - fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x + fig.position_x_change,y- fig.position_y_change,color,fig);
            }
        }
        check = ((y>=7)||(x>=7))?0:1;
        if(check == 1){
            if(check == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 0){
                let circle = document.createElement('div');
                circle.classList.add("circle");
                boardArray[x + fig.position_x_change][y + fig.position_y_change].appendChild(circle);
                circle.addEventListener("click", () =>{
                    printFigurines(x + fig.position_x_change,y + fig.position_y_change,king,color);
                    boardArray[x][y].children[0].remove();
                    circle.remove();
                    boardArray[x][y].classList.remove('active');
                    prepListHG(x + fig.position_x_change,y - fig.position_y_change,"king");
                    endMotion(1);           
                });
            }
        }
        if(y + fig.position_y_change <= 7 && x + fig.position_x_change <= 7 && boardArray[x + fig.position_x_change][y + fig.position_y_change].innerHTML.indexOf("div") != 1){
            if(boardArray[x + fig.position_x_change][y + fig.position_y_change].children.length == 1 && boardArray[x + fig.position_x_change][y + fig.position_y_change].children[0].src.split("/")[3] != color){
                kill(x,y,x + fig.position_x_change,y + fig.position_y_change,color,fig);
            }
        }
    }
}//vv

/////////////////////////////////////////////////////

/////////////уничтожение фигур/////////////////

function kill(x,y,x1,y1,color,fig1){
    let Kill = document.createElement('div');
    Kill.classList.add("canKill");
    boardArray[x1][y1].appendChild(Kill);
    Kill.addEventListener("click", () =>{
        let color2 = boardArray[x1][y1].children[0].src.split("/")[3];
        let activeFigure = boardArray[x1][y1].children[0].src.split("/")[4];
        boardArray[x1][y1].children[0].remove();
        switch(fig1.rang) {
            case "pawn":{
                printFigurines(x1,y1,pawn,color);
                break;
            }
            case "elephant":{
                printFigurines(x1,y1,elephant,color);
                break;
            }
            case "horse":{
                printFigurines(x1,y1,horse,color);
                break;
            }
            case "king":{
                printFigurines(x1,y1,king,color);
                break;
            }
            case "queen":{
                printFigurines(x1,y1,queen,color);
                break;
            }
            case "rook":{
                printFigurines(x1,y1,rook,color);
                break;
            }
            default: console.log("error");
        }
        let coordX = 8 - x1;
        let coordY;
        switch (y1) {
            case 0:{
                coordY = "A";
                break;
            }
            case 1:{
                coordY = "B";
                break;
            }
            case 2:{
                coordY = "C";
                break;
            }
            case 3:{
                coordY = "D";
                break;
            }
            case 4:{
                coordY = "E";
                break;
            }
            case 5:{
                coordY = "F";
                break;
            }
            case 6:{
                coordY = "G";
                break;
            }
            case 7:{
                coordY = "H";
                break;
            }
            default: console.log("error");
        }
        boardArray[x][y].children[0].remove();
        Kill.remove();
        boardArray[x][y].classList.remove('active');
        let fig = activeFigure.split(".")[0];
        switch(fig) {
            case "pawn":{
                score(pawn,color2,0);
                break;
            }
            case "elephant":{
                score(elephant,color2,0);
                break;
            }
            case "horse":{
                score(horse,color2,0);
                break;
            }
            case "king":{
                score(king,color2,0);
                if(color2 == "white")
                    document.querySelector(".win").innerHTML = `Победа за черными!!!`;
                else
                    document.querySelector(".win").innerHTML = `Победа за белыми!!!`;
                endGame();
                break;
            }
            case "queen":{
                score(queen,color2,0);
                break;
            }
            case "rook":{
                score(rook,color2,0);
                break;
            }
            default: console.log("error");
        }
        let coord = coordY + "-" + coordX;
        historyList(fig1.rang,coord,fig);
        endMotion(1);           
    });
}

////////////  Счет|выбывшие фигуры  ////////////////////////////

function score(fig,color,x){
    if(color === "white"){
        if(fig != 1){
            sc_b += fig.point;
        }
        let num = (sc_b < 100)? "0"+sc_b:sc_b;
        scoreB.innerHTML = `${num}`;
        if(x == 1){
            return num;
        }
    }
    else{
        if(fig != 1){
            sc_w += fig.point;
        }
        let num = (sc_w < 100)? "0"+sc_w:sc_w;
        scoreW.innerHTML = `${num}`;
        if(x == 1){
            return num;
        }
    }
    printFigurinesScore(fig,color)
}
//////////////shax///////////////////
function checkKing(){
    if(changeTeam(0) == "black"){
        let xKing, yKing, check = 0;
        for(let i = 0;i < 8;i++){
            for(let j = 0;j < 8;j++){
                if(boardArray[i][j].children.length == 1){
                    if(boardArray[i][j].children[0].src.split("/")[3] == changeTeam(0) && boardArray[i][j].children[0].src.split("/")[4] == "king.png"){
                        xKing = i;
                        yKing = j;
                    } 
                }
            }
        }
        for(let i = 0;i < 8;i++){
            for(let j = 0;j < 8;j++){
                if(boardArray[i][j].children.length == 1){
                    if(boardArray[i][j].children[0].src.split("/")[3] != changeTeam(0)){
                        let fig = boardArray[i][j].children[0].src.split("/")[4].split('.')[0];
                        switch(fig) {
                            case "pawn":{
                                if(xKing - i == 1 && yKing - j == 1) boardArray[xKing][yKing].classList.add("shax");;
                                if(xKing - i == 1 && yKing - j == -1) boardArray[xKing][yKing].classList.add("shax");;
                                break;
                            }
                            case "elephant":{
                                if(xKing - i == yKing - j){
                                    let tmp = xKing - i,ch = 1;
                                    console.log(`${xKing},${yKing} - king`);
                                    for(let g = 1;g < tmp;g++){
                                        console.log(`${i+g},${j+g}`);
                                        if(boardArray[i+g][j+g].children.length == 1){
                                            ch = 0;
                                        }
                                    }
                                    if(ch == 1)
                                    boardArray[xKing][yKing].classList.add("shax");;
                                }
                                if(xKing - i == j - yKing){
                                    let tmp = xKing - i,ch = 1;
                                    console.log(`${xKing},${yKing} - king`);
                                    for(let g = 1;g < tmp;g++){
                                        console.log(`${i+g},${j-g}`);
                                        if(boardArray[i+g][j-g].children.length == 1){
                                            ch = 0;
                                        }
                                    }
                                    if(ch == 1)
                                    boardArray[xKing][yKing].classList.add("shax");;
                                } 
                                break;
                            }
                            case "horse":{
                                if((xKing - i == 1 && yKing - j == 2) || (xKing - i == 2 && yKing - j == 1)) boardArray[xKing][yKing].classList.add("shax");;
                                break;
                            }
                            case "king":{
                                break;
                            }
                            case "queen":{
                                if(xKing - i == yKing - j){
                                    let tmp = xKing - i,ch = 1;
                                    console.log(`${xKing},${yKing} - king`);
                                    for(let g = 1;g < tmp;g++){
                                        console.log(`${i+g},${j+g}`);
                                        if(boardArray[i-g][j+g].children.length == 1){
                                            ch = 0;
                                        }
                                    }
                                    if(ch == 1)
                                    boardArray[xKing][yKing].classList.add("shax");
                                }
                                if(Math.abs(xKing - i) == Math.abs(yKing - j)){
                                    let tmp = xKing - i,ch = 1;
                                    console.log(`${xKing},${yKing} - king`);
                                    for(let g = 1;g < tmp;g++){
                                        console.log(`${i+g},${j+g}`);
                                        if(boardArray[i+g][j+g].children.length == 1){
                                            ch = 0;
                                        }
                                    }
                                    if(ch == 1)
                                    boardArray[xKing][yKing].classList.add("shax");
                                }
                                if(xKing - i == 0){
                                    if(yKing > j){
                                        let tmp = yKing - j,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i},${j+g}`);
                                            if(boardArray[i][j+g].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                    else{
                                        let tmp = j - yKing,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i},${j-g}`);
                                            if(boardArray[i][j-g].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                }
                                
                                if(yKing - j == 0){
                                    if(xKing > i){
                                        let tmp = xKing - i,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i+g},${j}`);
                                            if(boardArray[i+g][j].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                    else{
                                        let tmp = xKing - i,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i+g},${j}`);
                                            if(boardArray[i+g][j].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                }


                                if(xKing - i == 1) boardArray[xKing][yKing].children[0].classList.add("shax");;
                                break;
                            }
                            case "rook":{
                                if(xKing - i == 0){
                                    if(yKing > j){
                                        let tmp = yKing - j,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i},${j+g}`);
                                            if(boardArray[i][j+g].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                    else{
                                        let tmp = j - yKing,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i},${j-g}`);
                                            if(boardArray[i][j-g].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                }
                                
                                if(yKing - j == 0){
                                    if(xKing > i){
                                        let tmp = xKing - i,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i+g},${j}`);
                                            if(boardArray[i+g][j].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                    else{
                                        let tmp = xKing - i,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i+g},${j}`);
                                            if(boardArray[i+g][j].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                }
                                break;
                            }
                            default: console.log("error");
                        }
                    } 
                }
            }
        }
    }
    else{
        let xKing, yKing, check = 0;
        for(let i = 0;i < 8;i++){
            for(let j = 0;j < 8;j++){
                if(boardArray[i][j].children.length == 1){
                    if(boardArray[i][j].children[0].src.split("/")[3] == changeTeam(0) && boardArray[i][j].children[0].src.split("/")[4] == "king.png"){
                        xKing = i;
                        yKing = j;
                    } 
                }
            }
        }
        for(let i = 0;i < 8;i++){
            for(let j = 0;j < 8;j++){
                if(boardArray[i][j].children.length == 1){
                    if(boardArray[i][j].children[0].src.split("/")[3] != changeTeam(0)){
                        let fig = boardArray[i][j].children[0].src.split("/")[4].split('.')[0];
                        switch(fig) {
                            case "pawn":{
                                if(i - xKing == 1 && yKing - j == 1) boardArray[xKing][yKing].classList.add("shax");;
                                if(i - xKing == 1 && yKing - j == -1) boardArray[xKing][yKing].classList.add("shax");;
                                break;
                            }
                            case "elephant":{
                                if(i - xKing == yKing - j){
                                    let tmp = i - xKing,ch = 1;
                                    console.log(`${xKing},${yKing} - king`);
                                    for(let g = 1;g < tmp;g++){
                                        console.log(`${i-g},${j+g}`);
                                        if(boardArray[i-g][j+g].children.length == 1){
                                            ch = 0;
                                        }
                                    }
                                    if(ch == 1)
                                    boardArray[xKing][yKing].classList.add("shax");;
                                }
                                if(i - xKing == j - yKing){
                                    let tmp =i - xKing,ch = 1;
                                    console.log(`${xKing},${yKing} - king`);
                                    for(let g = 1;g < tmp;g++){
                                        console.log(`${i+g},${j-g}`);
                                        if(boardArray[i-g][j-g].children.length == 1){
                                            ch = 0;
                                        }
                                    }
                                    if(ch == 1)
                                    boardArray[xKing][yKing].classList.add("shax");;
                                } 
                                break;
                            }
                            case "horse":{
                                if((i - xKing == 1 && yKing - j == 2) || (i - xKing  == 2 && yKing - j == 1)) boardArray[xKing][yKing].classList.add("shax");;
                                break;
                            }
                            case "king":{
                                break;
                            }
                            case "queen":{
                                if(i - xKing == yKing - j){
                                    let tmp = i - xKing,ch = 1;
                                    console.log(`${xKing},${yKing} - king`);
                                    for(let g = 1;g < tmp;g++){
                                        console.log(`${i-g},${j+g}`);
                                        if(boardArray[i-g][j+g].children.length == 1){
                                            ch = 0;
                                        }
                                    }
                                    if(ch == 1)
                                    boardArray[xKing][yKing].classList.add("shax");;
                                }
                                    
                                if(i - xKing == j - yKing){
                                    let tmp =i - xKing,ch = 1;
                                    console.log(`${xKing},${yKing} - king`);
                                    for(let g = 1;g < tmp;g++){
                                        console.log(`${i+g},${j-g}`);
                                        if(boardArray[i-g][j-g].children.length == 1){
                                            ch = 0;
                                        }
                                    }
                                    if(ch == 1)
                                    boardArray[xKing][yKing].classList.add("shax");;
                                }
                                if(xKing - i == 0){
                                    if(yKing > j){
                                        let tmp = yKing - j,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i},${j+g}`);
                                            if(boardArray[i][j+g].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                    else{
                                        let tmp = j - yKing,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i},${j-g}`);
                                            if(boardArray[i][j-g].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                }
                                
                                if(yKing - j == 0){
                                    if(xKing > i){
                                        let tmp = i - xKing,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i+g},${j}`);
                                            if(boardArray[i+g][j].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                    else{
                                        let tmp = i - xKing,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i+g},${j}`);
                                            if(boardArray[i-g][j].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                }


                                if(i - xKing == 1) boardArray[xKing][yKing].children[0].classList.add("shax");
                                break;
                            }
                            case "rook":{
                                if(xKing - i == 0){
                                    if(yKing > j){
                                        let tmp = yKing - j,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i},${j+g}`);
                                            if(boardArray[i][j+g].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                    else{
                                        let tmp = j - yKing,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i},${j-g}`);
                                            if(boardArray[i][j-g].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                }
                                
                                if(yKing - j == 0){
                                    if(xKing > i){
                                        let tmp = i - xKing,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i+g},${j}`);
                                            if(boardArray[i+g][j].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                    else{
                                        let tmp = i - xKing,ch = 1;
                                        console.log(`${xKing},${yKing} - king`);
                                        for(let g = 1;g < tmp;g++){
                                            console.log(`${i+g},${j}`);
                                            if(boardArray[i-g][j].children.length == 1){
                                                ch = 0;
                                            }
                                        }
                                        if(ch == 1)
                                        boardArray[xKing][yKing].classList.add("shax");
                                    }
                                }
                                break;
                            }
                            default: console.log("error");
                        }
                    } 
                }
            }
        }
    }
}

////////////////////////////////////

////////////end popup////////////////////////

function endGame(){
    document.querySelector(".end_popup").style.display = "block";
    document.querySelector(".bg").style.display = "block";
    time(2,2);
    clearInterval(time);
    document.querySelector(".w_scor").innerHTML = score(1,"white",1);
    document.querySelector(".b_scor").innerHTML = score(1,"black",1);
    
    document.querySelector(".end").addEventListener("click", () =>{
        window.location.reload();
    });

    document.querySelector(".partiy").addEventListener("click", () =>{
        document.querySelector(".historyGame").style.display = "block";
    });


    document.querySelector(".bg").addEventListener("click", () =>{
        document.querySelector(".end_popup").style.display = "none";
        document.querySelector(".bg").style.display = "none";
        window.location.reload();
    });
}
////////////////////////////////////

function clearBoard(){
    for(let i = 0;i < 8;i++){
        for(let j = 0;j < 8;j++){
            if(boardArray[i][j].children.length == 1)
                boardArray[i][j].children[0].remove();
        }
    }
}

/////////////////////////////////////

function prepListHG(x,y,fig){
    let coordX = x
    let coordY;
    switch (y) {
    case 0:{
        coordY = "A";
        break;
    }
    case 1:{
        coordY = "B";
        break;
    }
    case 2:{
        coordY = "C";
        break;
    }
    case 3:{
        coordY = "D";
        break;
    }
    case 4:{
        coordY = "E";
        break;
    }
    case 5:{
        coordY = "F";
        break;
        }
    case 6:{
        coordY = "G";
        break;
    }
    case 7:{
        coordY = "H";
        break;
    }
    default: console.log("error");
    }
    let coord = coordY + "-" + coordX;
    historyList(fig,coord,"---");
}

const listHG = document.querySelector(".HG_list");
function historyList(x,y,z){
    let listItem = document.createElement('div');
    listItem.classList.add("list_item");
    let f_list= document.createElement('div');
    f_list.classList.add("HG_f_list");
    f_list.innerHTML = x;
    listItem.appendChild(f_list);
    let p_list= document.createElement('div');
    p_list.classList.add("HG_p_list");
    p_list.innerHTML = y;
    listItem.appendChild(p_list);
    let k_list= document.createElement('div');
    k_list.classList.add("HG_k_list");
    k_list.innerHTML = z;
    listItem.appendChild(k_list);
    listHG.appendChild(listItem); 
}