        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = screen.width;
        canvas.height = screen.height;
        cw = canvas.width;
        ch = canvas.height;

        // main menu variables
        var boxColorTop = "white";
        var boxColorBot = "white";
        var boxTextColorTop = "black";
        var boxTextColorBot = "black";
        // -----------------
        let stage = 1;
        //----------
        var IconTab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        var squareTurn = [null, null, null, null, null, null, null, null, null];
        var turnSide = true; // true - circle , false - x
        //-------------
        var scoreX = 0;
        var scoreY = 0;
        //-------------
        var firstDelay = true;
        //-------------
        var xColor = "green";
        var oColor = "red";
        //responsive
        var mainTitleSize,
            menuBoxX,
            menuBoxY,
            buttonWidth,
            buttonHeight,
            fontSize;
        var gameBoardFirstVerticalX,
            gameBoardFirstVerticalY,
            gameBoardSecondVerticalX,
            gameBoardSecondVerticalY,
            gameBoardFirstHorizontalX,
            gameBoardFirstHorizontalY,
            gameBoardSecondHorizontalX,
            gameBoardSecondHorizontalY,
            gameBoardWidth,
            gameBoardHeight;
        var gameSquareSize;
        //---------------
        var topGameMenuX,
            topGameMenuY,
            topMenuFont;
        //---------------
        var scoreFontSize,
            xPlayerTitleX,
            xPlayerTitleY,
            oPlayerTitleX,
            oPlayerTitleY,
            xScoreX,
            xScoreY,
            oScoreX,
            oScoreY;
        //---------------
        var backIconFont,
            backIconX,
            backIconY,
            backIconWidth;
        //---------------
        var IconSize,
            Icon1X,
            Icon1Y,
            Icon2X,
            Icon2Y,
            Icon3X,
            Icon3Y,
            Icon4X,
            Icon4Y,
            Icon5X,
            Icon5Y,
            Icon6X,
            Icon6Y,
            Icon7X,
            Icon7Y,
            Icon8X,
            Icon8Y,
            Icon9X,
            Icon9Y;
        // media responsible 
        mainTitleSize = 45 + "px Arial";
        buttonWidth = 250;
        buttonHeight = 70;
        menuBoxX = cw / 2 - buttonWidth / 2;
        menuBoxY = 170;
        fontSize = 30;
        //--------------
        gameSquareSize = 80;
        gameBoardWidth = 5;
        gameBoardHeight = 3 * gameSquareSize + 3 * gameBoardWidth;
        gameBoardFirstVerticalX = (cw / 2) - (gameSquareSize / 2) - gameBoardWidth;
        gameBoardFirstVerticalY = 110;
        gameBoardSecondVerticalX = gameBoardFirstVerticalX + gameSquareSize + gameBoardWidth;
        gameBoardSecondVerticalY = gameBoardFirstVerticalY;
        gameBoardFirstHorizontalX = (cw / 2) - (1.5 * gameSquareSize) - gameBoardWidth;
        gameBoardFirstHorizontalY = gameBoardFirstVerticalY + gameSquareSize;
        gameBoardSecondHorizontalX = gameBoardFirstHorizontalX;
        gameBoardSecondHorizontalY = gameBoardFirstHorizontalY + gameSquareSize + gameBoardWidth;
        //----------------
        topMenuFont = 30;
        topGameMenuY = 70;
        topGameMenuX = cw / 2;
        //----------------
        scoreTitlesFontSize = 36;
        xPlayerTitleX = 10;
        xPlayerTitleY = ch - 110;
        oPlayerTitleX = cw - 10;
        oPlayerTitleY = xPlayerTitleY;
        ScoresFont = 56;
        xScoreX = 75;
        xScoreY = xPlayerTitleY + 55;
        oScoreX = cw - xScoreX;
        oScoreY = xScoreY;
        //----------------
        backIconFont = 24;
        backIconX = 10;
        backIconY = 24;
        //----------------
        IconSize = 68;
        Icon1X = gameBoardFirstHorizontalX + gameSquareSize * 0.5;
        Icon1Y = gameBoardFirstHorizontalY - 0.2 * IconSize;
        Icon2X = gameBoardFirstHorizontalX + gameSquareSize * 1.5 + gameBoardWidth;
        Icon2Y = Icon1Y;
        Icon3X = gameBoardFirstHorizontalX + gameSquareSize * 2.5 + 2 * gameBoardWidth;
        Icon3Y = Icon1Y;

        //---

        Icon4X = gameBoardFirstHorizontalX + gameSquareSize * 0.5;
        Icon4Y = gameBoardSecondHorizontalY - 0.2 * IconSize;
        Icon5X = gameBoardFirstHorizontalX + gameSquareSize * 1.5 + gameBoardWidth;
        Icon5Y = Icon4Y;
        Icon6X = gameBoardFirstHorizontalX + gameSquareSize * 2.5 + 2 * gameBoardWidth;
        Icon6Y = Icon4Y;

        //---

        Icon7X = gameBoardFirstHorizontalX + gameSquareSize * 0.5;
        Icon7Y = gameBoardSecondHorizontalY - 0.2 * IconSize + gameSquareSize + gameBoardWidth;
        Icon8X = gameBoardFirstHorizontalX + gameSquareSize * 1.5 + gameBoardWidth;
        Icon8Y = Icon7Y;
        Icon9X = gameBoardFirstHorizontalX + gameSquareSize * 2.5 + 2 * gameBoardWidth;
        Icon9Y = Icon7Y;

        //---------
        if (ch > 600) {

            xPlayerTitleX = 20;
            xPlayerTitleY = ch - 200;
            oPlayerTitleX = cw - 20;
            oPlayerTitleY = xPlayerTitleY;
            ScoresFont = 56;
            xScoreX = 85;
            xScoreY = xPlayerTitleY + 55;
            oScoreX = cw - xScoreX;
            oScoreY = xScoreY;
        }
        if (ch > 1000) {

            mainTitleSize = 85 + "px Arial";
            buttonWidth = 400;
            buttonHeight = 70;
            menuBoxX = cw / 2 - buttonWidth / 2;
            menuBoxY = 170;
            fontSize = 30;
            //--------------
            gameSquareSize = 150;
            gameBoardWidth = 5;
            gameBoardHeight = 3 * gameSquareSize + 3 * gameBoardWidth;
            gameBoardFirstVerticalX = (cw / 2) - (gameSquareSize / 2) - gameBoardWidth;
            gameBoardFirstVerticalY = 180;
            gameBoardSecondVerticalX = gameBoardFirstVerticalX + gameSquareSize + gameBoardWidth;
            gameBoardSecondVerticalY = gameBoardFirstVerticalY;
            gameBoardFirstHorizontalX = (cw / 2) - (1.5 * gameSquareSize) - gameBoardWidth;
            gameBoardFirstHorizontalY = gameBoardFirstVerticalY + gameSquareSize;
            gameBoardSecondHorizontalX = gameBoardFirstHorizontalX;
            gameBoardSecondHorizontalY = gameBoardFirstHorizontalY + gameSquareSize + gameBoardWidth;
            //----------------
            topMenuFont = 50;
            topGameMenuY = 100;
            topGameMenuX = cw / 2;
            //----------------

            scoreTitlesFontSize = 50;
            xPlayerTitleX = 50;
            xPlayerTitleY = ch - 200;
            oPlayerTitleX = cw - xPlayerTitleX;
            oPlayerTitleY = xPlayerTitleY;
            ScoresFont = 56;
            xScoreX = xPlayerTitleX + 88;
            xScoreY = xPlayerTitleY + 60;
            oScoreX = cw - xScoreX;
            oScoreY = xScoreY;
            //----------------
            backIconFont = 34;
            backIconX = 10;
            backIconY = backIconFont;
            //----------------
            IconSize = 130;
            Icon1X = gameBoardFirstHorizontalX + gameSquareSize * 0.5;
            Icon1Y = gameBoardFirstHorizontalY - 0.2 * IconSize;
            Icon2X = gameBoardFirstHorizontalX + gameSquareSize * 1.5 + gameBoardWidth;
            Icon2Y = Icon1Y;
            Icon3X = gameBoardFirstHorizontalX + gameSquareSize * 2.5 + 2 * gameBoardWidth;
            Icon3Y = Icon1Y;
            //---
            Icon4X = gameBoardFirstHorizontalX + gameSquareSize * 0.5;
            Icon4Y = gameBoardSecondHorizontalY - 0.2 * IconSize;
            Icon5X = gameBoardFirstHorizontalX + gameSquareSize * 1.5 + gameBoardWidth;
            Icon5Y = Icon4Y;
            Icon6X = gameBoardFirstHorizontalX + gameSquareSize * 2.5 + 2 * gameBoardWidth;
            Icon6Y = Icon4Y;
            //---
            Icon7X = gameBoardFirstHorizontalX + gameSquareSize * 0.5;
            Icon7Y = gameBoardSecondHorizontalY - 0.2 * IconSize + gameSquareSize + gameBoardWidth;
            Icon8X = gameBoardFirstHorizontalX + gameSquareSize * 1.5 + gameBoardWidth;
            Icon8Y = Icon7Y;
            Icon9X = gameBoardFirstHorizontalX + gameSquareSize * 2.5 + 2 * gameBoardWidth;
            Icon9Y = Icon7Y;
        }


        function drawIcon() {
            ctx.fillStyle = "white";
            ctx.font = IconSize + "px Arial";
            ctx.textAlign = "center";
            //first 3 square
            if (IconTab[0] == 1) {
                if (squareTurn[0] == null) {
                    squareTurn[0] = turnSide;
                }
                if (squareTurn[0]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon1X, Icon1Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon1X, Icon1Y);
                }
            }
            if (IconTab[1] == 1) {
                if (squareTurn[1] == null) {
                    squareTurn[1] = turnSide;
                }
                if (squareTurn[1]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon2X, Icon2Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon2X, Icon2Y);
                }
            }
            if (IconTab[2] == 1) {
                if (squareTurn[2] == null) {
                    squareTurn[2] = turnSide;
                }
                if (squareTurn[2]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon3X, Icon3Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon3X, Icon3Y);
                }
            }
            //second 3 square
            if (IconTab[3] == 1) {
                if (squareTurn[3] == null) {
                    squareTurn[3] = turnSide;
                }
                if (squareTurn[3]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon4X, Icon4Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon4X, Icon4Y);
                }
            }
            if (IconTab[4] == 1) {
                if (squareTurn[4] == null) {
                    squareTurn[4] = turnSide;
                }
                if (squareTurn[4]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon5X, Icon5Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon5X, Icon5Y);
                }
            }
            if (IconTab[5] == 1) {
                if (squareTurn[5] == null) {
                    squareTurn[5] = turnSide;
                }
                if (squareTurn[5]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon6X, Icon6Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon6X, Icon6Y);
                }
            }
            //third 3 square
            if (IconTab[6] == 1) {
                if (squareTurn[6] == null) {
                    squareTurn[6] = turnSide;
                }
                if (squareTurn[6]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon7X, Icon7Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon7X, Icon7Y);
                }
            }
            if (IconTab[7] == 1) {
                if (squareTurn[7] == null) {
                    squareTurn[7] = turnSide;
                }
                if (squareTurn[7]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon8X, Icon8Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon8X, Icon8Y);
                }
            }
            if (IconTab[8] == 1) {
                if (squareTurn[8] == null) {
                    squareTurn[8] = turnSide;
                }
                if (squareTurn[8]) {
                    ctx.fillStyle = xColor;
                    ctx.fillText("X", Icon9X, Icon9Y);
                } else {
                    ctx.fillStyle = oColor;
                    ctx.fillText("O", Icon9X, Icon9Y);
                }
            }
        }

        function drawBackIcon() {
            ctx.fillStyle = 'white';
            ctx.font = backIconFont + "px Arial";
            ctx.textAlign = "left";
            let txt = "< menu";
            backIconWidth = ctx.measureText(txt).width;
            ctx.fillText(txt, backIconX, backIconY);
        }

        function showScore() {
            ctx.font = scoreTitlesFontSize + "px Arial";
            ctx.fillStyle = xColor;
            ctx.textAlign = "left";
            ctx.fillText("Gracz X", xPlayerTitleX, xPlayerTitleY);
            ctx.textAlign = "right";
            ctx.fillStyle = oColor;
            ctx.fillText("Gracz O", oPlayerTitleX, oPlayerTitleY);
            ctx.textAlign = "center";
            ctx.fillStyle = 'white';
            ctx.font = ScoresFont + "px Arial";
            ctx.fillText(scoreX, xScoreX, xScoreY);
            ctx.fillText(scoreY, oScoreX, oScoreY);
        }

        function topMenu() {
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.font = topMenuFont + "px Arial";
            if (!turnSide)
                ctx.fillText("runda gracza : X", topGameMenuX, topGameMenuY);
            else
                ctx.fillText("runda gracza : O", topGameMenuX, topGameMenuY);
        }
        // create start board fill by a black color;
        function board() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, cw, ch);
        }
        // draw main menu buttons and make their hover state
        function mainMenu() {
            ctx.fillStyle = "white";
            ctx.font = mainTitleSize;
            ctx.textAlign = "center";
            ctx.fillText("Tic Tac Toe", cw / 2, 100);
            ctx.fillStyle = boxColorTop;
            ctx.fillRect(menuBoxX, menuBoxY, buttonWidth, buttonHeight);
            ctx.fillStyle = boxColorBot;
            ctx.fillRect(menuBoxX, menuBoxY + buttonHeight * 2, buttonWidth, buttonHeight);
            ctx.fillStyle = boxTextColorTop;
            ctx.font = fontSize + "px Arial";
            ctx.fillText("Player vs Player", cw / 2, menuBoxY + buttonHeight - fontSize * 0.8);
            ctx.fillStyle = boxTextColorBot;
            ctx.fillText("Player vs Comp", cw / 2, menuBoxY + buttonHeight * 3 - fontSize * 0.8);
        }

        function mainMenuOption(e) {

            //-----------------------
            var flagA = false;
            var flagB = false;
            if (e.clientX >= menuBoxX &&
                e.clientX <= menuBoxX + buttonWidth &&
                e.clientY >= menuBoxY &&
                e.clientY <= menuBoxY + buttonHeight
            ) {
                boxColorTop = "red";
                boxTextColorTop = "white";
                flagA = true;
            } else {
                boxColorTop = "white";
                boxTextColorTop = "black";
                flagA = false;
            }
            if (e.clientX >= menuBoxX &&
                e.clientX <= menuBoxX + buttonWidth &&
                e.clientY >= menuBoxY + buttonHeight * 2 &&
                e.clientY <= menuBoxY + buttonHeight * 3
            ) {
                boxColorBot = "red";
                boxTextColorBot = "white";
                flagB = true;
            } else {
                boxColorBot = "white";
                boxTextColorBot = "black";
                flagB = false;
            }
            if ((flagA || flagB) && stage == 1) {
                canvas.style.cursor = "pointer";
            } else {
                canvas.style.cursor = "context-menu";
            }
        }

        function changeStage(e) {
            if (e.clientX >= menuBoxX &&
                e.clientX <= menuBoxX + buttonWidth &&
                e.clientY >= menuBoxY &&
                e.clientY <= menuBoxY + buttonHeight
            ) {
                stage = 2;
            }
            if (e.clientX >= menuBoxX &&
                e.clientX <= menuBoxX + buttonWidth &&
                e.clientY >= menuBoxY + buttonHeight * 2 &&
                e.clientY <= menuBoxY + buttonHeight * 3
            ) {
                stage = 3;
            }
        }

        function gameBoard() {
            ctx.fillStyle = "white";
            //vertical
            ctx.fillRect(gameBoardFirstVerticalX, gameBoardFirstVerticalY, gameBoardWidth, gameBoardHeight);
            ctx.fillRect(gameBoardSecondVerticalX, gameBoardSecondVerticalY, gameBoardWidth, gameBoardHeight);
            //horizontal
            ctx.fillRect(gameBoardFirstHorizontalX, gameBoardFirstHorizontalY, gameBoardHeight, gameBoardWidth);
            ctx.fillRect(gameBoardSecondHorizontalX, gameBoardSecondHorizontalY, gameBoardHeight, gameBoardWidth);
        }

        function chooseSquare(e) {
            // first 3 square
            if (e.clientX >= gameBoardFirstHorizontalX &&
                e.clientX <= gameBoardFirstHorizontalX + gameSquareSize &&
                e.clientY >= gameBoardFirstVerticalY &&
                e.clientY <= gameBoardFirstVerticalY + gameSquareSize
            ) {
                if (IconTab[0] == 0) {

                    IconTab[0] = 1;
                    turnSide = !turnSide;
                }
            } else
            if (e.clientX >= gameBoardFirstHorizontalX + gameSquareSize + gameBoardWidth &&
                e.clientX <= gameBoardFirstHorizontalX + 2 * gameSquareSize + gameBoardWidth &&
                e.clientY >= gameBoardFirstVerticalY &&
                e.clientY <= gameBoardFirstVerticalY + gameSquareSize
            ) {
                if (IconTab[1] == 0) {

                    IconTab[1] = 1;
                    turnSide = !turnSide;
                }
            } else
            if (e.clientX >= gameBoardFirstHorizontalX + 2 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientX <= gameBoardFirstHorizontalX + 3 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientY >= gameBoardFirstVerticalY &&
                e.clientY <= gameBoardFirstVerticalY + gameSquareSize
            ) {
                if (IconTab[2] == 0) {

                    IconTab[2] = 1;
                    turnSide = !turnSide;
                }
            }
            // second 3 square
            else if (e.clientX >= gameBoardFirstHorizontalX &&
                e.clientX <= gameBoardFirstHorizontalX + gameSquareSize &&
                e.clientY >= gameBoardFirstVerticalY + gameSquareSize + gameBoardWidth &&
                e.clientY <= gameBoardFirstVerticalY + 2 * gameSquareSize + gameBoardWidth
            ) {
                if (IconTab[3] == 0) {

                    IconTab[3] = 1;
                    turnSide = !turnSide;
                }
            } else
            if (e.clientX >= gameBoardFirstHorizontalX + gameSquareSize + gameBoardWidth &&
                e.clientX <= gameBoardFirstHorizontalX + 2 * gameSquareSize + gameBoardWidth &&
                e.clientY >= gameBoardFirstVerticalY + gameSquareSize + gameBoardWidth &&
                e.clientY <= gameBoardFirstVerticalY + 2 * gameSquareSize + gameBoardWidth
            ) {
                if (IconTab[4] == 0) {

                    IconTab[4] = 1;
                    turnSide = !turnSide;
                }
            } else
            if (e.clientX >= gameBoardFirstHorizontalX + 2 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientX <= gameBoardFirstHorizontalX + 3 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientY >= gameBoardFirstVerticalY + gameSquareSize + gameBoardWidth &&
                e.clientY <= gameBoardFirstVerticalY + 2 * gameSquareSize + gameBoardWidth
            ) {
                if (IconTab[5] == 0) {

                    IconTab[5] = 1;
                    turnSide = !turnSide;
                }
            }
            // third 3 square
            else if (e.clientX >= gameBoardFirstHorizontalX &&
                e.clientX <= gameBoardFirstHorizontalX + gameSquareSize &&
                e.clientY >= gameBoardFirstVerticalY + 2 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientY <= gameBoardFirstVerticalY + 3 * gameSquareSize + 2 * gameBoardWidth
            ) {
                if (IconTab[6] == 0) {

                    IconTab[6] = 1;
                    turnSide = !turnSide;
                }
            } else
            if (e.clientX >= gameBoardFirstHorizontalX + gameSquareSize + gameBoardWidth &&
                e.clientX <= gameBoardFirstHorizontalX + 2 * gameSquareSize + gameBoardWidth &&
                e.clientY >= gameBoardFirstVerticalY + 2 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientY <= gameBoardFirstVerticalY + 3 * gameSquareSize + 2 * gameBoardWidth
            ) {
                if (IconTab[7] == 0) {

                    IconTab[7] = 1;
                    turnSide = !turnSide;
                }
            } else
            if (e.clientX >= gameBoardFirstHorizontalX + 2 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientX <= gameBoardFirstHorizontalX + 3 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientY >= gameBoardFirstVerticalY + 2 * gameSquareSize + 2 * gameBoardWidth &&
                e.clientY <= gameBoardFirstVerticalY + 3 * gameSquareSize + 2 * gameBoardWidth
            ) {
                if (IconTab[8] == 0) {

                    IconTab[8] = 1;
                    turnSide = !turnSide;
                }
            }
            // back to main menu button
            if (e.clientX >= backIconX &&
                e.clientX <= backIconX + backIconWidth &&
                e.clientY >= backIconY - backIconFont &&
                e.clientY <= backIconY + 10
            ) goBack();

        }

        function winner(con) {
            con ? scoreX++ : scoreY++;
            IconTab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            squareTurn = [null, null, null, null, null, null, null, null, null];
        }

        function checkWin() {
            var con = true;
            if (squareTurn[0] == con && squareTurn[1] == con && squareTurn[2] == con) winner(con);
            else
            if (squareTurn[3] == con && squareTurn[4] == con && squareTurn[5] == con) winner(con);
            else
            if (squareTurn[6] == con && squareTurn[7] == con && squareTurn[8] == con) winner(con);
            else
            if (squareTurn[0] == con && squareTurn[3] == con && squareTurn[6] == con) winner(con);
            else
            if (squareTurn[1] == con && squareTurn[4] == con && squareTurn[7] == con) winner(con);
            else
            if (squareTurn[2] == con && squareTurn[5] == con && squareTurn[8] == con) winner(con);
            else
            if (squareTurn[0] == con && squareTurn[4] == con && squareTurn[8] == con) winner(con);
            else
            if (squareTurn[2] == con && squareTurn[4] == con && squareTurn[6] == con) winner(con);
            con = false;
            if (squareTurn[0] == con && squareTurn[1] == con && squareTurn[2] == con) winner(con);
            else
            if (squareTurn[3] == con && squareTurn[4] == con && squareTurn[5] == con) winner(con);
            else
            if (squareTurn[6] == con && squareTurn[7] == con && squareTurn[8] == con) winner(con);
            else
            if (squareTurn[0] == con && squareTurn[3] == con && squareTurn[6] == con) winner(con);
            else
            if (squareTurn[1] == con && squareTurn[4] == con && squareTurn[7] == con) winner(con);
            else
            if (squareTurn[2] == con && squareTurn[5] == con && squareTurn[8] == con) winner(con);
            else
            if (squareTurn[0] == con && squareTurn[4] == con && squareTurn[8] == con) winner(con);
            else
            if (squareTurn[2] == con && squareTurn[4] == con && squareTurn[6] == con) winner(con);
            else {
                var check = true;
                for (var i = 0; i <= 8; i++) {
                    squareTurn[i] == null ? check = false : null;

                }
                if (check) {
                    IconTab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                    squareTurn = [null, null, null, null, null, null, null, null, null];
                }
            }
        }

        function goBack() {

            stage = 1;
            IconTab = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            squareTurn = [null, null, null, null, null, null, null, null, null];
            scoreX = 0;
            scoreY = 0;
            turnSide = true;
            firstDelay = true;
            canvas.removeEventListener("mousedown", chooseSquare);

        }

        function computerAI() {
            var checkSlot = false;
            for (var i = 0; i <= 8; i++) {
                if (IconTab[i] == 0) {
                    checkSlot = true;
                }
            }
            while (checkSlot) {
                var random = Math.floor(Math.random() * 8) + 0;

                if (IconTab[random] == 0) {
                    IconTab[random] = 1;
                    turnSide = !turnSide;
                    break;
                }
            }
        }

        function setEvents() {
            canvas.removeEventListener("mousedown", changeStage);
            canvas.addEventListener("click", chooseSquare);
        }

        function game() {

            if (stage == 1) {
                board();
                // main menu
                mainMenu();
                canvas.addEventListener("mousemove", mainMenuOption);
                canvas.addEventListener("mousedown", changeStage);
                firstDelay = true;
            } else if (stage == 2) {

                if (firstDelay == true) {

                    setTimeout(setEvents, 150);
                    firstDelay = false;
                }
                board();
                //player vs player
                drawBackIcon();
                gameBoard();
                drawIcon();
                topMenu();
                showScore();
                checkWin();
            } else // stage == 3
            {

                canvas.removeEventListener("mousedown", changeStage);
                board();
                //player vs computer
                drawBackIcon();
                gameBoard();
                drawIcon();
                topMenu();
                showScore();
                checkWin();
                if (turnSide == true) {
                    canvas.addEventListener("click", chooseSquare);
                }
                if (turnSide == false) {
                    canvas.removeEventListener("click", chooseSquare);
                    turnSide = null;
                    setTimeout(computerAI, 800);
                }

            }
        }
        //init
        setInterval(game, 1000 / 60);
