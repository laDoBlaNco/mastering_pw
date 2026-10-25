nodeschool-curriculum.md
# Node.js Systems Mastery Roadmap

This repository tracks my journey from advanced JavaScript hobbyist to professional Node.js systems engineer. The curriculum is sequentially ordered to build mastery across engine primitives, binary memory allocation, native C++ bindings, advanced control flow, and network architecture. (Resources are dated, but the selected concepts are real and relevant)

## 🗺️ Master Tracking Checklist

### Phase 1: Engine Primitives & Memory Mechanics
*Focuses on execution contexts, scope resolution, and physical object lookups in memory before handling heavy backend operations.*

- [x] **1. learnyounode**
  * **Core Focus:** Grounding in raw, framework-free server execution and native OS interaction (`fs`, `path`, `http`).
  * **Installation:** `npm install -g learnyounode`
- [x] **2. planetproto**
  * **Core Focus:** Stripping away syntax sugar to expose how execution context (`this`) and the prototype chain map object links in memory.
  * **Installation:** `npm install -g planetproto`
- [x] **3. scope-chains-closures**
  * **Core Focus:** Deeply mastering lexical environment states, scope chains, and garbage collection mechanics to prevent production memory leaks.
  * **Installation:** `npm i @workshoppers/scope-chains-closures -g`

---

### Phase 2: Binary Buffers, System Bindings & I/O
*Transitions directly into systems architecture. Looks under the hood of Node.js to bridge JavaScript, raw memory, and the underlying C++ layer (libuv/V8).*

- [ ] **4. bytewiser**
  * **Core Focus:** Manipulating unmanaged raw binary memory blocks, buffers, and typed data packets directly inside the runtime.
  * **Installation:** `npm install -g bytewiser`
- [ ] **5. goingnative**
  * **Core Focus:** Systems-level look at Node architecture. Exploring how JavaScript compiles down and communicates across the boundary to native C++ add-ons using the V8 API.
  * **Installation:** `npm install -g goingnative`
  * *Note: Requires a local build toolchain installed on your machine (`build-essential`, Xcode CLI tools, or VS C++ build tools).*
- [ ] **6. stream-adventure**
  * **Core Focus:** Mastering backpressure and the stream API. Learning to parse and pipe high-volume data files incrementally without overwhelming server memory limits.
  * **Installation:** `npm install -g stream-adventure`

---

### Phase 3: Control Flow & Advanced Logic Engines
*Optimizes code composition, timing accuracy via the event loop, and structural predictability.*

- [ ] **7. promise-it-wont-hurt**
  * **Core Focus:** Mastering microtask execution queues and handling asynchronous errors cleanly to prevent thread crashes.
  * **Installation:** `npm install -g promise-it-wont-hurt`
- [ ] **8. functional-javascript-workshop**
  * **Core Focus:** Crafting deterministic code architectures using recursion, closures, higher-order compositions, and currying patterns.
  * **Installation:** `npm install -g functional-javascript-workshop`
- [ ] **9. learn-generators**
  * **Core Focus:** Building state-machine pipelines using generator functions (`function*`) to manually pause and resume loop steps.
  * **Installation:** `npm install -g learn-generators`

---

### Phase 4: Strings, Tooling & Application Routing
*Connects low-level data and operational mechanisms into standard network patterns and API layer architectures.*

- [ ] **10. regex-adventure**
  * **Core Focus:** Crafting deterministic string processing engines to parse unstructured stream text or run secure input validations.
  * **Installation:** `npm install -g regex-adventure`
- [ ] **11. expressworks**
  * **Core Focus:** Pulling all components together into an API web server using HTTP statuses, proper routing parameters, and pipeline middleware.
  * **Installation:** `npm install -g expressworks`

---

## 💡 Code Verification Constraints
To maintain a modern, professional engineering workflow while using these classic modules:
1. **The Export Rule:** NodeSchool runners use CommonJS. When an exercise requires an entry point or utility module export, explicitly use `module.exports = function() { ... }`.
2. **Modern Syntax Integration:** Inside the solution scripts, deliberately use modern ES features (`async/await`, optional chaining `?.`, nullish coalescing `??`, object destructuring, and arrow functions) to build production-grade muscle memory.
3. **Local Installation Fallback:** If global `-g` flags trigger system permission locks (`EACCES`), install locally using `npm install <module-name>` and execute using `npx <module-name>`.
