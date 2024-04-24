import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag-drop-form';
  
  drag = [
    'Autocomplete',
    'Button',
    'Checkbox Group',
    'Date Field',
    'File Upload',
    'Header',
    'Hidden Input',
    'Number',
    'Paragraph',
    'Radio Group',
    'Select',
    'Text Field',
    'Text Area'
  ];
  
  drop: string[] = [];
  isHovered: boolean = false;
  editedItem: string | null = null;
  currentValue: string = ''; 
  selectedHeaderType: string = 'h1';
  numberValue: number = 0;
  paragraphText: string = '';
  radioOptions: string[] = ['Option 1', 'Option 2', 'Option 3']; 
  selectedRadioOption: string = ''; 
  selectOptions: string[] = ['Option 1', 'Option 2', 'Option 3']; 
  selectedOption: string = ''; 
  textAreaValue: string = ''; 
  checkboxValues: { [key: string]: boolean } = { option1: false, option2: false, option3: false };
  addingInput: boolean = false;
  selectedInputType: string = '';

  task(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const copy = event.previousContainer.data[event.previousIndex];
      this.drop.splice(event.currentIndex, 0, copy);
    }
  }

 toggleHover() {
    this.isHovered = true; 
  }

  toggleHoverLeave() {
    if (this.drop.length === 0) {
      this.isHovered = false;
    }
  }

  addToDrop(item: string) {
    this.drop.push(item);
  }

  editItem(item: string) {
    this.editedItem = item;
  }
 
  copyItem(item: string) {
    const index = this.drop.indexOf(item);  
    if (index !== -1) {
      const copy = item;
      this.drop.splice(index + 1, 0, copy);
    }
  }   

  deleteItem(item: string) {
    const index = this.drop.indexOf(item);
    if (index !== -1) {
      this.drop.splice(index, 1);
    }
  } 

  moveUp(item: string) {
    const index = this.drop.indexOf(item);
    if (index > 0) {
      const temp = this.drop[index - 1];
      this.drop[index - 1] = this.drop[index];
      this.drop[index] = temp;
    }
  } 

  moveDown(item: string) {
    const index = this.drop.indexOf(item);
    if (index < this.drop.length - 1) {
      const temp = this.drop[index + 1];
      this.drop[index + 1] = this.drop[index];
      this.drop[index] = temp;
    }
  }   
  
  clear() {
    this.drop = [];
  }

  save(buttonClicked?: string) {
    if (buttonClicked === 'Submit') {
      console.log('Button Value:', buttonClicked);
    } else if (buttonClicked === 'Reset') {
      console.log('Button Value:', buttonClicked);
    } else if (this.editedItem === 'Autocomplete') {
      console.log('Autocomplete Value:', this.currentValue);
    } else if (this.editedItem === 'Checkbox Group') {
      console.log('Checkbox Values:', this.checkboxValues);
    } else if (this.editedItem === 'Date Field') {
      console.log('Date Value:', this.currentValue);
    } else if (this.editedItem === 'Header') {
      console.log('Selected Header Type:', this.selectedHeaderType);
    } else if (this.editedItem === 'Number') {
      console.log('Number Value:', this.numberValue);
    } else if (this.editedItem === 'Paragraph') {
      console.log('Paragraph Text:', this.paragraphText);
    } else if (this.editedItem === 'Radio Group') {
      console.log('Selected Radio Option:', this.selectedRadioOption);
    } else if (this.editedItem === 'Select') {
      console.log('Selected Option:', this.selectedOption);
    }else if (this.editedItem === 'Text Field') {
      console.log('Text Field Value:', this.currentValue);
    }else if (this.editedItem === 'Text Area') {
      console.log('Text Area Value:', this.textAreaValue);
    }
    this.editedItem = null;
  }
  
  onFileSelected(event: any) {  
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  }
  
  closeForm() {
  this.editedItem = null; 
  }

  buttonAction1() {
    this.save('Submit');
  }
  
  buttonAction2() {
    this.save('Reset');
  }

  checkboxOptions: { id: string, label: string }[] = [
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' },
    { id: 'option3', label: 'Option 3' }
  ];  

  addCheckboxOption() {
    const newOptionId = `option${this.checkboxOptions.length + 1}`;
    const newOptionLabel = `Option ${this.checkboxOptions.length + 1}`;
    this.checkboxValues[newOptionId] = false;
    this.checkboxOptions.push({ id: newOptionId, label: newOptionLabel });
  }

  addRadioOption() {
    const newOption = `Option ${this.radioOptions.length + 1}`;
    this.radioOptions.push(newOption);
  }

  addSelectOption() {
    const newOption = `Option ${this.selectOptions.length + 1}`;
    this.selectOptions.push(newOption);
  }
  
  addTextField() {
    const newTextField = '';
    this.drop.push(newTextField);
  }

  addAutocomplete() {
    const newAutocomplete = '';
    this.drop.push(newAutocomplete);
  }

  addTextarea() {
    const newItem = '';
    this.drop.push(newItem);
  }
} 