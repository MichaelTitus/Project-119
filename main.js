function preload(){

}
function setup(){
canvas = createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.hide()
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CrRnwBn3O/model.json',modelloaded)
}
function draw(){
image(video,0,0,300,300)
classifier.classify(video,gotresult)
}

function modelloaded(){
    console.log("model is loaded");
}

function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        percent = (result[0].confidence)*100

        document.getElementById("resultObjectName").innerHTML = result[0].label
        document.getElementById("resultObjectAccuracy").innerHTML = percent.toFixed(2)+" %"

    }
}
