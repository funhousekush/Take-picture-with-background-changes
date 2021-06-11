function preload() {}

function setup()
{
    canvas = createCanvas(600, 400);
    canvas.position(100, 300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 600, 400);
    tint(tint_color);
}

function take_snapshot()
{
    save('Funpic.png');
}

function filter_tint()
{
    tint_color = document.getElementById("filter_color").value;
}