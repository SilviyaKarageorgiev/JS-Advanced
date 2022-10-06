function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = JSON.parse(document.querySelector('#inputs textarea').value);

      let data = {};

      for (let rest of input) {

         let [nameRest, workersArr] = rest.split(' - ');
         let workers = workersArr.split(', ');

         for (let worker of workers) {
            let [name, salary] = worker.split(' ');

            if (!data.hasOwnProperty(nameRest)) {
               data[nameRest] = {};
            }
            data[nameRest][name] = Number(salary);
         }
      }

      let bestSalary = 0;
      let bestRestaurant = '';

      let entries = Object.entries(data);

      for(let [name, workers] of entries) {

         let salaries = Object.values(workers);
         let totalSalaries = 0;

         for(let salary of salaries){
            totalSalaries += salary;
         }

         let averageSalary = totalSalaries / salaries.length;

         if(averageSalary > bestSalary) {
            bestSalary = averageSalary;
            bestRestaurant = name;
         }
      }
      let ordered = Object.entries(data[bestRestaurant]).sort((a, b) => b[1] - a[1]);

   let str = '';
      ordered.forEach(w => str += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${bestSalary.toFixed(2)} Best Salary: ${ordered[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = str;
   }
}