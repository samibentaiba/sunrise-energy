import { NEXT_AUTH_OPTIONS } from "@/config/auth";
import { getServerSession } from "next-auth";

const session = await getServerSession(NEXT_AUTH_OPTIONS);
const user = session?.user;

export { user, session };
