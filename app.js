/*
* No Debugger
* A program to disable and prevent downloads in the developer console.
* 2020 John Cailtyn
*/
/*
* No Debugger
* A program to disable and prevent downloads in the developer console.
* 2020 John Cailtyn
*/

var minimalUserResponseInMiliseconds = 200;
function check() {
    before = new Date().getTime();
    debugger ;after = new Date().getTime();
    if (after - before > minimalUserResponseInMiliseconds) {
        alert("You think you're clever?\nDo not open Developer Tools.");
        self.location.replace(window.location.protocol + window.location.href.substring(window.location.protocol.length));
    } else {
        before = null;
        after = null;
        delete before;
        delete after;
    }
    setTimeout(check, 100);
}
check();
