function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let rows = document.querySelectorAll('tbody tr');
      let input = document.getElementById('searchField');

      for (let row of rows) {
         row.classList.remove('select');

         if(row.innerHTML.includes(input.value)){
            row.className = 'select';
         }
      }

      input.value = '';
   }
}