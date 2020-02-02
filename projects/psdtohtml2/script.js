    $(document).ready(function () {
        $('body').fadeIn(600);

        $('.aboutMe').click(changePanel);
        $('.message').click(changePanel);
        $('.addFriend').click(changePanel);

        $('.genderMale').click(changeGender);
        $('.genderFemale').click(changeGender);

        function changePanel() {
            $('.aboutMe').removeClass("activeTitle");
            $('.message').removeClass("activeTitle");
            $('.addFriend').removeClass("activeTitle");

            $(this).addClass("activeTitle");

            $('.aboutMe-panel').removeClass("activePanel");
            $('.message-panel').removeClass("activePanel");
            $('.addFriend-panel').removeClass("activePanel");

            if ($(this).hasClass("aboutMe")) {
                $('.aboutMe-panel').addClass("activePanel");
            } else
            if ($(this).hasClass("message")) {
                $('.message-panel').addClass("activePanel");
            } else
            if ($(this).hasClass("addFriend")) {
                $('.addFriend-panel').addClass("activePanel");
            }
        }

        function changeGender() {
            if ($(this).hasClass("genderMale")) {
                $(this).removeClass('genderMale');
                $(this).addClass('genderFemale');
                $(this).text("Female");
            }else{
                $(this).removeClass('genderFemale');
                $(this).addClass('genderMale');
                $(this).text("Male");
            }
        }
    });
