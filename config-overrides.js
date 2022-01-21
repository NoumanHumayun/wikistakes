var rewireAlias = require("react-app-rewire-alias");

module.exports = function override(config) {
  return rewireAlias.alias({
    components: "src/components",
    assets: "src/assets",
    styles: "src/styles",
    general: "src/general",
    context: "src/context",
    helpers: "src/helpers",
    routes: "src/routes",
    services: "src/services",
    configs: "src/configs",
    mock: "src/mock"
  })(config);
};
