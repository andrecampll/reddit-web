import {
  Box,
  Button,
} from '@chakra-ui/core';
import { Form, Formik } from 'formik';
import { useMutation } from 'urql';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';

interface registerProps {}

const REGISTER_MUTATION = `
  mutation Register($username: String!, $password: String!){
    register(options: { username: $username, password: $password }) {
      errors {
        message
      }
      user {
        id
        username
        createdAt
        updatedAt
      }
    }
  }
`;

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(REGISTER_MUTATION);

  return (
    <Wrapper variant="small" >
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => {
          return register(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              placeholder="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />
            </Box>
            <Button
              type="submit"
              variantColor="teal"
              mt={4}
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Register;
