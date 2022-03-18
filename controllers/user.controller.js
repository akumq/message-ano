const request = require('request');


module.exports.Send = async(req, res) => {

    request({
        url: "https://discord.com/api/webhooks/954163808451035177/pK2txLxIXMDcHE-uznRTkEfav-OS7x5uXXZcZ2-Z7CyTqWh4MpsJwmvtZNC-YIMVzvbl",
        method: "POST",
        json: true, // <--Very important!!!
        body: req.body
    }, function(error, response, body) {
        console.log(body);
    });

    res.status(201).json({ messsage: "send" });
}