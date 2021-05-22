/// <reference types="@vertx/core" />
// @ts-check
(async function() {
  try {
    // follow the rabbit hole.
    // open node_modules/@vertx/core/index.d.ts
    // see that fileSystem is a Java type, not a JS
    // see that on the JVM the readFile returns java: io.vertx.core.Future
    // yet it can still be used with async/await
    let package = await vertx.fileSystem().readFile('package.json');
    console.log(package.toString());
    process.exit(0);
  } catch (e) {
    console.trace(e);
  }
})();

