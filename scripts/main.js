function myFunction() {
    var y = document.getElementById("input").value;
    document.getElementById("request").innerHTML = y;
    var allText =[];
    var allTextLines = [];
    var Lines = [];

    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "./csv_exercise.csv", true);
    txtFile.onreadystatechange = function()
    {
        allText = txtFile.responseText;
        allTextLines = allText.split(/\r\n|\n/);
    };

    document.getElementById("allTextLines").innerHTML = allTextLines;
    document.getElementById("allText").innerHTML = allText;
    document.getElementById("txtFile").innerHTML = txtFile;
    console.log(y);
    
}

