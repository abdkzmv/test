function randPic() {
    let x = document.getElementById("img").innerHTML;
    let images = ["p1.jpg","p2.jpg","p3.jpg"];
    const rndInt = Math.floor(Math.random() * images.length);
    var fileName = images[rndInt];
    x = "<img src=\"https://abdullahkazimov.github.io/test/images/" + fileName + "\" width=\"600\" height=\"400\">";
    document.getElementById("img").innerHTML = x;
}
