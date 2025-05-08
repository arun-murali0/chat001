import { ErrorRequestHandler } from "express";
import { AppError } from "../../utils/shared/errorHandler";
import { HTTPSTATUS } from "../../config/httpConfig";


export const errorHandler: ErrorRequestHandler = (err, req, res, _next): any => {


	// json syntax check
	if (err instanceof SyntaxError) {
		return res.status(HTTPSTATUS.CONFLICT).json({ message: "Invalid json format,please check your input" })
	}

	// custom error
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({ message: "custom error", error: err.message })
	}

	console.error(`error happened at PATH ${req.header}`, err)
	// default error
	return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
		message: "Internal server error",
		error: err?.message || "unknown error"
	})
}