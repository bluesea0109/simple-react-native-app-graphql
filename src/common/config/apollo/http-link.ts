import {HttpLink} from '@apollo/client/link/http';

export function createHttpLink() {
  return new HttpLink({
    uri: 'https://api-us-west-2.graphcms.com/v2/ckttvza940uve01xo835g3b8z/master',
  });
}
