const titleName = document.title;
var count = 0;
function writeTitle() {
    document.title = titleName.substring(0, count);
    if (count == titleName.length) {
        count = 0;
        setTimeout("writeTitle()", 1000)
    } else {
        count++;
        setTimeout("writeTitle()", 300);
    }
}
writeTitle();