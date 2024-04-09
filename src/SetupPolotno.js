import createStore from 'polotno/model/store';
import { reaction } from 'mobx';
import { unstable_setTextOverflow } from 'polotno/config';

// Create and export global Polotno store instance
export const store = createStore({
  container: document.getElementById('root'),
  key: 'YOUR_API_KEY', // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});

// In console type "window.polotnoStore" to see the current polotno store object
// Or to see elements on the screen in page 1, type "window.polotnoStore.pages[0].children[0].toJSON()"
window.polotnoStore = store;

const page = store.addPage();
page.set({
  background: '#FA8072',
  width: 1000,
  height: 1000,
})

page.addElement({
  x: 50,
  y: 50,
  name: "ELEMENT 1",
  type: 'text',
  fill: 'black',
  text: 'Angelo',
  fontWeight: 'bold',
});

page.addElement({
  x: 100,
  y: 100,
  name: "ELEMENT 2",
  type: 'text',
  fill: 'black',
  text: `This is page ID ${page.id}`,
  fontWeight: 'bold',
  wrap: "none"
});

reaction(
  () => {
    return store.selectedElements.map((el) => el.id);
  },
  () => {
    const el = store.selectedElements[0];
    if (!el) {
      return;
    }
    if (el.name === 'ELEMENT 1') {
      unstable_setTextOverflow('resize');
    } else if (el.name === 'ELEMENT 2') {
      unstable_setTextOverflow('change-font-size');
    }
  }
);