// env variables
// command line arguments
// exit code
// process lifecycle events

// read backend port from env file
// read secrets - db urls, api keys, password, google auth, etc
// read CLI arguments in scripts

// process.env
import process from "node:process";

// dotenv will contain all env variables
const nodeEnv = process.env.NODE_ENV ?? "development";

// process.env value are always either strings or undefined
// so you need to convert if another datatype is needed
const port = Number(process.env.PORT ?? 3000);

