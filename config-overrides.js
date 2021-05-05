const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = function(config, env) {
	return Object.assign(
		config,
		override(
			addWebpackAlias({
				"@utils": path.resolve(__dirname, 'src/utils'),
			})
		)(config, env)
	);
};
