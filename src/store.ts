import { manage } from 'manate';
import { debounce } from 'lodash';

const rows = 5; // how many rows in the game

export class Store {
  public canvasSize = { width: window.innerWidth, height: window.innerHeight };

  public get zoom(): number {
    // because camera has a 45 degree field of view, we need to calculate the zoom factor (2 ** 0.5)
    return (this.canvasSize.height / rows) * 2 ** 0.5;
  }

  public get arenaSize(): { width: number; height: number } {
    const height = rows;
    const width = this.canvasSize.width / this.zoom;
    return { width, height };
  }
}

const store = manage(new Store());

// debounce the resize event
const dHandler = debounce(() => {
  store.canvasSize.width = window.innerWidth;
  store.canvasSize.height = window.innerHeight;
}, 100);

window.addEventListener('resize', dHandler);

export default store;
