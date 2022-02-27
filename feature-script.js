// ----------------------------------------TSHIRTS--------------------------------------------------

var tshirt;
// Reset the tshirts back to white
function reset() {
    document.getElementById("xs").src = "../images/Blue.png";
    document.getElementById("s").src = "../images/Green.png";
    document.getElementById("m").src = "../images/Yellow.png";
    document.getElementById("l").src = "../images/Orange.png";
    document.getElementById("xl").src = "../images/Red.png";
}

// ----------------------------------------SUBMIT--------------------------------------------------

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    // When the button is clicked we get the current values of the sliders
    var complexity = document.getElementById("complexity-output").innerHTML;
    var uncertainty = document.getElementById("uncertainty-output").innerHTML;
    var security = document.getElementById("security-output").innerHTML;
    var controls = document.getElementById("controls-output").innerHTML;
    var familiarity = document.getElementById("unfamiliarity-output").innerHTML;
    var quality = document.getElementById("quality-output").innerHTML;
    var dependencies = document.getElementById("dependencies-output").innerHTML;
    var performance = document.getElementById("performance-output").innerHTML;
    var manual = document.getElementById("manual-output").innerHTML;
    var perf = document.getElementById("perf-output").innerHTML;
    var automation = document.getElementById("automation-output").innerHTML;
    var infra = document.getElementById("infra-output").innerHTML;
    // Take all the slider values and add them together (answer converts to days)
    var total = parseFloat(
        parseFloat(complexity) +
        parseFloat(uncertainty) +
        parseFloat(security) +
        parseFloat(controls) +
        parseFloat(familiarity) +
        parseFloat(quality) +
        parseFloat(dependencies) +
        parseFloat(performance) +
        parseFloat(manual) +
        parseFloat(perf) +
        parseFloat(automation) +
        parseFloat(infra)
    );
    // Determine which tshirt to highlight based on the total above
    if (total <= 5) {
        tshirt = "xs";
    } else if (total <= 10) {
        tshirt = "s";
    } else if (total <= 15) {
        tshirt = "m";
    } else if (total <= 20) {
        tshirt = "l";
    } else if (total > 20) {
        tshirt = "xl";
    } else {
        alert("Oops! Stacey messed up the code!");
    }
    reset();
    // Change the colour of the relevant tshirt
    if (tshirt == "xs") {
        document.getElementById("xs").src = "../images/Blue2.png";
    } else if (tshirt == "s") {
        document.getElementById("s").src = "../images/Green2.png";
    } else if (tshirt == "m") {
        document.getElementById("m").src = "../images/Yellow2.png";
    } else if (tshirt == "l") {
        document.getElementById("l").src = "../images/Orange2.png";
    } else if (tshirt == "xl") {
        document.getElementById("xl").src = "../images/Red2.png";
    } else {
        alert("Oops! Stacey messed up the code!");
    }
});

// A = 0.5
// B = 0.75
// C = 1
// D = 1.25
// E = 1.5
// F = 2.5

// ----------------------------------------LISTENERS--------------------------------------------------

document.getElementById("complexity").addEventListener("change", function() {
    thumbFFunction.call(this, "complexity");
});
document.getElementById("uncertainty").addEventListener("change", function() {
    thumbFFunction.call(this, "uncertainty");
});
document.getElementById("security").addEventListener("change", function() {
    thumbCFunction.call(this, "security");
});
document.getElementById("controls").addEventListener("change", function() {
    thumbCFunction.call(this, "controls");
});
document.getElementById("unfamiliarity").addEventListener("change", function() {
    thumbDFunction.call(this, "unfamiliarity");
});
document.getElementById("quality").addEventListener("change", function() {
    thumbFFunction.call(this, "quality");
});
document.getElementById("dependencies").addEventListener("change", function() {
    thumbCFunction.call(this, "dependencies");
});
document.getElementById("performance").addEventListener("change", function() {
    thumbDFunction.call(this, "performance");
});
document.getElementById("manual").addEventListener("change", function() {
    thumbBFunction.call(this, "manual");
});
document.getElementById("perf").addEventListener("change", function() {
    thumbAFunction.call(this, "perf");
});
document.getElementById("automation").addEventListener("change", function() {
    thumbEFunction.call(this, "automation");
});
document.getElementById("infra").addEventListener("change", function() {
    thumbBFunction.call(this, "infra");
});

// When a slider is changed by the user then this changes the colour of the thumb & track to correspond
function thumbAFunction(argument) {
    var x = document.getElementById(argument).value;
    if (x == 0) {
        this.className = "default";
    } else if (x == 0.5) {
        this.className = "blue";
    } else if (x == 1) {
        this.className = "green";
    } else if (x == 1.5) {
        this.className = "yellow";
    } else if (x == 2) {
        this.className = "orange";
    } else if (x > 2) {
        this.className = "red";
    }
}

function thumbBFunction(argument) {
    var x = document.getElementById(argument).value;
    if (x == 0) {
        this.className = "default";
    } else if (x == 0.75) {
        this.className = "blue";
    } else if (x == 1.5) {
        this.className = "green";
    } else if (x == 2.25) {
        this.className = "yellow";
    } else if (x == 3) {
        this.className = "orange";
    } else if (x > 3) {
        this.className = "red";
    }
}

function thumbCFunction(argument) {
    var x = document.getElementById(argument).value;
    if (x == 0) {
        this.className = "default";
    } else if (x == 1) {
        this.className = "blue";
    } else if (x == 2) {
        this.className = "green";
    } else if (x == 3) {
        this.className = "yellow";
    } else if (x == 4) {
        this.className = "orange";
    } else if (x > 4) {
        this.className = "red";
    }
}

function thumbDFunction(argument) {
    var x = document.getElementById(argument).value;
    if (x == 0) {
        this.className = "default";
    } else if (x == 1.25) {
        this.className = "blue";
    } else if (x == 2.5) {
        this.className = "green";
    } else if (x == 3.75) {
        this.className = "yellow";
    } else if (x == 5) {
        this.className = "orange";
    } else if (x > 5) {
        this.className = "red";
    }
}

function thumbEFunction(argument) {
    var x = document.getElementById(argument).value;
    if (x == 0) {
        this.className = "default";
    } else if (x == 1.5) {
        this.className = "blue";
    } else if (x == 3) {
        this.className = "green";
    } else if (x == 4.5) {
        this.className = "yellow";
    } else if (x == 6) {
        this.className = "orange";
    } else if (x > 6) {
        this.className = "red";
    }
}

function thumbFFunction(argument) {
    var x = document.getElementById(argument).value;
    if (x == 0) {
        this.className = "default";
    } else if (x == 2.5) {
        this.className = "blue";
    } else if (x == 5) {
        this.className = "green";
    } else if (x == 7.5) {
        this.className = "yellow";
    } else if (x == 10) {
        this.className = "orange";
    } else if (x > 10) {
        this.className = "red";
    }
}