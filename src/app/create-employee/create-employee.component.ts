import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  // creating obj
  employee: Employee = new Employee();

  // Autowiring the service class and router class for injection
  constructor(private service: EmployeeService, private router: Router) {}

  // defalut metthod
  ngOnInit(): void {}

  // for saving emp details from front end to back end
  saveEmployee() {
    this.service.saveEmployee(this.employee).subscribe((data) => {
      console.log(data);
    });
    this.navigate();
  }

  // for navigating
  navigate() {
    this.router.navigate(['employee-list']);
  }

  // onSubmit functions
  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
