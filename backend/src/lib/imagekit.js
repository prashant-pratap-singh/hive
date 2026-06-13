import Imagekit, {toFile} from "@imagekit/nodejs";
const imagekit = new Imagekit({ privateKey: process.env.IMAGEKIT_PRIVATE_KEY })
function hasImageKitConfig(){
    return Boolean(process.env.IMAGEKIT_PRIVATE_KEY)
}


//2 image same name ka hua to
// originalName= "My Photo (1).png"
// result: "chat-1749300000000-My_Photo__1_.png"
// this helper makes a safe, unique filename for uploaded files.
function createFileName(originalName = "upload") {
  const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
  return `chat-${Date.now()}-${safeName}`;
}

async function uploadChatMedia(file){
    const fileName = createFileName(file.originalname);
    const result = await imagekit.upload({
        file: toFile(file.buffer, file.originalname),
        fileName,
        folder:"/chat",
    })
    return result.url;
}
export {hasImageKitConfig,uploadChatMedia};