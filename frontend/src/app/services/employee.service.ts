import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { EmployeeComponent } from '../components/employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_APLI = 'http://localhost:3000/api/employees';

  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0
  };
  employees: Employee[] = [];
  
  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.URL_APLI);
    
  }

  createEmployee(employee: Employee){
    return this.http.post(this.URL_APLI, employee);
  }

  editEmployee(employee: Employee){
    return this.http.put(`${this.URL_APLI}/${employee._id}`, employee);
  }

  deleteEmployee(_id: String){
    return this.http.delete(`${this.URL_APLI}/${_id}`);
  }

}
