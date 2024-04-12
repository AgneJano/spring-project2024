import userModel from '../models/userModel.mjs'
import bcrypt from 'bcrypt';

const userController = {
//     getUsers: async (req, res) => {
//         try {
//             const users = await userModel.getUsers();
//             res.status(200).json(users);
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({ message: 'An error occurred while fetching users.' });
//         }
//     },

    createUser: async (req, res) => {
        try {
            const {
                name,
                email,
                password,
                repeatPassword,
                role = 'user',
            } = req.body;

            //Patikriname, ar toks vartotojas jau egzistuoja
              const existingUser = await userModel.getUserByEmail(email);

              if (existingUser) {
                res.status(400).json({ message: 'Email already exists.' });
                return;
              }

            if (password !== repeatPassword) {
                res.status(400).json({ message: 'Passwords do not match.' });
                return;
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            // Sukuriame naują vartotoją su užhash'uotu slaptažodžiu
            const newUser = {
                name,
                email,
                password: hashedPassword,
                registered_on: new Date(),
                role,
            };

            const createdUser = await userModel.createUser(newUser);

            res.status(201).json(createdUser);
        } catch (err) {
            console.error(err);
            res
                .status(500)
                .json({ message: 'An error occurred while creating the user.' });
        }
    },

};

export default userController;

//istrinti