// CPU.js
// An emulation framework for building operating systems targeting every browser in the world.

// Delcare databases | Powered by Dexie.js
const registry = new Dexie('registry');
const localfs = new Dexie('localfs');
const drivers = new Dexie('drivers');
const services = new Dexie('services');
const processes = new Dexie('processes');

// Config File Storage
const fileConfig = {
    drives : ["localfs"],
    schema : "default"
}