//javascript

$(document).ready(function () {
    var back = ["Red","Yellow","Blue", "Green"];
    var rand = back[Math.floor(Math.random() * back.length)];
    console.log(rand);
   $('button').appendTo('div');
});
