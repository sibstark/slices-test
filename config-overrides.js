const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      addWebpackAlias({
        "@slices/utils": path.resolve(__dirname, "src/shared/lib"),
        "@slices/ui": path.resolve(__dirname, "src/shared/ui"),
        "@slices/infrastructure": path.resolve(__dirname, "src/shared/model"),
        "@slices/pages": path.resolve(__dirname, "src/pages")
      })
    )(config, env)
  );
};
