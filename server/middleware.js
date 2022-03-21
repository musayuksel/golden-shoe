import helmet from "helmet";
import path from "path";

export const configuredHelmet = () =>
	helmet({
		contentSecurityPolicy: {
			useDefaults: false,
			directives: {
				defaultSrc: ["'self'"],
				objectSrc: ["'none'"],
				scriptSrc: ["'self'", "unpkg.com", "polyfill.io"],
				styleSrc: ["'self'", "https: 'unsafe-inline'"],
				imgSrc: ["'self'", "http: data:"],
				upgradeInsecureRequests: [],
			},
		},
		crossOriginResourcePolicy: { policy: "cross-origin" },
	});

export const httpsOnly = () => (req, res, next) => {
	if (!req.secure) {
		return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
	}
	next();
};

export const logErrors = () => (err, _, res, next) => {
	console.log("**************************** logErrors being called...");
	if (res.headersSent) {
		return next(err);
	}
	console.error(err);
	res.sendStatus(500);
};

export const pushStateRouting = (apiRoot, staticDir) => (req, res, next) => {
	console.log({ apiRoot, staticDir });
	if (req.method === "GET" && !req.url.startsWith(apiRoot)) {
		return res.sendFile(path.join(staticDir, "index.html"));
	}
	next();
};
