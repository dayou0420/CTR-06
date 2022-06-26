function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}

class ProjectInput {
    tempmateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;
    mandayElement: HTMLInputElement;

    constructor() {
        this.tempmateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.tempmateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionElement = this.element.querySelector('#description') as HTMLInputElement;
        this.mandayElement = this.element.querySelector('#manday') as HTMLInputElement;

        this.configure();
        this.attach();
    }

    private submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.titleElement.value);
    }

    // @Autobind
    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();
