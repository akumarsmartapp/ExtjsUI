using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiEmployees.Models;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;


namespace WebApiEmployees.Controllers
{
    public class EmployeeController : ApiController
    {
        string ConnectionString = ConfigurationManager.ConnectionStrings["EDC"].ConnectionString;
        public IList<Employee> listEmp = new List<Employee>()
        {
            //#region HardCoded Data
            //    new Employee()
            //    {empId = 1, empName = "Devid", department = "IT", empAddress = "India", empAge = 32},
            //    new Employee()
            //    {empId = 2, empName = "Devid", department = "IT", empAddress = "India", empAge = 32},
            //    new Employee()
            //    {empId = 3, empName = "Devid", department = "IT", empAddress = "India", empAge = 32},
            //    new Employee()
            //    {empId = 4, empName = "Devid", department = "IT", empAddress = "India", empAge = 32}
                
            //#endregion 

        };

        [HttpGet]
        public IList<Employee> FindEmployee()
        {
            Employee emp = null;
            SqlDataReader reader = null;
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            {
                SqlCommand cmd = new SqlCommand("Select empId,empName,empAddress,department,age from EmployeeDetails where isActive=1", connection);
                connection.Open();
                cmd.Connection = connection;
                reader = cmd.ExecuteReader();
                
                while (reader.Read())
                {
                    emp = new Employee();
                    emp.empId = Convert.ToInt32(reader.GetValue(0));
                    emp.empName = reader.GetValue(1).ToString();
                    emp.empAddress = reader.GetValue(2).ToString();
                    emp.department = reader.GetValue(3).ToString();
                    emp.empAge = Convert.ToInt32(reader.GetValue(4));
                    listEmp.Add(emp);
                }
                return listEmp;
                
            }
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
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    SqlCommand sqlCmd = new SqlCommand();
                    sqlCmd.CommandType = CommandType.Text;
                    sqlCmd.CommandText = "INSERT INTO EmployeeDetails (empId,empName,empAddress,department,age) Values (@empId,@empName,@empAddress,@department,@age)";
                    sqlCmd.Connection = connection;
                    sqlCmd.Parameters.AddWithValue("@empId", empDetails.empId);
                    sqlCmd.Parameters.AddWithValue("@empName", empDetails.empName);
                    sqlCmd.Parameters.AddWithValue("@empAddress", empDetails.empAddress);
                    sqlCmd.Parameters.AddWithValue("@department", empDetails.department);
                    sqlCmd.Parameters.AddWithValue("@age", empDetails.empAge);
                    connection.Open();
                    int rowInserted = sqlCmd.ExecuteNonQuery();
                }
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
        public bool DeleteEmployee(int empDetails)
        {
            //var employee = from emp in listEmp where emp.empId == empId select emp;
            //Employee empDetails = new Employee();
            //foreach (var item in employee)
            //{
            //    empDetails.empId = item.empId;
            //    empDetails.empName = item.empName;
            //    empDetails.empAddress = item.empAddress;
            //    empDetails.department = item.department;
            //    empDetails.empAddress = item.empAddress;
            //    empDetails.empAge = item.empAge;
            //}

            //if (employee != null)
            //{
            //    listEmp.Remove(empDetails);
            //    return true;
            //}
            
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    SqlCommand sqlCmd = new SqlCommand();
                    sqlCmd.CommandType = CommandType.Text;
                    sqlCmd.CommandText = "INSERT INTO EmployeeDetails (isActive) Values (@isActive)";
                    sqlCmd.Connection = connection;
                    sqlCmd.Parameters.AddWithValue("@isActive", false);
                    connection.Open();
                    int rowInserted = sqlCmd.ExecuteNonQuery();
                }
            return true;

        }

        [HttpPut]
        [ActionName("UpdateEmployee")]
        public bool UpdateEmployee(Employee empDetails)
        {
            if (empDetails != null)
            {

                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    SqlCommand sqlCmd = new SqlCommand();
                    sqlCmd.CommandType = CommandType.Text;
                    sqlCmd.CommandText = "UPDATE EmployeeDetails set empName=@empName,empAddress=@empAddress,department=@department,age=@age where empId=@empId";
                    sqlCmd.Connection = connection;
                    sqlCmd.Parameters.AddWithValue("@empId", empDetails.empId);
                    sqlCmd.Parameters.AddWithValue("@empName", empDetails.empName);
                    sqlCmd.Parameters.AddWithValue("@empAddress", empDetails.empAddress);
                    sqlCmd.Parameters.AddWithValue("@department", empDetails.department);
                    sqlCmd.Parameters.AddWithValue("@age", empDetails.empAge);
                    connection.Open();
                    int rowUpdated = sqlCmd.ExecuteNonQuery();
                }
                //var empResponse = listEmp.FirstOrDefault(x => x.empId == empDetails.empId);
                //if (empResponse != null)
                //{
                //    listEmp.Remove(empDetails);
                //    empResponse.empId = empDetails.empId;
                //    empResponse.empName = empDetails.empName;
                //    empResponse.empAge = empDetails.empAge;
                //    empResponse.empAddress = empDetails.empAddress;
                //    empResponse.department = empDetails.department;
                //}
                return true;
            }
            return false;
        }

    }
}
