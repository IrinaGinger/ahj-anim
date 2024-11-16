import './collapse.css'; 

export default class Collapse {
    constructor(parent) {
        this.parent = parent;
        this.activeTimeout = null;

        this.mouseClick = this.mouseClick.bind(this);
        this.hide = this.hide.bind(this);
    }

    static markup(buttonName, content) {
        return `
      <button class="collapse-button" type="button">${buttonName}</button>

      <div class="collapse-element">
        <div class="collapse-content">
          ${content}
        </div>
      </div>
    `;
    }

    bindToDOM() {
        const buttonName = 'Collapse';
        const content = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident';

        this.parent.innerHTML = this.constructor.markup(
            buttonName,
            content,
        );

        const collapseButton = this.parent.querySelector('.collapse-button');
        const collapseElement = this.parent.querySelector('.collapse-element');

        this.collapseHeight = collapseElement.clientHeight;
        collapseElement.style.maxHeight = '0px';

        collapseButton.addEventListener('click', this.mouseClick);
    }

    hide(elem) {
        elem.style.maxHeight = '0px';
        elem.classList.remove('show');
    }

    mouseClick = (e) => {
        e.preventDefault();
        const collapseBtn = e.target;
        const collapseElem = collapseBtn.closest('.container').querySelector('.collapse-element');

        if (!collapseElem.classList.contains('show')) {  
            if (this.activeTimeout) {
                clearTimeout(this.activeTimeout);
            }  
            
            collapseBtn.classList.add('button-active');
            collapseElem.style.maxHeight = `${this.collapseHeight}px`;
            collapseElem.classList.add('show');
            this.activeTimeout = setTimeout(() => {
                this.hide(collapseElem);
                collapseBtn.classList.remove('button-active');
            }, 5000);
        } else {
            this.hide(collapseElem);
        }
    }
}