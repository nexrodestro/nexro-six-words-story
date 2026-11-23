import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — one complete story in exactly six words.
// The ransom is paid, the freedom it buys is refused, and the reader
// fills in why the hostage stayed.
const STORY = "The ransom paid. The hostage stayed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
