import httpStatus from "http-status";
import config from "../../config";
import { AppError } from "../../errors/AppError";
import { User } from "../user/user.model";
import { ILoginUser } from "./auth.interface";
import { CreateToken } from "./auth.utils";
import jwt, { JwtPayload } from "jsonwebtoken";

const loginUser = async (payload: ILoginUser) => {
	// check if the user exists
	// const isUserExist = await User.findOne({ id: payload?.id });
	const isUserExist = await User.userExists(payload?.email);
	const user = await User.findOne({ email: payload?.email });

	if (!isUserExist) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found !");
	}
	// throw error if password not matches:
	if (!payload?.password || !isUserExist?.password) {
		throw new AppError(httpStatus.BAD_REQUEST, "Password is required");
	}
	const isPasswordMatch = await User.isPasswordMatch(
		payload?.password,
		isUserExist?.password
	);

	if (!isPasswordMatch) {
		throw new AppError(httpStatus.FORBIDDEN, "Password doesn't match");
	}

	// create token and sent to the client
	const jwtPayload = {
		_id: isUserExist?._id,
		username: isUserExist?.username,
		role: isUserExist?.role,
	};

	const accessToken = CreateToken(
		jwtPayload,
		config.jwt_access_secret as string,
		config.jwt_access_expires as string
	);

	// Access Granted: Send AccessToken, RefreshToken
	return {
		accessToken,
		user,
	};
};

const validateUser = async (token: string) => {
	// checking if the given token is valid | verify the received token
	const decoded = jwt.verify(
		token,
		config.jwt_access_secret as string
	) as JwtPayload;

	const { _id, username, role } = decoded;
	const isUserExist = await User.findOne({
		_id: _id,
		username: username,
		role: role,
	}).select("-isDeleted -createdAt -updatedAt -__v");
	console.log(isUserExist);

	if (!isUserExist) {
		throw new AppError(httpStatus.NOT_FOUND, "User not found !");
	}

	return { user: isUserExist };
};

export const AuthServices = {
	loginUser,
	validateUser,
};
