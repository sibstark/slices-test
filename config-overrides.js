const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = function(config, env) {
	return Object.assign(
		config,
		override(
			addWebpackAlias({
				"@slices/utils": path.resolve(__dirname, 'src/utils'),
				"@slices/ui": path.resolve(__dirname, 'src/shared/ui'),
			})
		)(config, env)
	);
};
