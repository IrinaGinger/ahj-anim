import Collapse from '../components/collapse/collapse';

export default class App {
    
    init() {
        const container = document.querySelector('.container');
        
        const collapseButton = new Collapse(container);
        collapseButton.bindToDOM();
    }
}

