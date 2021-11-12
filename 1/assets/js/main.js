document.getElementById("pass2").onchange = () => {
    if (
        document.getElementById("pass2").value !=
        document.getElementById("pass1").value
    ) {
        alert("Пароли различаются");
    }
    document.getElementById("pass1").onchange = () => {
        if (
            document.getElementById("pass2").value !=
            document.getElementById("pass1").value
        ) {
            alert("Пароли различаются");
        }
    };
};

document.getElementById("city").onchange = () => {
    var regex = /\d/g;
    if (regex.test(document.getElementById("city").value)) {
        alert("Уберите числа из названия города");
    }
};
