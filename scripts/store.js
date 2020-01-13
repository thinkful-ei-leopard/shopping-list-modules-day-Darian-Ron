import item from './item.js';

const store = {
    items: [],
    hideCheckedItems: false
  };

function findById(id) {
    //console.log(id);
    let itemReturn = store.items.find(item => item.id === id);
    console.log(itemReturn)
    return store.items.find(item => item[id] === id);
};

function addItem(name) {
    try{
        item.validateName(name);
        this.items.push(item.create(name));
    } catch(e) {
        console.log(`Cannot add item: ${error.message}`);
    }
};

/**************************THIS WASNT WORKING WHEN WE STOPPED YESTERDAY, RETURNED UNDEFINED ***********/
function findAndToggleChecked(id) {
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
    findAndDelete
};

