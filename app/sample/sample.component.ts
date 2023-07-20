import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ShashaService } from '../shasha.service';
import{Router,Data} from '@angular/router';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  doctor:any;
  displayedColumns:string[]=['doctor_name','doctor_id','specialist','Phone_no','actions','display'];

  public doctorFormGroup = this.formBuilder.group({
/*'doctor_name': ['',[Validators.pattern('^[a-zA-Z]+$')]],
'doctor_id': ['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
'specialist': ['',[Validators.pattern]],
'Phone_no':[''],
    '_id': [],
    '_rev': [],*/
'doctor_name': ['',[Validators.required]],
'doctor_id': ['',[Validators.required]],
'specialist': ['',[Validators.required]],
'Phone_no': ['',[Validators.required]],
'_id': [],
'_rev': [],
 });
  constructor(private formBuilder: FormBuilder, public shashaService: ShashaService, private router:Router)
  {

  }
  ngOnInit(): void { 
  }
  
  saveAction(){
    
    if (this.doctorFormGroup.valid) {
      let employeeObject:any = this.doctorFormGroup.value;
      employeeObject['object_name'] ='doctor'
     
      if (employeeObject['_id'] == null) {
        delete employeeObject['_id']
      }
      if (employeeObject['_rev'] == null) {
        delete employeeObject['_rev']
      }

      let _bulk_docsArray = [];
      _bulk_docsArray.push(employeeObject);
      this.shashaService.updateDocument(_bulk_docsArray );
     } 
     else {
      alert("Some of fields not valid")
    }
  }
  fetchAction() {
    this.shashaService.searchDocument('object_name:doctor')
  }
  editAction(employeeObject: any) {
    this.doctorFormGroup.reset()
    this.doctorFormGroup.patchValue(employeeObject)
    }
    deleteAction(employeeObject: any):void {
      this.shashaService.deleteDocument(employeeObject['_id'], employeeObject['_rev'])
    }
    resetAction(): void{this.doctorFormGroup.reset()
      this.doctorFormGroup.markAsUntouched()
    }
    searchAction() {
}
      applyFilter(event:Event){
      const filterValue=(event.target as HTMLInputElement).value;
      this.shashaService.dataSource.filter=filterValue.trim().toLowerCase();
      if(this.shashaService.dataSource.paginator){
        this.shashaService.dataSource.paginator.firstPage();
        this.shashaService.dataSource.filterPredicate=(data:Data,filter:string)=>{
          const date=new Date(data['date']);
          const filterDate=new Date(filter);
          return date.getTime()===filterDate.getTime();
        };
        this.shashaService.dataSource.filter=filterValue;
      }
    }
    
  }



