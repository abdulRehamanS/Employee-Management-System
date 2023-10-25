import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  // intial the id as '0'
  id: number = 0;
  // create employee obj
  employee: Employee = new Employee();

  // autowiring
  constructor(
    private service: EmployeeService,
    private router: ActivatedRoute,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }

  // method to intitate dummy code
  // getEmployeeById() {
  //   this.id = this.router.snapshot.params['id'];
  //   this.service.getEmployeeById(this.id).subscribe((data) => {
  //     this.employee = data;
  //   });
  // }

  onSubmit() {
    this.service
      .updateEmployeeById(this.id, this.employee)
      .subscribe((data) => {
        this.navigate();
      });
  }

  // for navigating to employee-list
  navigate() {
    this.rout.navigate(['employee-list']);
  }
}
