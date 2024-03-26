

export const uploadToCludinary = async(file) => {
    
const formData = new FormData();
formData.append("file", file)
formData.append("cloud_name", "dxspmmowc")
formData.append("upload_preset", "walmart")

const url = "https://api.cloudinary.com/v1_1/dxspmmowc/image/upload"

const response = await fetch(url, {
  method: "POST",
  body: formData,
})
.then(res => res.json())

return response
}

