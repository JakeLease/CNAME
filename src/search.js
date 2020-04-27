String.prototype.replaceChars = function(character, replacement){
        var str = this;
        var a;
        var b;
        for(var i=0; i < str.length; i++){
            if(str.charAt(i) == character){
                a = str.substr(0, i) + replacement;
                b = str.substr(i + 1);
                str = a + b;
            }
        }
        return str;
}
 
function search(query){
    switch(query.substr(0, 2)){

        case "-y":
            query = query.substr(3);
            window.location =
            "https://www.youtube.com/results?search_query=" +
            query.replaceChars(" ", "+");
            break;
                    
         case "-b":
            query = query.substr(3);
            window.location =
            "https://b-ok.cc/s/" +
             query.replaceChars(" ", " ");
            break;
                
       case "-a":
            query = query.substr(3);
            window.location =
            "https://www.amazon.com/s?k=" +
            query.replaceChars(" ", "+");
            break;             
                    
        case "-w":
            query = query.substr(3);
            window.location =
            "https://en.wikipedia.org/w/index.php?search=" +
            query.replaceChars(" ", "%20");
            break;

        case "-r":
            query = query.substr(3);
            window.location = 
    	"https://old.reddit.com/search?q=" + 
    	query.replaceChars("", "+");
    	break;


        default:
            window.location="https://www.google.com/search?q=" +
                query.replaceChars("", "+");
    }
}
 
window.onload = function(){
    // search
    searchinput = document.getElementById("searchbox");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
 
    // jump to search when tab is pressed
    var search_sqr = document.getElementById("search_sqr");
 
        }
