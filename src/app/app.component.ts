import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "QwikCut-Evaluation";
  @ViewChild("videoplayer") videoplayer: ElementRef;
  // Source videos
  clips: Array<any> = [
    {
      clipnumber: 1,
      url: "https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/1.mp4",
      personnel: "Offense",
      down: 1,
      distance: 10,
    },
    {
      clipnumber: 2,
      url: "https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/2.mp4",
      personnel: "Offense",
      down: 2,
      distance: 9,
    },
    {
      clipnumber: 3,
      url: "https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/3.mp4",
      personnel: "Offense",
      down: 3,
      distance: 2,
    },
    {
      clipnumber: 4,
      url: "https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/4.mp4",
      personnel: "Offense",
      down: 4,
      distance: 4,
    },
    {
      clipnumber: 5,
      url: "https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/8.mp4",
      personnel: "Defense",
      down: 1,
      distance: 10,
    },
    {
      clipnumber: 6,
      url: "https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/9.mp4",
      personnel: "Defense",
      down: 1,
      distance: 9,
    },
    {
      clipnumber: 7,
      url: "https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/10.mp4",
      personnel: "Defense",
      down: 2,
      distance: 4,
    },
    {
      clipnumber: 8,
      url: "https://d2htis0rx2m2xo.cloudfront.net/dev_uploads/10955/11.mp4",
      personnel: "Defense",
      down: 3,
      distance: 9,
    },
  ];
  // variables for video counter
  count: number = 0;
  arrayLen: number = this.clips.length;
  // Toggle Video function
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }
  // Decrement/Increment feature
  decrementCnt(event: any) {
    if (this.count > 0) {
      this.count -= 1;
      this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
    }
  }
  incrementCnt(event: any) {
    if (this.count <= this.arrayLen - 1) {
      this.count += 1;
      this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
    }
  }
  // Auto play feature
  onEnd(event: any) {
    console.log("video has ended");
    if (this.count != this.arrayLen - 1) {
      this.count += 1;
      console.log("count incremented to", this.count);
      this.videoplayer.nativeElement.load();
      this.videoplayer.nativeElement.play();
    }
  }
}
