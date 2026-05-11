require("dotenv").config();

const express = require("express");
const multer = require("multer");
const AWS = require("aws-sdk");
const fs = require("fs");

const app = express();

const upload = multer({ dest: "uploads/" });

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
});

const s3 = new AWS.S3();

app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Cloud File Uploader</title>

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: Arial, sans-serif;
      }

      body{
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background: linear-gradient(135deg, #0f172a, #1e293b, #2563eb);
        overflow:hidden;
      }

      .container{
        width:420px;
        padding:40px;
        border-radius:24px;
        background: rgba(255,255,255,0.08);
        backdrop-filter: blur(14px);
        border:1px solid rgba(255,255,255,0.15);
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        text-align:center;
        color:white;
      }

      h1{
        font-size:32px;
        margin-bottom:10px;
      }

      p{
        color:#cbd5e1;
        margin-bottom:30px;
      }

      .upload-box{
        border:2px dashed rgba(255,255,255,0.4);
        padding:35px 20px;
        border-radius:18px;
        margin-bottom:25px;
        transition:0.3s;
        cursor:pointer;
      }

      .upload-box:hover{
        background: rgba(255,255,255,0.08);
        transform: scale(1.02);
      }

      .upload-icon{
        font-size:50px;
        margin-bottom:10px;
      }

      input[type="file"]{
        margin-top:15px;
        color:white;
      }

      input[type="file"]::file-selector-button{
        background:#3b82f6;
        color:white;
        border:none;
        padding:10px 16px;
        border-radius:10px;
        cursor:pointer;
        margin-right:10px;
        transition:0.3s;
      }

      input[type="file"]::file-selector-button:hover{
        background:#2563eb;
      }

      button{
        width:100%;
        padding:14px;
        border:none;
        border-radius:14px;
        background: linear-gradient(to right, #3b82f6, #2563eb);
        color:white;
        font-size:16px;
        font-weight:bold;
        cursor:pointer;
        transition:0.3s;
      }

      button:hover{
        transform: translateY(-2px);
        box-shadow:0 10px 20px rgba(37,99,235,0.4);
      }

      .footer{
        margin-top:20px;
        font-size:13px;
        color:#cbd5e1;
      }

    </style>
  </head>

  <body>

    <div class="container">

      <h1>☁ Cloud Uploader</h1>

      <p>Upload files securely to AWS S3</p>

      <form action="/upload" method="POST" enctype="multipart/form-data">

        <div class="upload-box">
          <div class="upload-icon">📁</div>
          <h3>Select Your File</h3>

          <input type="file" name="file" required />
        </div>

        <button type="submit">
          Upload File
        </button>

      </form>

      <div class="footer">
        Powered by AWS S3 + Node.js
      </div>

    </div>

  </body>
  </html>
  `);
});

app.post("/upload", upload.single("file"), async (req, res) => {

  const fileContent = fs.readFileSync(req.file.path);

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: req.file.originalname,
    Body: fileContent,
  };

  try {

    const data = await s3.upload(params).promise();

    fs.unlinkSync(req.file.path);

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Upload Success</title>

      <style>

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        body{
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background: linear-gradient(135deg, #111827, #1d4ed8);
          color:white;
        }

        .success-card{
          width:420px;
          padding:40px;
          border-radius:24px;
          text-align:center;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          border:1px solid rgba(255,255,255,0.15);
        }

        .check{
          font-size:70px;
          margin-bottom:15px;
        }

        h1{
          margin-bottom:12px;
        }

        p{
          color:#d1d5db;
          margin-bottom:25px;
        }

        a{
          display:inline-block;
          text-decoration:none;
          background:#3b82f6;
          color:white;
          padding:14px 22px;
          border-radius:12px;
          transition:0.3s;
          font-weight:bold;
        }

        a:hover{
          background:#2563eb;
        }

      </style>
    </head>

    <body>

      <div class="success-card">

        <div class="check">✅</div>

        <h1>Upload Successful</h1>

        <p>Your file has been uploaded to AWS S3.</p>

        <a href="${data.Location}" target="_blank">
          View Uploaded File
        </a>

      </div>

    </body>
    </html>
    `);

  } catch (err) {

    console.log(err);

    res.send("Upload Failed");

  }

});

app.listen(80, () => {
  console.log("Server running on port 80");
});
