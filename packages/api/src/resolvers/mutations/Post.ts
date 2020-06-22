// import { ApolloContext } from 'types/ApolloContext';

// interface PostArgs {
//   author: number; 
//   title: string;
// }

// export const post = (parent: any, {title, author: id}: PostArgs, {db, headers}: ApolloContext ) => {
//   return db.post.create({
//     data: {
//       title,
//       author: {
//         connect: {
//           id
//         }
//       }
//     }
//   });
// }