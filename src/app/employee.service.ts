import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  private baseURl = 'http://localhost:2020/api/v1/employees';

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURl}`);
  }

  saveEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURl}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURl}/${id}`);
  }

  updateEmployeeById(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURl}/${id}`, employee);
  }

  deleteEmployeeById(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURl}/${id}`);
  }
}
