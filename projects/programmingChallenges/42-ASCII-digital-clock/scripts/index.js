window.onload = function () {
    let ASCII = [
        "#####--##--##--######", //0
        "-##---#---#---#--###", //1
        "####---#-##-#---####", //2
        "####---#--#----#####", //3
        "#---#---####---#---#", //4
        "#####---####---######", //5
        "#####---#####--######", //6
        "###---#---#---#---#-", //7
        "#####--#-##-#--#####", //8
        "#####--#####---#####", //9
    ];
    
    let ascii_row = 5;
    let ascii_col = 4;
    
    let clock = document.querySelector('.clock');

    drawASCII = (clockArray) => {
        let text = "";
        for(let i = 0; i<ascii_row; i++){
            for(let j = 0; j<clockArray.length; j++){
                let word = ASCII[clockArray[j]];
                for(let k = 0; k<ascii_col; k++){
                    text += '<div class="letter">'+ (word[k+i*4] != '-' ? '*' : ' ') +'</div>';
                }
                text += '<div class="spaceLetter"></div>';
                if(j == 1 || j == 3) {
                   text += '<div class="spaceLetter"></div>';
                }
            }
            text += "<br />";

        }
        clock.innerHTML = text;
    }
    
    updateTime = () => {
        let time = new Date();
        let hours = time.getHours() < 10 ? '0'+time.getHours() : time.getHours() ;
        let minutes = time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes();
        let seconds = time.getSeconds() < 10 ? '0'+time.getSeconds() : time.getSeconds();
        let h1 = Math.floor(time.getHours()/10 % 10);
        let h2 = time.getHours()%10;
        let m1 = Math.floor(time.getMinutes()/10 % 10);
        let m2 = time.getMinutes()%10;
        let s1 = Math.floor(time.getSeconds()/10 % 10);
        let s2 = time.getSeconds()%10;
        let clockArray = [h1, h2, m1, m2, s1, s2];
        drawASCII(clockArray);
    }
    
    setInterval(updateTime,1000);
    updateTime();
};
