var i=0;
setInterval(function(){
    var titles=[

"f",
"fa",
"fai",
"fair",
"fairs",
"fairs.",
"fairs.m",
"fairs.ml",
"fairs.m",
"fairs.",
"fairs",
"fair",
"fai",
"fa",
"f",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);