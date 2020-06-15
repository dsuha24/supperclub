const AWS = require("aws-sdk");
const BusBoy = require("busboy");

const express = require("express");
const { json } = require("body-parser");
const router = express.Router();

const { S3_KEYS } = require("../keys");
const { BUCKET_NAME, IAM_USER_KEY, IAM_USER_SECRET } = S3_KEYS;

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
                console.log("error in callback");
                console.log(err);
            }

            res.json(data);
        });
    });
}

router.post("/", [], async (req, res, next) => {
    try {
        const element1 = req.body.element1;

        const busboy = new BusBoy({ headers: req.headers });

        busboy.on("finish", () => {
            const file = req.files.element2;

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
