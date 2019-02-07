import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";
import {FileResponse} from "../../model/file-response";
import {FileUtil} from "../../util/file-util";
import {FileTypeResponse} from "../../model/file-type-response";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  public selectedLocation: FileTypeResponse;
  public previousLocation: FileTypeResponse;
  public files: FileTypeResponse[];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.load();
  }

  checkAndLoad(file: FileTypeResponse) {
    if (file.fileType === 'folder') {
      this.load(file);
    } else {
      this.downloadBytes(file);
    }
  }

  load(file?: FileTypeResponse) {
    this.files = [];
    this.requestService.getFiles(file ? file.path : null).subscribe(lines => {
      lines.forEach(line => {
        this.files.push(FileTypeResponse.fromJson(line));
      });
      this.previousLocation = this.selectedLocation;
      this.selectedLocation = file;
    });
  }

  downloadBytes(file: FileTypeResponse) {
    this.requestService.getBytes(file.path).subscribe(response => {
        const fileResponse = FileResponse.fromJson(response);
        FileUtil.saveAs(FileUtil.makeBlob(fileResponse.bytes), FileUtil.getFileName(file.path), fileResponse.extension);
    });
  }

}
