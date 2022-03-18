document.querySelector("#send").addEventListener("click", function() {

    if (document.querySelector("#text_input").value != "") {
        send(document.querySelector("#text_input").value)
    } else {
        alert("message vide")
    }
})

function send(text) {
    var xhr = new XMLHttpRequest();
    var url = document.location.origin + "/api/user/send";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var color = document.querySelector("#color").value;
    var ref = ['ThéoDeRetourNwarrr', 'Amon Pazzo', 'Marron Man', 'Kyori', 'Franz Reiner', "Mais bon tu connais c'est rien, en vrai ça va"]
    var data = JSON.stringify({
        "embeds": [{
            "title": "Message Anonyme",
            "description": `${text}`,
            "color": parseInt(color.substring(1), 16),
            "thumbnail": {
                "url": "https://media.discordapp.net/attachments/954163789291458650/954341032710012988/Ak-1.png"
            },
            "footer": {
                "text": `${ref[Math.floor(Math.random() * ref.length)]}`
            }
        }]
    });
    xhr.send(data);
}

document.querySelector("#color").addEventListener("change", function() {
    document.body.style.backgroundColor = event.target.value;
    console.log(event.target.value)
}, true)