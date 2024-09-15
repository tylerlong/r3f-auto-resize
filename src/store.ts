import { manage } from 'manate';

export class Store {
  public canvasSize = { width: window.innerWidth, height: window.innerHeight };
}

const store = manage(new Store());

window.addEventListener('resize', () => {
  store.canvasSize.width = window.innerWidth;
  store.canvasSize.height = window.innerHeight;
});

export default store;
