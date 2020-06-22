import { GraphQLFieldResolver, GraphQLTypeResolver } from "graphql";
import { ApolloContext } from "./ApolloContext";


export type GraphlResolver<P = any, A = any> = GraphQLFieldResolver<P, ApolloContext, A>;