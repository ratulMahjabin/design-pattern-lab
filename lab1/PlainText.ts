import {Text} from "./Text"
export class PlainText implements Text {
 
    data: string
 
    constructor(data: string) {
        this.data = data
    }
 
    public modifyText(): string {
        return this.data;
    }
}