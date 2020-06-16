const AWS = require("aws-sdk");
const BusBoy = require("busboy");
const express = require("express");
const { json } = require("body-parser");
const router = express.Router();

const { S3_KEYS } = require("../keys");
const { BUCKET_NAME, IAM_USER_KEY, IAM_USER_SECRET } = S3_KEYS;

const HttpError = require("../models/http-error");

function uploadToS3(file, res) {
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
    });

    s3bucket.createBucket(() => {
        const params = { Bucket: BUCKET_NAME, Key: file.name, Body: file.data };

        s3bucket.upload(params, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            res.json(data);
        });
    });
}

router.post("/", [], async (req, res, next) => {
    try {
        debugger;
        const busboy = new BusBoy({ headers: req.headers });

        busboy.on("finish", () => {
            const file = req.files.image;

            if (!req.files.image) {
                return res
                    .status(402)
                    .json({ errors: [{ msg: "Image not found" }] });
            }

            uploadToS3(file, res);
        });

        req.pipe(busboy);
    } catch (err) {
        const error = new HttpError("Server Error", 500);
        return next(error);
    }
});

// router.get("/", [], async (req, res) => {
//     const { BUCKET_NAME } = S3_BUCKET;

//     try {
//         const s3bucket = new AWS.S3(S3_BUCKET);
//         s3bucket.createBucket(() => {
//             const params = {
//                 Bucket: BUCKET_NAME,
//                 Key: "",
//             };

//             s3bucket.getObject(params, (err, data) => {
//                 if (err) {
//                     console.error(err);
//                     return;
//                 }

//                 console.log("success");
//                 console.log(data);
//                 return;
//             });
//         });
//     } catch (error) {
//         console.error(error);
//         return;
//     }
// });

module.exports = router;
