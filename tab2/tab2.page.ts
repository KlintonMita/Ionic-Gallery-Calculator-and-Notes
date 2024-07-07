import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  clickedImages: string[] = [];
  selectedImage: string | null = null;

  constructor() { }

  ngOnInit() {
    this.loadImages();
  }

  async captureImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 30,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      if (image.dataUrl) {
        this.clickedImages.push(image.dataUrl);
        this.saveImages();
      } else {
        console.error('Image dataUrl is undefined');
      }
    } catch (error) {
      console.error('Error capturing image', error);
    }
  }

  saveImages() {
    localStorage.setItem('clickedImages', JSON.stringify(this.clickedImages));
  }

  loadImages() {
    const images = localStorage.getItem('clickedImages');
    if (images) {
      this.clickedImages = JSON.parse(images);
    }
  }

  imgClick(image: string) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeOverlay() {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  deleteImg(image: string) {
    const index: number = this.clickedImages.indexOf(image);
    if(index !== -1) {
      this.clickedImages.splice(index,1);
      this.saveImages();
    }
    this.closeOverlay();
  }
}
