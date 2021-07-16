import {TextDecorator} from "./TextDecorator"
export class StrikeDecorator extends TextDecorator {
    public modifyText(): string {
        return super.modifyText().strike();
    }
}