import {Text} from "./Text"

export class TextDecorator implements Text{
        private textContent: Text;
 
    constructor(textContent: Text) {
        this.textContent = textContent;
    }
 
    public modifyText(): string {
        return this.textContent.modifyText();
    }
}