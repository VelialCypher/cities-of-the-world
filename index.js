const fs = require("fs");
const readline = require("readline");

const paths = ["part1.csv", "part2.csv", "part3.csv"];

const output = {
	cities: []
};

for(const file of paths) {
	const rl = readline.createInterface({
		input: fs.createReadStream(file),
		output: process.stdout,
		terminal: false
	});
	
	rl.on("line", async (line) => {
		const splited = line.split(",")[3].replace(/"/gi, "");
		if(!/.\b[A-Z]+\b/.test(splited)) {
			output.cities.push(splited);
		}
	})
	.on("close", () => {
		fs.writeFileSync("output.json", JSON.stringify(output));
	});
}