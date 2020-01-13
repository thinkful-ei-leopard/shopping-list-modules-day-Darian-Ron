import item from './item.js';

const store = {
    items: [],
    hideCheckedItems: false
  };

function findById(id) {
    //console.log(id);
    // let itemReturn = store.items.find(item => item.id === id);
    //console.log(itemReturn);
    let someId = store.items[0].id;
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

function findAndToggleChecked(id) {
    let item = this.findById(id);
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
    // finds an itme by its Id
    let caughtItem = this.findById(id);
    console.log(caughtItem);
    // find the index of said item
    let itemIndex = this.items.findIndex(element => {
        element === caughtItem;
    });
    // remove item from the array
    this.items.splice(itemIndex, 1);

    // FILTER WAY
    // this.items.filter(element => {
    //     element !== caughtItem;
    // });
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

