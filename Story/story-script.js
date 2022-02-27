// ---------------------------------------------------------------------- VARIABLES ----------------------------------------------------------------------

var risky = "risk-slider";
var uncertain = "uncertainty-slider";
var repeat = "repetition-slider";
var form = document.getElementById("sliders-form");
var sp;
var message;

// ---------------------------------------------------------------------- FUNCTIONS ----------------------------------------------------------------------

function getSP(SP) {
    document.getElementById("result-message").innerHTML = SP;
}

function getMessage(message) {
    document.getElementById("result-message").className = message;
}

function aAssessmentFunction(a) {
    var x = document.getElementById(a).value;
    if (x < 1) {
        this.className = "default";
    } else if (x <= 1.5) {
        this.className = "green";
    } else if (x == 3) {
        this.className = "amber";
    } else {
        this.className = "red";
    }
}

function bAssessmentFunction(b) {
    var x = document.getElementById(b).value;
    if (x < 1) {
        this.className = "default";
    } else if (x <= 3) {
        this.className = "green";
    } else if (x == 6) {
        this.className = "amber";
    } else {
        this.className = "red";
    }
}

function cAssessmentFunction(c) {
    var x = document.getElementById(c).value;
    if (x < 1) {
        this.className = "default";
    } else if (x <= 1) {
        this.className = "green";
    } else if (x == 2) {
        this.className = "amber";
    } else {
        this.className = "red";
    }
}

function highlight(score) {
    document.getElementById(score).className = "highlight";
}

function clearHighlight() {
    document.getElementById("sp1").className = "";
    document.getElementById("sp2").className = "";
    document.getElementById("sp3").className = "";
    document.getElementById("sp5").className = "";
    document.getElementById("sp8").className = "";
    document.getElementById("result-message").className = "";
}

// ---------------------------------------------------------------------- THUMB STYLE ----------------------------------------------------------------------

document.getElementById(risky).addEventListener("change", function() {
    aAssessmentFunction.call(this, "risk-output");
});

document.getElementById(uncertain).addEventListener("change", function() {
    bAssessmentFunction.call(this, "uncertainty-output");
});

document.getElementById(repeat).addEventListener("change", function() {
    cAssessmentFunction.call(this, "repetition-output");
});

// ---------------------------------------------------------------------- CALCULATION ----------------------------------------------------------------------

form.addEventListener("submit", function(event) {
    event.preventDefault();
    clearHighlight();
    var risk = document.getElementById("risk-output").innerHTML;
    var uncertainty = document.getElementById("uncertainty-output").innerHTML;
    var repetition = document.getElementById("repetition-output").innerHTML;
    var total = parseFloat(risk) + parseFloat(uncertainty) + parseFloat(repetition);
    if (total <= 1.5) {
        sp = 1;
    } else if (total <= 2.5) {
        sp = 2;
    } else if (total <= 3.5) {
        sp = 3;
    } else if (total <= 5.5) {
        sp = 5;
    } else if (total <= 8) {
        sp = 8;
    } else {
        sp = 100;
    }
    theMessage(sp);
    document.getElementById("result-message").innerHTML = message;
});

function theMessage() {
    if (sp == 1) {
        message = "1 Story Point";
        highlight("sp1");
    } else if (sp == 2) {
        message = "2 Story Points";
        highlight("sp2");
    } else if (sp == 3) {
        message = "3 Story Points";
        highlight("sp3");
    } else if (sp == 5) {
        message = "5 Story Points";
        highlight("sp5");
    } else if (sp == 8) {
        message = "8 Story Points";
        highlight("sp8");
    } else {
        message = "Break it Down!";
        document.getElementById("result-message").className = "flashit";
    }
}