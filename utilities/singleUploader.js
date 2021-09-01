const multer = require("multer");

function uploader(
  subfolder_path,
  allowed_file_types,
  max_file_size,
  error_msg
) {
  // File upload folder
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}/`;

  // define storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLocaleLowerCase()
          .split("")
          .join("-") +
        "-" +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });
  return upload;
}

module.exports = uploader;
