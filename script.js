//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "HTML is what type of language ?",
        choices: ["Scripting Language","Markup Language","Programming Language","Network Protocol"],
        answer: 2
    
    },
    
    {
        question: "HTML uses :",
        choices: ["User defined tags","Pre-specified tags","Fixed tags defined by the language","Tags only for linking"],
        answer: 3
    
    },
    {
        question: "The year in which HTML was first proposed _______.",
        choices: ["1990","1980","2000","1995"],
        answer: 1
    
    },
    {
        question: "Apart from <b> tag, what other tag makes text bold ?",
        choices: ["fat","strong","black","emp"],
        answer: 2
    
    },
    {/*5*/
        question: "How can you make a bulleted list with numbers? ",
        choices: ["dl","ol","list","ul"],
        answer: 2
    
    },
    {
        question: "What tag is used to display a picture in a HTML page?",
        choices: ["picture","image","pic","img"],
        answer: 4
    
    }, 
    {
        question: "HTML web pages can be read and rendered by _________.",
        choices: ["Compiler","Server","Web Browser","Interpreter"],
        answer: 3
    
    }, 
    {
        question: "Which of the following is not a browser ?",
        choices: ["Microsofts Bing","Netscape Navigator","Mozilla Firefox","Opera"],
        answer: 1
    
    }, 
    {
        question: "HTML tags are surrounded by which type of brackets.",
        choices: ["Curly","Round","Squart","Angle"],
        answer: 4
    
    }, 
    {/*10*/
        question: "Tags and test that are not directly displayed on the page are written in _____ section.",
        choices: ["head","title","body","html"],
        answer: 1
    
    }
                
];

var CSSquestions=[

    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        choices: ["Id","text","class","name"],
        answer: 1
    
    }, 
    {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choices: ["margin","clear","float","padding"],
        answer: 2
    
    },
    {
        question: "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack ?",
        choices: ["d-inex","s-index","x-index","z-index"],
        answer: 4
    
    }, 
    {/*4*/
        question: "Can we align a Block element by setting the left and right margins ?",
        choices: ["Yes, we can","Not Possible","Depends on browser","Depends upon operating System"],
        answer: 2
    
    },
    {
        question: "If we want to wrap a block of text around an image, which css property will we use ?",
        choices: ["wrap","push","float","align"],
        answer: 3
    
    },
    {/*6*/
        question: "If we want to show an Arrow as cursor, then which value we will use ?",
        choices: ["pointer","default","arrow","arr"],
        answer: 2
    
    }, 
    {
        question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
        choices: ["border-color","border-decoration","border-style","border-line"],
        answer: 3
    
    },
    {/*8*/
        question: "Which of the following properties will we use to display border around a cell without any content ?",
        choices: ["empty-cell","blank-cell","noncontent-cell","void-cell"],
        answer: 1
    
    }, 
    {
        question: "What should be the table width, so that the width of a table adjust to the current width of the browser window?",
        choices: ["640 pixels","100%","full-screen","1024px"],
        answer: 2
    
    },
    {
        question: "How can we write comment along with CSS code ?",
        choices: ["/* a comment */","// a comment //","/ a comment /","<' a comment'>"],
        answer: 1
    
    }
                
];
var JSquestions=[

    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["JavaScript variable names must begin with a letter or the underscore character.","JavaScript variable names are case sensitive.","Both of the above."," None of the above."],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2
    
    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["False","True"],
        answer: 1
    
    }, 
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["The number of days since January 1st, 1900","The number of seconds since January 1st, 1970","The number of milliseconds since January 1st, 1970","The number of picoseconds since January 1st, 1970"],
        answer: 3
    
    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["True","False"],
        answer: 2
    
    }, 
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 3
    
    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        choices: ["visibilty","visible","invisible","None of the above"],
        answer: 1
    
    }, 
    {
        question: " Javascript is an object oriented language?",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "What is the alternate name for Java script?",
        choices: ["LimeScript","ECMScript","Both of the above","ECMAScript"],
        answer: 4
    
    }
                
];






//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
