const { shorten, getUrlByShorten } = require("../services/shortner.service");

class serviceController {

    static async casheUrl(req, res) {
        try {
            const cachedUrl = await shorten(req.body.url);
            const hostname = req.hostname;
            const PORT = process.env.PORT;
            res.status(200).json({
                url: "http://" + hostname + ":" + PORT + "/" + cachedUrl
            });
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    }

    static async redirectUrl(req, res) {
        try {
            const code = req.params.code;
            const url = await getUrlByShorten(code);
            return res.redirect(url);
        } catch (error) {
            console.error(error);
            return res.status(404).json();
        }
    }

}


module.exports = serviceController;