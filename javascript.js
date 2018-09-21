//test if console works
console.log("app is alive");


//task 2
function switchChannel() {
    var channelName = event.currentTarget.innerText;
    console.log("tuning into channel: " + channelName);
    var heading = channelName + '<small> by <strong>upgrading.never.helps</strong></small><img id="favorite-star" onclick="favorize()" src="http://ip.lfe.mw.tum.de/sections/star-o.png" alt="starred">'
    $("#chat h1").html(heading);
    selectChannel();
}

// task 3
function favorize(){
    if($("#favorite-star").attr("src") === "http://ip.lfe.mw.tum.de/sections/star-o.png") {
        $("#favorite-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
    }else{
        $("#favorite-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
    }
}
// task 4
function selectTab() {
    $("#tab-bar button").removeClass("selected");
    $(event.currentTarget).addClass("selected");
}
// task 4
function selectChannel() {
    $("#channels li").removeClass("selected");
    $(event.currentTarget).addClass("selected");
}
//task 5
function toggleEmojiVisibility() {
     $("#emojis").toggle();
}
