import { Camera, CameraResultType } from '@capacitor/camera';

class cam{
    url;
    img;

takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.img = image;
    const imageUrl = image.dataUrl;
    this.url = imageUrl;
    console.log(imageUrl);
  
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
  };

  async getPicture(){
      await this.takePicture();
      return this.url;
  }

}

const camera = new cam();
export default camera; 