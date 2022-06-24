var id = null;
window.onload = function() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var w = window.innerWidth; // The width of the current window
    var h = window.innerHeight - 50; // The height of the current window
    console.log('Height of the window is : ' + h)
    console.log('Width of the window is : ' + w)
    clearInterval(id);
    id = setInterval(frame, 1000);
    document.getElementById("container").style.height = h+'px'; // setting the height css of the container
    document.getElementById("container").style.width = w+"px"; // setting the width css of the container

    // Move the square from top-left to bottom-right
    function frame() {
        if (pos >= h-110) {
            clearInterval(id); // stop moving the square in the top-left to bottom-right direction
            id = setInterval(reverseFrame, 1000);
        } else {
            pos = pos + 10;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
    // Move the square from bottom-right to top-left
    function reverseFrame() {
        if (pos == 0) {
            clearInterval(id); // stop moving the square in the bottom-right to top-left direction
        } else {
            pos = pos - 10;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}