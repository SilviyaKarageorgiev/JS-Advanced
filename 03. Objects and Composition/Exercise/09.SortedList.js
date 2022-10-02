function createSortedList() {

    const sortedList = [];

    const list = {
        add: function(parameter) {
            sortedList.push(parameter);
            sortedList.sort((a, b) => a - b);
        },
        remove: function(index) {
            if (index >= 0 && index < sortedList.length) {
                sortedList.splice(index, 1);
                sortedList.sort((a, b) => a - b);
            } 
        },
        get: function(index) {
            if (index >= 0 && index < sortedList.length) {
                const element = sortedList[index];
                return element;
            }

        },
        get size(){
            return sortedList.length;
        }
    }

    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
