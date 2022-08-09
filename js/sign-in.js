var Floaty = function Floaty() {
    function onFocus1() {
        setLabelActive1(this.floatingLabel);
    }

    function onBlur1() {
        setLabel1(this);
    }

    function setLabelActive1(label) {
        label.classList.add('floating-label-active');
    }

    function setLabelInactive1(label) {
        label.classList.remove('floating-label-active');
    }

    function setLabel1() {
        var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (input.value && input.value.length) {
            setLabelActive1(input.floatingLabel);
        } else {
            setLabelInactive1(input.floatingLabel);
        }
    }

    var allInputs = document.querySelectorAll('.reg-input');
    allInputs.forEach(function (input) {
        var currentInput = input
        var currentLabel = currentInput.nextElementSibling;
        input.floatingLabel = currentLabel;
        input.addEventListener('focus', onFocus1);
        input.addEventListener('blur', onBlur1);
        setLabel1(input);
    });
};

// const signinMain = document.getElementById('sign-in-html')
// var observer = new MutationObserver(function(event) {
//     Floaty();
// })
// observer.observe(signinMain, {
//     attributes: false,
//     childList: true,
//     characterData: true
// })

// document.addEventListener('DOMContentLoaded', function () {
//     Floaty();
// });
Floaty();


function floatyLabel() {
    console.log("change select")
}

/* Button eye toggle and change type input */
function toogleTypeInputEye1(inputPassId, eyeToogleId) {
    try{
        const eyeToogle = document.getElementById(eyeToogleId);
        const inputPass = document.getElementById(inputPassId);
        if(inputPass.type === 'password') {
            inputPass.type = 'text'
            eyeToogle.classList.add('show');
        } else {
            inputPass.type = 'password'
            eyeToogle.classList.remove('show');
        }
    } catch(err) {
        console.log(err)
    }
}


/* Button popup */
function openPopup() {
    if(!dropPopup.classList.contains('open-popup')) {
        dropPopup.classList.add('open-popup')
    } else {
        dropPopup.classList.remove('open-popup')
    }
}
if(document.getElementById('btn-dropdwon') 
&& document.getElementById('btn-dropdwon').length > 0
&& document.getElementById('reg-popup-dropdown') 
&& document.getElementById('reg-popup-dropdown').length > 0 
&& document.getElementById('reg-btn-close') 
&& document.getElementById('reg-btn-close').length > 0) {
    const buttonPopup = document.getElementById('btn-dropdwon');
    const dropPopup = document.getElementById('reg-popup-dropdown');
    const buttonClosePopup = document.getElementById('reg-btn-close');
    buttonPopup.addEventListener('click', openPopup(dropPopup));
    buttonClosePopup.addEventListener('click', openPopup(dropPopup));
}

