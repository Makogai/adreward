import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeyManagementService } from '../key-management.service';
import { KeyService } from '../key-service.service';
import { Key } from '../key.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  keyForm: FormGroup;
  keys: Key[] = [];  // Replace with your data model if you have one.
  displayedColumns: string[] = ['key', 'status', 'actions'];

  constructor(
    private fb: FormBuilder,
    private keyService: KeyService,
  ) {
    this.keyForm = this.fb.group({
      keyValue: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadKeys();
  }

  loadKeys() {
   this.keyService.getKeys().subscribe((res: Key[]) => {
      console.log(res);
      this.keys = res;
   })
  }

  addKey() {
    const keyValue = this.keyForm.get('keyValue')?.value;
    if (keyValue) {
      this.keyService.addKey(keyValue).then(() => {
        console.log('Key added successfully!');
        this.keyForm.reset();
        this.loadKeys();  // Refresh the list of keys after adding a new one.
      });
    }
  }

  deleteKey(id: string) {
    // Implement logic to delete a key using the service
    this.keyService.deleteKey(id).then(() => {
      console.log('Key deleted successfully!');
      this.loadKeys();  // Refresh the list of keys after deleting one.
    });
  }
}
