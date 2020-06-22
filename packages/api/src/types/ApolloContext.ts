import { PrismaClient } from "@prisma/client";
import { IncomingHttpHeaders } from "http";

export interface ApolloContext {

  db: PrismaClient

	headers: IncomingHttpHeaders
	
	userId?: string;

}
