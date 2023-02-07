const fs = require("fs"); //Way of working with the file system
const path = require("path"); //Provides utilities for working with file and directory paths
const { v4: uuid } = require("uuid"); //Generating universally unique identifiers 

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, content) => {
  const jobId = uuid();
  const filename = `${jobId}.${format}`;
  const filepath = path.join(dirCodes, filename);
  await fs.writeFileSync(filepath, content);
  return filepath;
};

module.exports = {
  generateFile,
};
