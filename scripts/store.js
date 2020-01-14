import item from './item.js';

const store = {
    items: [],
    hideCheckedItems: false,
    toggleCheckedFilter(){
        this.hideCheckedItems = !this.hideCheckedItems;
    }
  };

function findById(id) {
    let itemReturn = store.items.find(item => item.id === id);
    // logs: findById itemReturn is [object Object] and its type is object
    console.log(`findById itemReturn is: ${itemReturn} and its type is ${typeof(itemReturn)}`);
    // THIS fixed it. Trying to return directly with store.items.find() was returning [Object object],
    // but saving the value to a variable and returning that variable worked.
    return itemReturn;
    // return store.items.find(item => item[id] === id); <-- old code looked like this only.
};

function addItem(name) {
    try{
        item.validateName(name);
        this.items.push(item.create(name));
    } catch(e) {
        console.log(`Cannot add item: ${error.message}`);
    }
};

/**************************THIS WASNT WORKING WHEN WE STOPPED YESTERDAY, RETURNED UNDEFINED. FIXED! ***********/
function findAndToggleChecked(id) {
    // let item = this.findById(id);
    let item = this.findById(id);
    console.log (item);
    item.checked = !item.checked; 
};

function findAndUpdateName(id, newName) {
    try{
        item.validateName(newName);
        let bestName = this.findById(id);
        bestName.name = newName;
    } catch(e){
        console.log(`Cannot update name: ${error.message}`);
    }
};

function findAndDelete(id) {

    console.log(`FindAndDelete caughtItem: ${id}`);
    // find the index of said item
    let itemIndex = this.items.findIndex(element => {
        console.log(element.id);
        return element.id === id;
    });
    console.log(itemIndex);
    // remove item from the array
    this.items.splice(itemIndex, 1);
};


export default {
    items: store.items,
    hideCheckedItems: store.hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter() {}
};

