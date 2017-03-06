
/**
 * CSE Activity 2.2.2 IntroducingPHP
 * 
 * 222indexB.php models use of PHP in conjunction with MySQL, JavaScript, and CSS
 * @copyright Unpublished work 2013 Project Lead The Way
 * @version 2014.2.24
 */
 
var popping = "";
function hideDetailedView() {
	var unpopped = document.getElementById("popout");
    unpopped.innerHTML = "";
    unpopped.id = popping;
}

function showDetailedView(currentDiv, firstname, lastname, dbname, artistID, image_name) {
	var popframe = document.getElementById(currentDiv);
    popping = popframe.id;
	popframe.id = "popout";
	popframe.innerHTML = "<br /><TABLE><TR><TH rowspan='3'><img src='http://" + window.location.hostname + 
							"/~" + dbname + "/" + artistID + "/" + image_name + "' width='250'><TH align='left'>Artist's Name: <TH align='left'>" + 
							firstname + " " + lastname + "<TR><TH align='left'>File Name: <TH align='left'>" + image_name + "<TR></TABLE> ";
    var nameholder = "popout";
	var unpopped = document.getElementById(nameholder);
    unpopped.onmouseout = hideDetailedView;
}
/*
    
    
*/