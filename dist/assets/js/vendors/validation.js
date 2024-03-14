(() => {
    "use strict"; var a = document.querySelectorAll(".needs-validation");
    Array.from(a).forEach(e => {
        e.addEventListener("submit", a => {
            e.checkValidity() || (a.preventDefault(), a.stopPropagation()),
                e.classList.add("was-validated")
        }, !1)
    })
})();
//eye and eye-slash changing button
console.log(document.querySelector("#email"));
//eye and eye-slash changing button
function showPass(selectedInput) {
    var x = document.getElementById(selectedInput);
  
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("eyeShow").style.display = "none";
      document.getElementById("eyeClose").style.display = "block";
    } else {
      x.type = "password";
      document.getElementById("eyeShow").style.display = "block";
      document.getElementById("eyeClose").style.display = "none";
    }
  }
//
function Validator(option) {
    var formElement = document.querySelector(option.form);
    console.log(formElement);
    var selectorRules = {};
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
        };
        option.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            if (inputElement) {
                inputElement.onblur = function () {
                    // console.dir("blurrr");
                    var rules = selectorRules[rule.selector];
                    for (var i = 0; i < rules.length; ++i) {
                        switch (inputElement.type) {
                            case "radio":
                            case "checkbox":
                                errorMessage = rules[i](
                                    formElement.querySelector(rule.selector + ":checked")
                                );
                                break;
                            default:
                                errorMessage = rules[i](inputElement.value); // tương đương var errorMessage = rule.test(inputElement.value)
                        }
                        if (errorMessage) break;
                    }
                    if (errorMessage) {
                        var errorElement = inputElement.parentElement.querySelector(
                            option.errorSelector
                        );
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add("invalid");
                    }
                };

                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelectorAll(
                        option.errorSelector
                    );
                    console.log(errorElement);
                    errorElement.innerText = "";
                    inputElement.parentElement.classList.remove("invalid");
                };
            }
        });
    }
}
document.getElementById("submit_btn").addEventListener("click", function () {
    var formElement = document.querySelector("#form-1");
    var inputElement = formElement.querySelectorAll("input");
    var errorElement = formElement.querySelectorAll(".form-message");
    for (var i = 0; i < inputElement.length; i++) {
        inputElement[i].onblur();
    }
    for (var i = 0; i < errorElement.length; i++) {
        if (errorElement[i].innerText) {
            return;
        }
    }
    alert("Form is valid");
});

//rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "Please fill the blank";
        },
    };
};
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(value) ? undefined : "Mandatory email form";
        },
    };
};
Validator.isPassword = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            return regex.test(value)
                ? undefined
                : "Password at least 8 characters, including letters and numbers, no special characters";
        },
    };
};
Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue()
                ? undefined
                : message || "Invalid value";
        },
    };
};
// validator
Validator({
    form: "#form-1",
    errorSelector: ".form-message",
    rules: [
        Validator.isRequired("#username"),
        Validator.isRequired("#email"),
        Validator.isRequired("#password"),
        Validator.isRequired("#password_confirmation"),
        Validator.isEmail("#email"),
        Validator.isPassword("#password"),
        Validator.isConfirmed(
            "#password_confirmation",
            function () {
                return document.querySelector("#form-1 #password").value;
            },
            "The password is incorrect"
        ),
    ],
});

//
