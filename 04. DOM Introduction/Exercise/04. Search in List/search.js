function search() {
   //let towns = document.getElementById('towns').children;
   // друг вариант:
   let towns = document.querySelectorAll('ul#towns li'); 
   // -> колекция от ul с id towns и всички li вътре в ul-a

   let result = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;
   let matches = 0;

   for (let el of towns) {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = '';
   }

   for (let el of towns) {

      let town = el.textContent;

      if(town.match(searchText)) {
         matches++;
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${matches} matches found`;
}
