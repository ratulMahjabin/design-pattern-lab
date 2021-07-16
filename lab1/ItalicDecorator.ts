import {TextDecorator} from "./TextDecorator"

export class ItalicDecorator extends TextDecorator {
    public modifyText(): string {
        return super.modifyText().italics();
    }
}