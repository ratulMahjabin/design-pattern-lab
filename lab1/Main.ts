import { PlainText } from "./PlainText";
import { BoldDecorator } from "./BoldDecorator";
import { ItalicDecorator } from "./ItalicDecorator";
import { StrikeDecorator } from "./StrikeDecorator";
import { Display } from "./WriteFile";

const text = "SWE-4502";

const plain = new PlainText(text);
const italic = new ItalicDecorator(plain);
const strike = new StrikeDecorator(plain);
const bold = new BoldDecorator(plain);

Display(plain);
Display(italic);
Display(strike);
Display(bold);
