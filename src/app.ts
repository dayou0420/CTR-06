/**
 * Project Type
 */

enum ProjectStatus {
    Active, Finished
}

class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public manday: number,
        public status: ProjectStatus
    ) {}
}

/**
 * Project State Management
 */

type Lintener = (items: Project[])=> void;

/**
 * Projects State Management
 */

class ProjectState {
    private listeners: Lintener[] = [];
    private projects: any[] = [];
    private static instance: ProjectState;

    private constructor() {

    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title: string, description: string, manday: number) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            manday,
            ProjectStatus.Active
        );
        this.projects.push(newProject);

        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }

    addListner(listenerFn: Lintener) {
        this.listeners.push(listenerFn);
    }
}

const projectState = ProjectState.getInstance();

/**
 * Validation
 */

interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(validatableInput: Validatable) {
    let isValid = true;

    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }

    if (
        validatableInput.minLength != null && 
        typeof validatableInput.value === 'string'
    ) {
        isValid = 
            isValid && validatableInput.value.length >= validatableInput.minLength;
    }

    if (
        validatableInput.maxLength != null && 
        typeof validatableInput.value === 'string'
    ) {
        isValid = 
            isValid && validatableInput.value.length <= validatableInput.maxLength;
    }

    if (
        validatableInput.min != null && 
        typeof validatableInput.value === 'number'
    ) {
        isValid = 
            isValid && validatableInput.value >= validatableInput.min;
    }

    if (
        validatableInput.max != null && 
        typeof validatableInput.value === 'number'
    ) {
        isValid = 
            isValid && validatableInput.value <= validatableInput.max;
    }

    return isValid;
}

/**
 * autobind decorator
 */
function autobind(target: any, name: string, descriptor: PropertyDescriptor) {
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

class ProjectList {
    tempmateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        this.tempmateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        this.assignedProjects = [];

        const importedNode = document.importNode(this.tempmateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLElement;
        this.element.id = `${this.type}-project`;

        projectState.addListner((projects: Project[]) => {
            this.assignedProjects = projects;
            this.renderProjects();
        });

        this.attach();
        this.renderContent();
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`);
        for (const prjItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            /**
             * listEl.appendChild(listItem);
             */
            listEl?.appendChild(listItem);
        }
    }

    private renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = 
            this.type === 'active' ? 'Active Project' : 'Completed Project';
    }

    private attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}

class ProjectInput {
    tempmateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    mandayInputElement: HTMLInputElement;

    constructor() {
        this.tempmateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.tempmateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.mandayInputElement = this.element.querySelector('#manday') as HTMLInputElement;

        this.configure();
        this.attach();
    }

    private getherUserInput(): [string, string, number] | void {

        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredManday = this.mandayInputElement.value;

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true
        };

        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };

        const mandayValidatable: Validatable = {
            value: +enteredManday,
            required: true,
            min: 1,
            max: 1000
        };

        if (
            !validate(titleValidatable) || 
            !validate(descriptionValidatable) || 
            !validate(mandayValidatable)
        ) {
            alert('Incorrect inputs');
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredManday];
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.mandayInputElement.value = '';
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.getherUserInput();
        if (Array.isArray(userInput)) {
            const [title, description, manday] = userInput ;
            projectState.addProject(title, description, manday);
            this.clearInputs();
        }
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
