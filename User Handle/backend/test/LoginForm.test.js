// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import LoginForm from '../../Frontend/src/components/LoginForm/LoginForm'; // Replace with the actual path

// // Mock the axios library
// jest.mock('axios');

// describe('LoginForm Component', () => {
//   it('should render the login form', () => {
//     render(<LoginForm />);
//     // Add more assertions based on your component's structure
//     expect(screen.getByText('Login')).toBeInTheDocument();
//     expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
//     expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
//   });

//   it('should handle form submission and redirect on success', async () => {
//     // Mock the axios.post function to simulate a successful login
//     axios.post.mockResolvedValue({ data: 'Success' });

//     render(<LoginForm />);
//     fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
//     fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
//     fireEvent.click(screen.getByRole('button', { name: 'Login' }));

//     // Wait for the axios.post mock to be resolved
//     await waitFor(() => {
//       // Add assertions based on your expected behavior
//       expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/login', {
//         email: 'test@example.com',
//         password: 'password123',
//       });
//       // Add more assertions based on your component's behavior
//     });
//   });

//   it('should handle form submission and display errors on failure', async () => {
//     // Mock the axios.post function to simulate a failed login
//     axios.post.mockRejectedValue({ message: 'Error message' });

//     render(<LoginForm />);
//     fireEvent.click(screen.getByRole('button', { name: 'Login' }));

//     // Wait for the axios.post mock to be rejected
//     await waitFor(() => {
//       // Add assertions based on your expected behavior
//       expect(screen.getByText('Form validation failed')).toBeInTheDocument();
//       // Add more assertions based on your component's behavior
//     });
//   });
// });
