import {TextDecorator} from "./TextDecorator"

export class BoldDecorator extends TextDecorator {
    public modifyText(): string {
        return super.modifyText().bold();
    }
}