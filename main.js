
function startClassification()
{

    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dBEnznGFE/model.json', modelReady);

}

function modelReady()
{
classifier.classify(gotResults);
}

function gotResults(error, results)
{

    if ( error )
    {

        console.error(error);

    }
    else
    {

        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Posso Ouvir - '+
        results[0].label;

        document.getElementById("result_confidence").innerHTML = 'Precisão - '+
        (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('alien1')
        img1 = document.getElementById('alien2')
        img2 = document.getElementById('alien3')
        img3 = document.getElementById('alien4')

        if (results[0].label == "estalar de dedos")
        {

            img.src = 'a.gif'
            img1.src = 'b.png'
            img2.src = 'c.png'
            img3.src = 'd.png'

        }

        else if (results[0].label == "bitbox")
        {

            img.src = 'a.png'
            img1.src = 'b.gif'
            img2.src = 'c.png'
            img3.src = 'd.png'

        }

        else if (results[0].label == "Palmas")
        {

            img.src = 'a.png'
            img1.src = 'b.png'
            img2.src = 'c.gif'
            img3.src = 'd.png'

        }

        else 
        {

            img.src = 'a.png'
            img1.src = 'b.png'
            img2.src = 'c.png'
            img3.src = 'd.gif'

        }

        
    }

}