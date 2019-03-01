import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RequestService} from '../../service/request.service';
import {FileResponse} from '../../model/file-response';
import {FileUtil} from '../../util/file-util';
import {FileTypeResponse} from '../../model/file-type-response';
import {FileUpload} from '../../model/file-upload';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  public selectedLocation: FileTypeResponse;
  public previousLocation: FileTypeResponse;
  public files: FileTypeResponse[];

  @ViewChild('file') file: ElementRef;

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

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result.substring(fileReader.result.lastIndexOf(',') + 1));
      this.uploadFile(fileReader.result.substring(fileReader.result.lastIndexOf(',') + 1),
          this.getFilePath().substring(this.getFilePath().lastIndexOf('.') + 1),
          '/' + this.getFilePath());
    };

    fileReader.readAsDataURL(this.file.nativeElement.files[0]);
  }

  uploadFile(fileBytes: string, extension: string, fileName: string) {
    const upload = new FileUpload(
        fileBytes,
        extension,
        fileName,
        this.previousLocation ? this.previousLocation.path : ''
    );
    this.requestService.uploadFile(upload).subscribe(response => {
      this.load(this.selectedLocation);
    });
  }

  getFilePath(): string {
    const fullPath = (<HTMLInputElement>document.getElementById('upload')).value;
    if (fullPath) {
      const startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
      let filename = fullPath.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
      }
      return filename;
    }
  }

}
