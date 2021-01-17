import { Component, OnInit } from '@angular/core';
import { ModalController,PopoverController } from '@ionic/angular';
import { GlobalService } from '../../services/global.service';
import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(public gs: GlobalService) { }

  ngOnInit() {
  }
}
