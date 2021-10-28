// $("#add").click(function() {
//     var input1 = $("#input1");
//     var input2 = $("#input2");
//     if (input1.val() && input2.val()) {
//         addition = (parseInt(input1.val()) + parseInt(input2.val()));

//         tRow="<tr><td>"+input1.val()+"</td><td> + </td><td>"+input2.val()+"</td><td>"+addition+"</td></tr>";
//         $("#table1").append(tRow);
//         storage.setItem(i, input1.val()+"+"+input2.val()+"="+addition);
//         i++;
//     }

//     input1.val("");
//     input2.val("");
// });

// $("#substract")
// .click(function() {
//     var input1 = $("#input1");
//     var input2 = $("#input2");

//     if (input1.val() && input2.val()) {
//         subtraction = (parseInt(input1.val()) - parseInt(input2.val()));

//         tRow="<tr><td>"+input1.val()+"</td><td> - </td><td>"+input2.val()+"</td><td>"+subtraction+"</td></tr>";
//         $("#table1").append(tRow);

//         storage.setItem(i, input1.val()+"-"+input2.val()+"="+subtraction);
//         i++;
//     }

//     input1.val("");
//     input2.val("");
// });

// $("#multiply")
// .click(function() {
//     var input1 = $("#input1");
//     var input2 = $("#input2");

//     if (input1.val() && input2.val()) {
//         moltiplication = (parseInt(input1.val()) * parseInt(input2.val()));

//         tRow="<tr><td>"+input1.val()+"</td><td> * </td><td>"+input2.val()+"</td><td>"+moltiplication+"</td></tr>";
//         $("#table1").append(tRow);

//         storage.setItem(i, input1.val()+"*"+input2.val()+"="+moltiplication);
//         i++;
//     }

//     input1.val("");
//     input2.val("");
// });

// $("#divide")
// .click(function() {
//     var input1 = $("#input1");
//     var input2 = $("#input2");

//     if (input1.val() && input2.val()) {
//         division = (parseInt(input1.val()) / parseInt(input2.val()));

//         tRow="<tr><td>"+input1.val()+"</td><td> / </td><td>"+input2.val()+"</td><td>"+division+"</td></tr>";
//         $("#table1").append(tRow);

//         storage.setItem(i, input1.val()+"/"+input2.val()+"="+division);
//         i++;
//     }

//     input1.val("");
//     input2.val("");
// });

$("button").click(function() {
    var sign = $(this).val();

    var input1 = $("#input1");
    var input2 = $("#input2");

    if (input1.val() && input2.val()) {
        switch(sign) {
            case "+":
                result = (parseInt(input1.val()) + parseInt(input2.val()));
                break;

            case "-":
                result = (parseInt(input1.val()) - parseInt(input2.val()));
                break;

            case "*":
                result = (parseInt(input1.val()) * parseInt(input2.val()));
            break;

            case "/":
                result = (parseInt(input1.val()) / parseInt(input2.val()));
                break;
        }

        tRow="<tr><td>"+input1.val()+"</td><td>"+sign+"</td><td>"+input2.val()+"</td><td>"+result+"</td></tr>";
        $("#table1").append(tRow);
        storage.setItem(i, input1.val()+sign+input2.val()+"="+result);
        i++;
    }

    input1.val("");
    input2.val("");
});