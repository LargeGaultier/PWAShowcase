import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-capture',
  templateUrl: './video-capture.component.html',
  styleUrls: ['./video-capture.component.scss']
})
export class VideoCaptureComponent implements OnInit {
  constructor() {}

  @ViewChild('videoElement') videoElement: any;
  video: any;
  displayControls = true;

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
  }
  initCamera(config: any) {
    const browser = navigator as any;

    browser.getUserMedia =
      browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia;

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
      this.video.play();
    });
  }

  start() {
    this.initCamera({ video: true, audio: false });
  }
  sound() {
    this.initCamera({ video: true, audio: true });
  }

  pause() {
    this.video.pause();
  }

  toggleControls() {
    this.video.controls = this.displayControls;
    this.displayControls = !this.displayControls;
  }

  resume() {
    this.video.play();
  }
}
