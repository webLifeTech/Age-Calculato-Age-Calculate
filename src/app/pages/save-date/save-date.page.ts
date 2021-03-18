import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { AdmobfreeService } from 'src/app/services/admobfree.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-save-date',
  templateUrl: './save-date.page.html',
  styleUrls: ['./save-date.page.scss'],
})
export class SaveDatePage implements OnInit {
  selectFor: any = 'Birthday';
  sevedDate: any;
  userName : any;
  userId : any;
  dataResult : any = [];
  constructor(
    public gs: GlobalService,
    private admobS: AdmobfreeService,
    public np: NavParams,
    private router: Router) {
    this.dataResult = this.np.data.result;
    if (this.dataResult){
      this.userId = this.dataResult.userId;
      this.selectFor = this.dataResult.selectFor;
      this.sevedDate = this.dataResult.sevedDate;
      this.userName = this.dataResult.userName;
    }
  }

  ngOnInit() {
  }
  ID() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

  saveMyDate(saveMyDatesForm){
    if (saveMyDatesForm.valid){
      if (this.userId){
        for (let i in this.gs.allMyDate) {
          if (this.gs.allMyDate[i].userId == this.userId){
            this.gs.allMyDate[i].selectFor = saveMyDatesForm.value.selectFor,
              this.gs.allMyDate[i].sevedDate = saveMyDatesForm.value.sevedDate,
            this.gs.allMyDate[i].userName = saveMyDatesForm.value.userName
          }
        }
        this.gs.presentToast('Your Date Updates Successfully !');
        localStorage.setItem('myDate', JSON.stringify(this.gs.allMyDate));
        this.admobS.rendomAdShow();
        this.gs.dismissModal();
      }else{
        this.userId++
        this.gs.allMyDate.push({
          userId: this.ID(),
          selectFor: this.selectFor,
          sevedDate: this.sevedDate,
          userName: this.userName
        })
        this.gs.presentToast('Your Date Saved Successfully !');
        localStorage.setItem('myDate', JSON.stringify(this.gs.allMyDate));
        this.viewMyDate();
      }
    }else{
      this.gs.presentToast('Please fill all the required fields');
    }
  }
  viewMyDate(){
    this.admobS.rendomAdShow();
    this.router.navigate(['/tabs/famous'])
    this.gs.dismissModal();
  }

}
