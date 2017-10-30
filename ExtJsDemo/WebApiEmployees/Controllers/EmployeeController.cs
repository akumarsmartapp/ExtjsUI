using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiEmployees.Models;

namespace WebApiEmployees.Controllers
{
    public class EmployeeController : ApiController
    {
        public static IList<Employee> listEmp = new List<Employee>()
        {
            #region HardCoded Data
                new Employee()
                {empId = 1, empName = "Devid", department = "IT", empAddress = "India", empAge = 32},
                new Employee()
                {empId = 2, empName = "Devid", department = "IT", empAddress = "India", empAge = 32},
                new Employee()
                {empId = 3, empName = "Devid", department = "IT", empAddress = "India", empAge = 32},
                new Employee()
                {empId = 4, empName = "Devid", department = "IT", empAddress = "India", empAge = 32}
                
            #endregion 

        };

        [HttpGet]
        public IList<Employee> FindEmployee()
        {
            return listEmp;
        }

        ///// <summary>
        ///// Get Employee Details By id
        ///// </summary>
        ///// <param name="empId"></param>
        ///// <returns></returns>
        //[HttpGet]
        //[AcceptVerbs("GET")]
        //[ActionName("GetEmployeeByID")]
        //public Employee Get(int empId)
        //{
        //    Employee empDetails = new Employee();
        //    var empResponse = from emp in listEmp where emp.empId == empId select emp;
        //    foreach (var item in empResponse)
        //    {
        //        empDetails.empId = item.empId;
        //        empDetails.empName = item.empName;
        //        empDetails.empAddress = item.empAddress;
        //        empDetails.department = item.department;
        //        empDetails.empAge = item.empAge;
        //    }

        //    return empDetails;

        //}

        /// <summary>
        /// Adding Employee Details 
        /// </summary>
        /// <param name="empDetails"></param>
        /// <returns></returns>
        [HttpPost]
        [ActionName("AddEmployeeDetails")]
        public bool AddEmployee(Employee empDetails)
        {
            if (empDetails != null)
            {
                listEmp.Add(empDetails);
                return true;
            }
            return false;
        }

        /// <summary>
        /// Delete Employee By Id
        /// </summary>
        /// <param name="empId"></param>
        /// <returns></returns>
        ///
        [HttpDelete]
        [ActionName("DeleteEmployee")]
        public bool DeleteEmployee(int empId)
        {
            var employee = from emp in listEmp where emp.empId == empId select emp;
            Employee empDetails = new Employee();
            foreach (var item in employee)
            {
                empDetails.empId = item.empId;
                empDetails.empName = item.empName;
                empDetails.empAddress = item.empAddress;
                empDetails.department = item.department;
                empDetails.empAddress = item.empAddress;
                empDetails.empAge = item.empAge;
            }

            if (employee != null)
            {
                listEmp.Remove(empDetails);
                return true;
            }
            return false;

        }

        [HttpPut]
        [ActionName("UpdateEmployee")]
        public bool UpdateEmployee(Employee empDetails)
        {
            if (empDetails != null)
            {
                var empResponse = listEmp.FirstOrDefault(x => x.empId == empDetails.empId);
                if (empResponse != null)
                {
                    listEmp.Remove(empDetails);
                    empResponse.empId = empDetails.empId;
                    empResponse.empName = empDetails.empName;
                    empResponse.empAge = empDetails.empAge;
                    empResponse.empAddress = empDetails.empAddress;
                    empResponse.department = empDetails.department;
                }
                return true;
            }
            return false;
        }

    }
}
