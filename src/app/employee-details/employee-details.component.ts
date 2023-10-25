import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  id: number = 0;
  emp: Employee = new Employee();
  constructor(
    private activedRouter: ActivatedRoute,
    private service: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = this.activedRouter.snapshot.params['id'];

    this.service.getEmployeeById(this.id).subscribe((data) => {
      this.emp = data;
    });
  }
}
