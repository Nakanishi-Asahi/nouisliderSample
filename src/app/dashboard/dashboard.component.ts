import { Component } from '@angular/core';
import { NouisliderComponent, NouiFormatter } from "ng2-nouislider";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  sliderConfig: any = {
    format: new CustomFormatter()
  };
  dummy: number[] = [0, 100];
}

export class CustomFormatter implements NouiFormatter {
  to(value: number): string {
    return String(parseFloat(parseFloat(String(value)).toFixed(5)));
  }

  from(value: string): number {
    return parseFloat(value);
  }
}