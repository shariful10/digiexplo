import { jwtVerify } from "jose";
import { JWT_ACCESS_SECRET } from "@/components/helper";

export const validateUser = async (token: string) => {
	// const user = jwt.sign(token,'3ab1184db972063f9215203945d9af4eb663200f9f96ba980ce5303d862d45dc')
	const user = await jwtVerify(
		token,
		new TextEncoder().encode(
			"3ab1184db972063f9215203945d9af4eb663200f9f96ba980ce5303d862d45dc"
		)
	);
	return user.payload;
};
